-- Partner+ Database Schema

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Users table (extends Clerk user data)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  major TEXT,
  academic_year TEXT,
  college TEXT,
  interests TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Posts table (partner requests)
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('Roommate', 'Teammate', 'Study Partner', 'Event Buddy', 'Activity Partner', 'Miscellaneous')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[],
  location TEXT,
  preferences JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forums table
CREATE TABLE forums (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  created_by UUID REFERENCES users(id) ON DELETE SET NULL,
  members_count INTEGER DEFAULT 0,
  posts_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forum posts table
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  forum_id UUID REFERENCES forums(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Matches table (when users connect)
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user1_id UUID REFERENCES users(id) ON DELETE CASCADE,
  user2_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID REFERENCES posts(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user1_id, user2_id)
);

-- Messages table (chat between matched users)
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID REFERENCES matches(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Likes table (for posts)
CREATE TABLE likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, post_id)
);

-- Forum members table
CREATE TABLE forum_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  forum_id UUID REFERENCES forums(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('member', 'moderator', 'admin')),
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(forum_id, user_id)
);

-- Indexes for better performance
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_category ON posts(category);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX idx_matches_user1_id ON matches(user1_id);
CREATE INDEX idx_matches_user2_id ON matches(user2_id);
CREATE INDEX idx_messages_match_id ON messages(match_id);
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX idx_forum_posts_forum_id ON forum_posts(forum_id);
CREATE INDEX idx_forum_members_forum_id ON forum_members(forum_id);

-- Row Level Security Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forums ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_members ENABLE ROW LEVEL SECURITY;

-- Users can read all users, update only their own
CREATE POLICY "Users can view all users" ON users FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid()::text = clerk_id);

-- Posts policies
CREATE POLICY "Anyone can view active posts" ON posts FOR SELECT USING (is_active = true);
CREATE POLICY "Users can create posts" ON posts FOR INSERT WITH CHECK (auth.uid()::text = (SELECT clerk_id FROM users WHERE id = user_id));
CREATE POLICY "Users can update own posts" ON posts FOR UPDATE USING (auth.uid()::text = (SELECT clerk_id FROM users WHERE id = user_id));
CREATE POLICY "Users can delete own posts" ON posts FOR DELETE USING (auth.uid()::text = (SELECT clerk_id FROM users WHERE id = user_id));

-- Forums policies
CREATE POLICY "Anyone can view active forums" ON forums FOR SELECT USING (is_active = true);
CREATE POLICY "Users can create forums" ON forums FOR INSERT WITH CHECK (auth.uid()::text = (SELECT clerk_id FROM users WHERE id = created_by));

-- Matches policies
CREATE POLICY "Users can view their matches" ON matches FOR SELECT USING (
  auth.uid()::text = (SELECT clerk_id FROM users WHERE id = user1_id) OR
  auth.uid()::text = (SELECT clerk_id FROM users WHERE id = user2_id)
);

-- Messages policies
CREATE POLICY "Users can view messages in their matches" ON messages FOR SELECT USING (
  auth.uid()::text = (SELECT clerk_id FROM users WHERE id = sender_id) OR
  auth.uid()::text = (
    SELECT clerk_id FROM users WHERE id = (
      CASE 
        WHEN (SELECT user1_id FROM matches WHERE id = match_id) = (SELECT id FROM users WHERE clerk_id = auth.uid()::text)
        THEN (SELECT user2_id FROM matches WHERE id = match_id)
        ELSE (SELECT user1_id FROM matches WHERE id = match_id)
      END
    )
  )
);

CREATE POLICY "Users can send messages in their matches" ON messages FOR INSERT WITH CHECK (
  auth.uid()::text = (SELECT clerk_id FROM users WHERE id = sender_id)
);

-- Functions for updating counts
CREATE OR REPLACE FUNCTION update_post_likes_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE posts SET likes_count = likes_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE posts SET likes_count = likes_count - 1 WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_post_likes_count
  AFTER INSERT OR DELETE ON likes
  FOR EACH ROW
  EXECUTE FUNCTION update_post_likes_count();

-- Function to update forum member count
CREATE OR REPLACE FUNCTION update_forum_member_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE forums SET members_count = members_count + 1 WHERE id = NEW.forum_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE forums SET members_count = members_count - 1 WHERE id = OLD.forum_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_forum_member_count
  AFTER INSERT OR DELETE ON forum_members
  FOR EACH ROW
  EXECUTE FUNCTION update_forum_member_count(); 