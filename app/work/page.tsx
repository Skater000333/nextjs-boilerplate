"use client";
import Image from "next/image";

const workData = [
  {
    company: "PharmaSecure",
    role: "Associate Product Manager",
    logo: "/pharmasecure-logo.png", // Or a nice icon, or skip if none
    period: "2024–Present",
    projects: [
      {
        title: "Inventory Management System",
        impact: "Automated 6+ departments, delivered 25% under budget, enabled new revenue streams.",
        description:
          "Led the rollout of a scalable inventory platform, improving operational efficiency and cross-team collaboration.",
        image: "/ims-project.jpg", // Optional, put a sample/placeholder for now
        tags: ["Product Management", "Automation", "B2B SaaS"],
      },
      {
        title: "AI-Driven Fraud Detection",
        impact: "Reduced detection time by 90%, adopted by 10+ enterprise clients.",
        description:
          "Designed and deployed real-time ML-powered fraud monitoring for pharma supply chain.",
        tags: ["Machine Learning", "Risk Analytics"],
      },
    ],
  },
  // Add more companies in the same format...
];

export default function WorkProjectsPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Work Projects</h1>
      <div className="flex flex-col gap-10">
        {workData.map((company) => (
          <section key={company.company} className="bg-white rounded-2xl shadow-md px-5 py-6 mb-2">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
              {company.logo && (
                <Image
                  src={company.logo}
                  alt={company.company}
                  width={50}
                  height={50}
                  className="rounded-lg bg-blue-50"
                />
              )}
              <div>
                <h2 className="text-xl font-bold text-gray-900">{company.company}</h2>
                <p className="text-blue-600 font-semibold">{company.role} <span className="text-gray-400">· {company.period}</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {company.projects.map((proj, idx) => (
                <div key={idx} className="bg-blue-50 rounded-xl p-4 shadow flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {proj.image ? (
                      <Image src={proj.image} alt={proj.title} width={56} height={56} className="rounded-md object-cover" />
                    ) : (
                      <div className="w-14 h-14 flex items-center justify-center bg-blue-200 rounded-md text-3xl">💼</div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">{proj.title}</h3>
                      <span className="text-blue-500 text-xs">{proj.impact}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{proj.description}</p>
                  <div className="flex gap-2 flex-wrap mt-1">
                    {proj.tags?.map(tag => (
                      <span key={tag} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
