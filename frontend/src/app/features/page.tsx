export default function FeaturesPage() {
  const features = [
    {
      icon: "🎯",
      title: "Find a Teammate",
      description: "For hackathons, case comps, or building side projects.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🏠",
      title: "Find a Roommate",
      description: "Match with people based on lifestyle, location, and values.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🎭",
      title: "Event/Activity Partner",
      description: "Go to plays, classes, or study groups with someone.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🧠",
      title: "Swipe-based Matching",
      description: "Fast and intuitive, but based on depth — not just looks.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: "🔍",
      title: "Custom Filters",
      description: "Interests, budget, preferences, etc.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "🔒",
      title: "College Email Verification",
      description: "So it stays authentic and safe.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "🌱",
      title: "Profiles That Grow With You",
      description: "As your goals and vibes change, so can your matches.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What You Can Do Here
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to find the right partner — in college and beyond.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 text-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students who have already found their people.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 