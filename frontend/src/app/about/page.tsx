export default function AboutPage() {
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
          
          {/* Our Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h1 className="text-4xl font-bold text-[#254d32] mb-6">Our Mission</h1>
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg text-[#254d32] leading-relaxed mb-4">
                College life shouldn't be about struggling alone. Partner+ exists to help students find their people - whether that's a compatible roommate, a study buddy for that challenging course, or teammates for the next big project.
              </p>
              <p className="text-lg text-[#254d32] leading-relaxed">
                We believe that meaningful connections are the foundation of academic success and personal growth.
              </p>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#254d32]">50k+</div>
                <div className="text-sm text-[#254d32] opacity-80">Students Connected</div>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#254d32]">200+</div>
                <div className="text-sm text-[#254d32] opacity-80">Universities</div>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#254d32]">95%</div>
                <div className="text-sm text-[#254d32] opacity-80">Success Rate</div>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#254d32]">4.9/5</div>
                <div className="text-sm text-[#254d32] opacity-80">User Rating</div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-[#254d32] text-center mb-4">Our Values</h2>
            <p className="text-lg text-[#254d32] text-center mb-12 opacity-80">The principles that guide everything we do at Partner+</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Authentic Connections</h3>
                <p className="text-[#254d32] leading-relaxed">
                  We prioritize genuine compatibility over superficial matches, helping you find people who truly complement your lifestyle and goals.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Inclusive Community</h3>
                <p className="text-[#254d32] leading-relaxed">
                  Every student deserves to find their place. We're committed to creating a welcoming space for all backgrounds, interests, and personalities.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254d32] mb-4">Student-First Innovation</h3>
                <p className="text-[#254d32] leading-relaxed">
                  Built by students, for students. We understand the unique challenges of college life and design solutions that actually work.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-[#254d32] mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-[#254d32] leading-relaxed">
              <p>
                Partner+ was born from a simple observation: finding roommates, study partners, or project teams shouldn't be left to chance. We've all experienced the frustration of mismatched living situations or struggled to find collaborators who share our vision.
              </p>
              <p>
                What started as a late-night dorm room conversation has evolved into a mission to revolutionize how students connect. We believe that meaningful relationships are essential for academic success, personal growth, and mental well-being.
              </p>
              <p>
                Today, Partner+ serves thousands of students across hundreds of universities, facilitating connections that lead to lifelong friendships, successful collaborations, and harmonious living arrangements. We're just getting started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 