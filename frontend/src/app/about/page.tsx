export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#f6faf7] via-[#eaf3ec] to-[#f6faf7] overflow-x-hidden">
      {/* Floating glassy shapes */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-white bg-opacity-40 rounded-3xl blur-2xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-white bg-opacity-30 rounded-3xl blur-2xl z-0" />
      <div className="absolute top-[40%] left-[-120px] w-[200px] h-[200px] bg-[#eaf3ec] bg-opacity-60 rounded-2xl blur-2xl z-0" />
      <div className="absolute bottom-[20%] right-[-120px] w-[180px] h-[180px] bg-[#eaf3ec] bg-opacity-60 rounded-2xl blur-2xl z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-[#254d32] mb-8">
            Why I Built This
          </h1>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <p className="text-lg text-[#254d32] leading-relaxed mb-6">
              When I first came to college, I thought I was ready. A new city, a new chapter — but no familiar faces.
            </p>
            
            <p className="text-[#254d32] leading-relaxed mb-6">
              I found myself eating alone in the dining hall, scrolling through social media to avoid the reality that I hadn't made a single meaningful connection. Every orientation icebreaker felt forced, every "let's grab coffee" ended in awkward silence.
            </p>
            
            <p className="text-[#254d32] leading-relaxed mb-8">
              I realized that finding the right partner — whether for a hackathon, a roommate, or just someone to share the journey with — shouldn't be this hard. So I built the tool I wished I had.
            </p>
            
            <div className="text-center">
              <p className="text-lg text-[#4e9a6e] italic font-medium">
                "If this helps even one person find their person — it's worth it."
              </p>
              <p className="text-sm text-[#254d32] mt-4 opacity-80">
                — Built with ❤️ for college students everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 