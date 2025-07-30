"use client";
import Image from "next/image";
import Chatbot from "./Chatbot";
import { motion } from "framer-motion";
import FunFactsCarousel from "./FunFactsCarousel";
import SkillsBar from "./SkillsBar";
import ProjectsSection from "./ProjectsSection";
import Timeline from "./Timeline";

export default function Home() {
  return (
    <div
      className="font-sans min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-100 relative"
    >
      {/* Animated SVG Blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="30%" cy="30%" r="120" fill="#a7f3d0" fillOpacity="0.23">
            <animate attributeName="cy" values="30%;40%;30%" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="70%" cy="70%" r="200" fill="#93c5fd" fillOpacity="0.17">
            <animate attributeName="cy" values="70%;65%;70%" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="15%" r="90" fill="#818cf8" fillOpacity="0.10">
            <animate attributeName="cy" values="15%;25%;15%" dur="6s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <main className="w-full max-w-screen-lg px-2 sm:px-8 flex flex-col gap-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center sm:items-end gap-4 pt-8 sm:pt-14"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Image
              src="/hero.jpg"
              alt="Parth Khungar"
              width={140}
              height={140}
              priority
              className="rounded-full shadow-lg border-4 border-blue-200"
              style={{ width: 110, height: 110, objectFit: "cover" }}
            />
          </motion.div>
          {/* Name, Tagline, Resume */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Parth Khungar
            </motion.h1>
            <motion.h2
              className="text-lg sm:text-xl text-blue-700 font-semibold mb-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Building Smarter Products
            </motion.h2>
            <motion.a
              href="/ParthKhungarResume.pdf"
              download
              className="mt-1 px-4 py-1 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-800 transition font-semibold text-base sm:text-lg"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <Timeline />
        <FunFactsCarousel />
        <SkillsBar />
        <ProjectsSection />

        {/* About */}
        <p className="max-w-xl mx-auto text-center text-gray-700 mt-2 text-base sm:text-lg">
          AI-empowered Product Manager with proven expertise in building data-driven solutions, leading cross-functional teams, and creating real-world impact across pharma, utilities, and government sectors. Sports lover & tech enthusiast.
        </p>

        {/* Share Button */}
        <div className="flex justify-center my-5">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Parth Khungar Portfolio",
                  text: "Check out Parth Khungar's AI-powered portfolio!",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow transition text-sm sm:text-base"
          >
            🔗 Share This Page
          </button>
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-6 py-6 mt-10 w-full max-w-screen-lg mx-auto">
        <a
          className="flex items-center gap-2 hover:underline text-blue-700"
          href="https://linkedin.com/in/parth-khungar-6a1a3217b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline text-blue-700"
          href="mailto:parthkhungar33@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Email Me
        </a>
      </footer>
      <Chatbot />
    </div>
  );
}
