"use client";

const sideProjects = [
  {
    title: "Tiffin Service Platform",
    impact: "Connected 100+ home chefs with students and office-goers.",
    description: "Built a mobile app to simplify meal subscriptions from local vendors.",
    emoji: "🥡",
    tags: ["App", "FoodTech", "Startup"],
  },
  {
    title: "Android Malware Detection",
    impact: "99%+ recall on malware datasets.",
    description: "ML-based malware detection research, presented at campus events.",
    emoji: "🔐",
    tags: ["ML", "Security", "Research"],
  },
  // Add more as you wish
];

export default function SideProjectsPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">Side Projects</h1>
      <div className="flex flex-col gap-8 items-center">
        {sideProjects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-xl shadow-lg p-6 w-full max-w-lg flex flex-col gap-2 border-t-4 border-purple-300"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{proj.emoji}</span>
              <h3 className="text-xl font-bold text-purple-900">{proj.title}</h3>
            </div>
            <span className="text-purple-700 font-semibold text-sm">{proj.impact}</span>
            <p className="text-gray-700">{proj.description}</p>
            <div className="flex gap-2 flex-wrap mt-1">
              {proj.tags?.map(tag => (
                <span key={tag} className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="mailto:parthkhungar33@gmail.com"
          className="bg-purple-600 hover:bg-purple-800 text-white px-7 py-3 rounded-full font-bold shadow-md text-lg transition"
        >
          Want to collaborate? 💡
        </a>
      </div>
    </div>
  );
}
