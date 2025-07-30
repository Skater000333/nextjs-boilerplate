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
    <header className="w-full px-3 sm:px-10 py-4 flex items-center justify-between bg-transparent z-50 relative">
      {/* Name/Logo */}
      <div className="font-extrabold text-xl sm:text-2xl text-gray-800 tracking-tight">Parth Khungar</div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-7">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-md font-medium text-gray-700 hover:text-blue-700 transition"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-3 ml-3">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
              <Image src={s.icon} alt={s.name} width={22} height={22} />
            </a>
          ))}
        </div>
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center px-2 py-1 border border-blue-200 rounded-lg"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Navigation"
      >
        <span className="w-6 h-0.5 bg-blue-700 block mb-1" />
        <span className="w-6 h-0.5 bg-blue-700 block" />
      </button>
      {/* Mobile Drawer */}
      {open && (
        <div className="absolute top-14 right-2 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3 md:hidden border border-blue-100">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            {socials.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                <Image src={s.icon} alt={s.name} width={22} height={22} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
