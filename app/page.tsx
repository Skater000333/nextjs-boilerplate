import Image from "next/image";
import Chatbot from "./Chatbot";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white dark:bg-black">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* Hero Image */}
        <Image
          src="/hero.jpg" // Make sure to upload your image as hero.jpg to /public
          alt="Parth Khungar"
          width={180}
          height={180}
          priority
          className="rounded-full shadow-lg mb-2"
        />

        {/* Name and Tagline */}
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Parth Khungar
        </h1>
        <h2 className="text-xl text-center text-blue-700 dark:text-blue-300 font-semibold mb-4">
          Building Smarter Products
        </h2>
        <Chatbot />
        {/* Resume Download Button */}
        <a
          href="/ParthKhungarResume.pdf"
          download
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-800 transition"
        >
          Download Resume
        </a>

        {/* Short About */}
        <p className="max-w-xl text-center text-gray-700 dark:text-gray-300 mt-4">
          AI-empowered Product Manager with proven expertise in building data-driven solutions, leading cross-functional teams, and creating real-world impact across pharma, utilities, and government sectors. Sports lover & tech enthusiast.
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
