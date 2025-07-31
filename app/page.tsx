"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-8 py-10">
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row gap-6 items-center mb-12">
        <Image
          src="/hero.jpg"
          alt="Parth Khungar"
          width={110}
          height={110}
          className="rounded-full shadow-lg border-4 border-blue-100"
          style={{ objectFit: "cover" }}
        />
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="text-3xl font-bold text-gray-900">Parth Khungar</h1>
          <h2 className="text-lg text-blue-700 font-semibold">Building Smarter Products</h2>
          <a
            href="/ParthKhungarResume.pdf"
            download
            className="mt-2 px-5 py-1 bg-blue-600 text-white rounded-full shadow hover:bg-blue-800 transition font-semibold text-base"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="space-y-10">
        {/* Work Section Highlight */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Work Projects</h3>
            <ul className="list-disc ml-6 mb-2 text-gray-700">
              <li>AI-powered Inventory Management at PharmaSecure</li>
              <li>Real-time Counterfeit Detection Platform</li>
            </ul>
            <Link href="/work" className="text-blue-600 hover:underline font-semibold">
              See full work experience →
            </Link>
          </div>
        </div>
        {/* Side Projects Section Highlight */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Side Projects</h3>
            <ul className="list-disc ml-6 mb-2 text-gray-700">
              <li>Tiffin Service Platform for Local Vendors</li>
              <li>Android Malware Detection Research</li>
            </ul>
            <Link href="/side-projects" className="text-blue-600 hover:underline font-semibold">
              See all side projects →
            </Link>
          </div>
        </div>
        {/* Get to Know Parth Section Highlight */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Get to Know Parth</h3>
            <ul className="list-disc ml-6 mb-2 text-gray-700">
              <li>National Gold Medalist in Skating</li>
              <li>Community Educator & Mentor</li>
            </ul>
            <Link href="/get-to-know-parth" className="text-blue-600 hover:underline font-semibold">
              More about Parth →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
