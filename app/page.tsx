"use client";
import Image from "next/image";
import Chatbot from "./Chatbot";
import { motion } from "framer-motion";
import FunFactsCarousel from "./FunFactsCarousel";
import SkillsBar from "./SkillsBar";
import ProjectsSection from "./ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f7f9fa] flex flex-col">
      <main className="max-w-3xl w-full mx-auto px-3 sm:px-8 py-8 flex flex-col gap-10">
        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row items-center gap-6 pb-4">
          <div className="flex-shrink-0">
            <Image
              src="/hero.jpg"
              alt="Parth Khungar"
              width={110}
              height={110}
              priority
              className="rounded-full border-2 border-neutral-200 shadow"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 text-left">Parth Khungar</h1>
            <h2 className="text-lg sm:text-xl text-[#3864a8] font-semibold mb-2 text-left">Building Smarter Products</h2>
            <a
              href="/ParthKhungarResume.pdf"
              download
              className="bg-[#3864a8] text-white px-5 py-2 rounded-full shadow hover:bg-[#244065] font-semibold text-base transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Project Highlights (show only a few with See More) */}
        <section className="bg-white rounded-xl shadow-md px-6 py-6 mb-3 border border-neutral-100">
          <h3 className="text-lg font-bold text-neutral-800 mb-4 pl-1">Work Project Highlights</h3>
          <ProjectsSection highlightsOnly={true} />
          <div className="mt-5 text-right">
            <a
              href="/work"
              className="text-[#3864a8] font-semibold hover:underline underline-offset-4 transition"
            >
              See all work projects &rarr;
            </a>
          </div>
        </section>

        {/* Fun Facts, Skills, About */}
        <section className="bg-white rounded-xl shadow-md px-6 py-5 border border-neutral-100">
          <FunFactsCarousel />
        </section>
        <section className="bg-white rounded-xl shadow-md px-6 py-5 border border-neutral-100">
          <SkillsBar />
        </section>

        {/* About/Blurb */}
        <p className="max-w-2xl mx-auto text-left text-neutral-700 text-base sm:text-lg px-2">
          AI-empowered Product Manager with proven expertise in building data-driven solutions, leading cross-functional teams, and creating real-world impact across pharma, utilities, and government sectors. Sports lover & tech enthusiast.
        </p>

        {/* Share Button */}
        <div className="flex justify-center my-4">
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
            className="bg-[#3864a8] hover:bg-[#244065] text-white font-semibold py-2 px-5 rounded-full shadow transition text-sm sm:text-base"
          >
            🔗 Share This Page
          </button>
        </div>
      </main>
      <Chatbot />
    </div>
  );
}
