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
    <div className="w-full flex flex-col items-center my-4">
      <div className="relative w-full max-w-lg mx-auto sm:rounded-2xl rounded-xl shadow-lg bg-gradient-to-br from-blue-100 to-blue-200/70 p-5 flex flex-col items-center backdrop-blur-md border border-blue-100 sm:min-h-[170px] min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center w-full"
          >
            <div className="text-4xl sm:text-5xl mb-2">{facts[idx].icon}</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800 text-center px-1 sm:px-2">
              {facts[idx].text}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-4 sm:gap-6 mt-4">
          <button
            onClick={prevFact}
            className="px-4 py-2 rounded-full bg-blue-300 hover:bg-blue-400 text-blue-900 font-bold shadow transition text-lg sm:text-xl"
            aria-label="Previous fact"
          >
            ◀
          </button>
          <button
            onClick={nextFact}
            className="px-4 py-2 rounded-full bg-blue-300 hover:bg-blue-400 text-blue-900 font-bold shadow transition text-lg sm:text-xl"
            aria-label="Next fact"
          >
            ▶
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 500px) {
          .max-w-lg {
            max-width: 97vw !important;
          }
        }
      `}</style>
    </div>
  );
}
