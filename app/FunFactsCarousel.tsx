"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const facts = [
  {
    icon: "🏅",
    text: "National Gold Medalist in Roller Skating",
  },
  {
    icon: "🚀",
    text: "Rolled out Inventory System 25% under budget at PharmaSecure",
  },
  {
    icon: "🤖",
    text: "Built AI fraud detection reducing pharma risk by 90%",
  },
  {
    icon: "🌱",
    text: "Enabled 20%+ energy savings with AI at CSIO",
  },
  {
    icon: "📊",
    text: "Scaled analytics adoption 50%+ with Power BI",
  },
  {
    icon: "🏆",
    text: "Fest Lead: Managed budget for 8k+ event",
  },
  {
    icon: "💡",
    text: "Loves building smarter products and mentoring others",
  },
];

export default function FunFactsCarousel() {
  const [idx, setIdx] = useState(0);

  function nextFact() {
    setIdx((i) => (i + 1) % facts.length);
  }
  function prevFact() {
    setIdx((i) => (i - 1 + facts.length) % facts.length);
  }

  return (
    <div className="w-full flex flex-col items-center my-6">
      <div className="relative w-full max-w-lg rounded-2xl shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 p-6 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl mb-2">{facts[idx].icon}</div>
            <div className="text-lg font-semibold text-gray-800 text-center">{facts[idx].text}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-6 mt-4">
          <button
            onClick={prevFact}
            className="px-3 py-1 rounded-full bg-blue-300 hover:bg-blue-400 text-blue-900 font-bold shadow transition"
            aria-label="Previous fact"
          >
            ◀
          </button>
          <button
            onClick={nextFact}
            className="px-3 py-1 rounded-full bg-blue-300 hover:bg-blue-400 text-blue-900 font-bold shadow transition"
            aria-label="Next fact"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
