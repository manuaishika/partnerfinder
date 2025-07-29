export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#f6faf7] via-[#eaf3ec] to-[#f6faf7] overflow-x-hidden">
      {/* Floating glassy shapes */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-white bg-opacity-40 rounded-3xl blur-2xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-white bg-opacity-30 rounded-3xl blur-2xl z-0" />
      <div className="absolute top-[40%] left-[-120px] w-[200px] h-[200px] bg-[#eaf3ec] bg-opacity-60 rounded-2xl blur-2xl z-0" />
      <div className="absolute bottom-[20%] right-[-120px] w-[180px] h-[180px] bg-[#eaf3ec] bg-opacity-60 rounded-2xl blur-2xl z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#254d32] mb-4">Core Features</h1>
            <p className="text-xl text-[#254d32] opacity-80">Four powerful ways to connect and build your college community</p>
          </div>

          {/* Smart Roommate Matching */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#254d32] mb-4">Smart Roommate Matching</h2>
              <p className="text-lg text-[#254d32] leading-relaxed mb-6">
                Our advanced algorithm considers lifestyle preferences, study habits, cleanliness levels, and social compatibility to find your perfect roommate match.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Compatibility scoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Detailed preference matching</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Safety verification</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Demo */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#254d32] mb-2">Interactive Demo</h3>
              <p className="text-[#254d32] text-center opacity-80">Experience how smart roommate matching works in action</p>
            </div>
          </div>

          {/* Study Partner Finder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Interactive Demo */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#254d32] mb-2">Interactive Demo</h3>
              <p className="text-[#254d32] text-center opacity-80">Experience how study partner finder works in action</p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#254d32] mb-4">Study Partner Finder</h2>
              <p className="text-lg text-[#254d32] leading-relaxed mb-6">
                Connect with classmates who share your academic goals. Find study groups, form project teams, or find a dedicated study buddy for challenging courses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Course-specific matching</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Study schedule sync</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Group formation tools</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Companions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#254d32] mb-4">Event Companions</h2>
              <p className="text-lg text-[#254d32] leading-relaxed mb-6">
                Never attend campus events alone again. Find like-minded students to join you for concerts, sports games, club meetings, and social gatherings.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Event discovery</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Companion matching</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Group event planning</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Demo */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#254d32] mb-2">Interactive Demo</h3>
              <p className="text-[#254d32] text-center opacity-80">Experience how event companions works in action</p>
            </div>
          </div>

          {/* Interest-Based Communities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Interactive Demo */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-20 h-20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#254d32] mb-2">Interactive Demo</h3>
              <p className="text-[#254d32] text-center opacity-80">Experience how interest-based communities works in action</p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#254d32] mb-4">Interest-Based Communities</h2>
              <p className="text-lg text-[#254d32] leading-relaxed mb-6">
                Join communities based on your hobbies, academic interests, career goals, or cultural background. Find your tribe on campus.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Custom communities</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Interest tags</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#4e9a6e] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#254d32]">Activity coordination</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plus More Great Features */}
          <div>
            <h2 className="text-4xl font-bold text-[#254d32] text-center mb-4">Plus More Great Features</h2>
            <p className="text-xl text-[#254d32] text-center mb-12 opacity-80">Additional tools and features to enhance your Partner+ experience</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Secure Messaging</h3>
                <p className="text-[#254d32] leading-relaxed">Chat safely with verified students</p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Safety First</h3>
                <p className="text-[#254d32] leading-relaxed">University email verification & reporting tools</p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Advanced Filters</h3>
                <p className="text-[#254d32] leading-relaxed">Find exactly who you're looking for</p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Smart Recommendations</h3>
                <p className="text-[#254d32] leading-relaxed">AI-powered suggestions based on your profile</p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h6v-2H4v2zM4 11h6V9H4v2zM4 7h6V5H4v2zM10 7h10V5H10v2zM10 11h10V9H10v2zM10 15h10v-2H10v2zM10 19h10v-2H10v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Real-time Notifications</h3>
                <p className="text-[#254d32] leading-relaxed">Stay updated on new matches and messages</p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Quick Connections</h3>
                <p className="text-[#254d32] leading-relaxed">Fast, efficient matching process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 