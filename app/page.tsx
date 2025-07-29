"use client";
import Image from "next/image";
import Chatbot from "./Chatbot";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white dark:bg-black">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-2"
        >
          {/* Animated Hero Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/hero.jpg"
              alt="Parth Khungar"
              width={180}
              height={180}
              priority
              className="rounded-full shadow-lg mb-2"
            />
          </motion.div>

          {/* Animated Name */}
          <motion.h1
            className="text-4xl font-bold text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Parth Khungar
          </motion.h1>
          {/* Animated Tagline */}
          <motion.h2
            className="text-xl text-center text-blue-700 dark:text-blue-300 font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Building Smarter Products
          </motion.h2>

          {/* Animated Resume Button */}
          <motion.a
            href="/ParthKhungarResume.pdf"
            download
            className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-800 transition font-semibold"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <Chatbot />

        {/* Short About */}
        <p className="max-w-xl text-center text-gray-700 dark:text-gray-300 mt-4">
          AI- empowered Product Manager with proven expertise in building data-driven solutions, leading cross-functional teams, and creating real-world impact across pharma, utilities, and government sectors. Sports lover & tech enthusiast.
        </p>
      </main>

      <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center mt-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-700 dark:text-blue-300"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-700 dark:text-blue-300"
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
