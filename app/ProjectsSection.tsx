"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "PharmaSecure Inventory Management",
    front: "🚀 Automated 6+ departments • 25% under budget",
    back: "Built & rolled out a full inventory ops platform at PharmaSecure (2024), unlocked new revenue and cut costs for the entire org.",
  },
  {
    title: "AI-Driven Fraud Detection",
    front: "🤖 Real-time counterfeit alerts • 90% faster",
    back: "Designed machine learning pipeline to catch fraud in pharma supply chain, with hotspot prediction & risk scoring—now adopted by 10+ clients.",
  },
  {
    title: "Hybrid NILM for Smart Utilities",
    front: "🌱 97%+ accuracy • 20%+ energy savings",
    back: "Developed AI/NILM models and deployed for Tricity's first IoT water quality & loss detection, cutting non-revenue water losses by 90%.",
  },
  {
    title: "Avalanche Risk ML @ DRDO",
    front: "🏔️ 2000+ man-hours saved • 95% recall",
    back: "Automated avalanche hazard detection for Indian defense, optimizing safety protocols and saving time at scale.",
  },
];

export default function ProjectsSection({ highlightsOnly = false }) {
  const projects = highlightsOnly ? allProjects.slice(0, 2) : allProjects;
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (idx: number) => {
    setFlipped((arr) =>
      arr.map((f, i) => (i === idx ? !f : f))
    );
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          className="w-full min-h-[140px] perspective"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleFlip(idx)}
          style={{ cursor: "pointer" }}
        >
          <div className="relative w-full h-full">
            {/* Front */}
            <motion.div
              initial={false}
              animate={{ rotateY: flipped[idx] ? 180 : 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 bg-[#f5f7fa] shadow rounded-xl flex flex-col justify-center items-start text-left px-6 py-5 backface-hidden border border-neutral-100"
              style={{ zIndex: flipped[idx] ? 0 : 2 }}
            >
              <span className="text-lg mb-2">{project.front}</span>
              <span className="font-bold text-[#3864a8] text-base">{project.title}</span>
              <span className="text-xs text-gray-400 mt-2">(Click to flip)</span>
            </motion.div>
            {/* Back */}
            <motion.div
              initial={false}
              animate={{ rotateY: flipped[idx] ? 0 : -180 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 bg-white shadow rounded-xl flex flex-col justify-center items-start text-left px-6 py-5 backface-hidden border border-neutral-100"
              style={{ zIndex: flipped[idx] ? 2 : 0, transform: `rotateY(180deg)` }}
            >
              <span className="font-normal text-gray-900">{project.back}</span>
              <span className="text-xs text-gray-500 mt-4">(Click to flip back)</span>
            </motion.div>
          </div>
        </motion.div>
      ))}
      <style>{`
        .perspective { perspective: 1200px; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
