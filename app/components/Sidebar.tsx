"use client";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Side Projects", href: "#side-projects" },
  { label: "Get to Know Parth", href: "#get-to-know" }
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
  }
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col gap-10 h-screen sticky top-0 w-[250px] bg-transparent pt-14 pl-6 border-r border-gray-100">
        <div>
          <Image
            src="/hero.jpg"
            alt="Parth Khungar"
            width={64}
            height={64}
            className="rounded-full mb-2 border-2 border-blue-100"
          />
          <h1 className="font-extrabold text-xl text-gray-800 mb-1">Parth Khungar</h1>
          <p className="text-gray-500 text-sm mb-3">Product Manager</p>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a key={link.label}
               href={link.href}
               className="py-1 px-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3 mt-auto mb-6">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
              <Image src={s.icon} alt={s.name} width={22} height={22} />
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Topbar */}
      <header className="flex lg:hidden w-full px-4 py-4 bg-white border-b border-gray-100 justify-between items-center fixed top-0 left-0 z-40">
        <div className="flex items-center gap-3">
          <Image src="/hero.jpg" alt="Parth" width={34} height={34} className="rounded-full border" />
          <span className="font-bold text-base text-gray-900">Parth Khungar</span>
        </div>
        <nav className="flex gap-3">
          {navLinks.map((link) => (
            <a key={link.label}
               href={link.href}
               className="text-blue-700 text-sm px-2 py-1 hover:underline underline-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="h-16 lg:hidden" /> {/* Spacer for fixed mobile topbar */}
    </>
  );
}
