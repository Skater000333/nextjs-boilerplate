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
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      style={{
        background: "linear-gradient(135deg, #f0f6ff 0%, #c3dafe 100%)",
        minHeight: "100vh",
        position: "relative"
      }}
    >
      {/* Animated SVG Blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%">
          <circle cx="30%" cy="30%" r="180" fill="#a7f3d0" fillOpacity="0.28">
            <animate attributeName="cy" values="30%;40%;30%" dur="7s" repeatCount="indefinite"/>
          </circle>
          <circle cx="70%" cy="70%" r="250" fill="#93c5fd" fillOpacity="0.19">
            <animate attributeName="cy" values="70%;65%;70%" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="80%" cy="15%" r="120" fill="#818cf8" fillOpacity="0.13">
            <animate attributeName="cy" values="15%;25%;15%" dur="6s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex flex-col gap-10 row-start-2 items-center w-full">
        {/* HERO + ABOUT SECTION */}
        <section
          id="about"
          className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-6 mb-4"
        >
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="rounded-full overflow-hidden border-4 border-blue-100 shadow-xl w-48 h-48 bg-white flex items-center justify-center">
              <Image
                src="/hero.jpg"
                alt="Parth Khungar"
                width={200}
                height={200}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
          {/* Right: Headline + About Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Hi, I’m Parth <span className="text-3xl">👋</span>
            </h1>
            <p className="text-lg text-gray-700 font-medium mb-3 max-w-xl">
              <span className="font-bold text-blue-700">Product Manager</span> who builds smarter, data-driven solutions. I lead cross-functional teams, deliver real-world impact, and bring a sports champion’s focus to every project.
            </p>
            <div className="rounded-2xl bg-blue-50/80 p-4 shadow border-l-4 border-blue-400 max-w-lg mb-2">
              <div className="flex items-center gap-2 mb-1 text-blue-700 font-semibold text-lg">
                <span>✨ About Me</span>
              </div>
              <ul className="list-disc pl-5 text-gray-800 text-base leading-relaxed">
                <li>4+ years PM & tech experience across pharma, utilities, government</li>
                <li>AI, analytics, and product design enthusiast</li>
                <li>National gold medalist & state hockey captain 🏒</li>
                <li>Mentor, builder, and believer in fun at work</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Timeline */}
        <Timeline />
        {/* Fun Facts */}
        <FunFactsCarousel />
        {/* Skills */}
        <SkillsBar />
        {/* Projects */}
        <ProjectsSection />
        {/* Chatbot */}
        <Chatbot />

        {/* Share Button */}
        <div className="flex justify-center my-6">
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow transition"
          >
            🔗 Share This Page
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center mt-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-700"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-700"
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
    </div>
  );
}
