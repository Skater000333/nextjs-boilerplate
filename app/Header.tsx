"use client";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Side Projects", href: "#side-projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/parth-khungar-6a1a3217b",
    icon: "/linkedin.svg",
  },
  {
    name: "Email",
    href: "mailto:parthkhungar33@gmail.com",
    icon: "/mail.svg",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between py-4 px-5 md:px-14 bg-transparent z-30">
      {/* Name/Logo */}
      <div className="font-extrabold text-2xl text-gray-800 tracking-tight">
        Parth Khungar
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-md font-medium text-gray-700 hover:text-blue-700 transition"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-4 ml-3">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
              <Image src={s.icon} alt={s.name} width={22} height={22} />
            </a>
          ))}
        </div>
      </nav>

      {/* Hamburger for Mobile */}
      <button
        className="sm:hidden p-2 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <svg width={30} height={30} fill="none" stroke="currentColor" className="text-blue-700">
          <rect width="100%" height="100%" rx={6} fill="#e0ecff" />
          <line x1="7" x2="23" y1="12" y2="12" strokeWidth="2" />
          <line x1="7" x2="23" y1="18" y2="18" strokeWidth="2" />
        </svg>
      </button>

      {/* Mobile Nav Dropdown */}
      {open && (
        <div
          className="sm:hidden absolute top-16 right-4 w-64 bg-white rounded-2xl shadow-2xl border border-blue-100 p-4 flex flex-col gap-5 animate-slideDown z-40"
          style={{ minWidth: 180 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-1">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                <Image src={s.icon} alt={s.name} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-18px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.19s ease;
        }
      `}</style>
    </header>
  );
}
