"use client";

export default function Timeline() {
  return (
    <section id="work" className="w-full max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Career Timeline</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <ul className="timeline">
          <li>
            <span className="font-bold text-blue-600">2024–Present:</span> Associate Product Manager @ PharmaSecure — Rolled out Inventory Management, built AI/ML fraud detection, analytics platform, Power BI adoption.
          </li>
          <li>
            <span className="font-bold text-blue-600">2022–2024:</span> Project & Product Associate @ CSIO (Govt. of India) — AI for energy/water, NILM, IoT deployment, Tricity’s first IoT water quality system.
          </li>
          <li>
            <span className="font-bold text-blue-600">2021–2022:</span> Quality Analyst @ Smart Energy Water — QA for 10+ projects, led testing and UX improvements.
          </li>
          <li>
            <span className="font-bold text-blue-600">2020–2021:</span> ML Research Intern @ DRDO — Avalanche prediction AI, saved 2000+ man-hours.
          </li>
        </ul>
      </div>
    </section>
  );
}
