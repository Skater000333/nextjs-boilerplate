"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
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

export default function ProjectsSection() {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (idx: number) => {
    setFlipped((arr) =>
      arr.map((f, i) => (i === idx ? !f : f))
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Projects & Impact</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="w-72 h-52 perspective"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleFlip(idx)}
            style={{ cursor: "pointer" }}
          >
            <div className="relative w-full h-full">
              {/* Front */}
              <motion.div
                initial={false}
                animate={{ rotateY: flipped[idx] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-white dark:bg-gray-900 shadow-lg rounded-2xl flex flex-col justify-center items-center text-center px-6 py-4 backface-hidden"
                style={{ zIndex: flipped[idx] ? 0 : 2 }}
              >
                <span className="text-xl mb-2">{project.front}</span>
                <span className="font-bold text-blue-700 dark:text-blue-300">{project.title}</span>
                <span className="text-xs text-gray-400 mt-2">(Click to flip)</span>
              </motion.div>
              {/* Back */}
              <motion.div
                initial={false}
                animate={{ rotateY: flipped[idx] ? 0 : -180 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-blue-100 dark:bg-blue-900 shadow-lg rounded-2xl flex flex-col justify-center items-center text-center px-6 py-4 backface-hidden"
                style={{ zIndex: flipped[idx] ? 2 : 0, transform: `rotateY(180deg)` }}
              >
                <span className="font-semibold text-gray-800 dark:text-gray-100">{project.back}</span>
                <span className="text-xs text-gray-600 dark:text-gray-300 mt-4">(Click to flip back)</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .perspective { perspective: 1200px; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
