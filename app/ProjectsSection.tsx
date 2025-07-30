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
    <div className="w-full max-w-5xl mx-auto my-14 px-2 sm:px-4">
      <h3 className="text-2xl font-extrabold mb-2 text-blue-700 text-center">Projects & Impact</h3>
      <p className="text-center mb-8 text-gray-600 text-sm">
        <span className="bg-blue-50 px-3 py-1 rounded-full">Tap any card to flip and see details!</span>
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-9 justify-items-center">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="w-full max-w-xs sm:max-w-sm md:w-80 h-52 sm:h-60 perspective"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleFlip(idx)}
            style={{ cursor: "pointer" }}
          >
            <div className="relative w-full h-full">
              {/* Front */}
              <motion.div
                initial={false}
                animate={{ rotateY: flipped[idx] ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white dark:bg-gray-900 shadow-xl rounded-2xl flex flex-col justify-center items-center text-center px-4 py-4 backface-hidden"
                style={{ zIndex: flipped[idx] ? 0 : 2 }}
              >
                <span className="text-lg sm:text-xl mb-2">{project.front}</span>
                <span className="font-extrabold text-blue-800 text-base sm:text-lg dark:text-blue-200 mb-1">{project.title}</span>
                <span className="text-xs text-gray-400 mt-2">(Tap to flip)</span>
              </motion.div>
              {/* Back */}
              <motion.div
                initial={false}
                animate={{ rotateY: flipped[idx] ? 0 : -180 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-blue-100 dark:bg-blue-900 shadow-xl rounded-2xl flex flex-col justify-center items-center text-center px-4 py-4 backface-hidden"
                style={{ zIndex: flipped[idx] ? 2 : 0, transform: `rotateY(180deg)` }}
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">{project.back}</span>
                <span className="text-xs text-gray-600 dark:text-gray-300 mt-4">(Tap to flip back)</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .perspective { perspective: 1300px; }
        .backface-hidden { backface-visibility: hidden; }
        @media (max-width: 450px) {
          .max-w-xs { max-width: 98vw !important; }
        }
      `}</style>
    </div>
  );
}
