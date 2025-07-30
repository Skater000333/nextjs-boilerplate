"use client";
import { motion } from "framer-motion";

const skills = [
  { label: "Product Management", value: 95 },
  { label: "Data Analysis & BI", value: 90 },
  { label: "Machine Learning", value: 85 },
  { label: "Project Leadership", value: 90 },
  { label: "Stakeholder Engagement", value: 88 },
  { label: "IoT & Real-time Systems", value: 80 },
  { label: "Sportsmanship", value: 100 },
];

export default function SkillsBar() {
  return (
    <div className="w-full max-w-xl mx-auto my-10 px-2">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 text-center">
        Key Skills & Superpowers
      </h3>
      <div className="flex flex-col gap-4">
        {skills.map((skill, idx) => (
          <div key={skill.label}>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">{skill.label}</span>
              <span className="text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-300">{skill.value}%</span>
            </div>
            <div className="w-full h-3 bg-blue-100 dark:bg-blue-950 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.value}%` }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="h-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-300 rounded-full shadow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
