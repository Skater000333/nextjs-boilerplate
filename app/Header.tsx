"use client";
import Image from "next/image";

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
    icon: "/linkedin.svg", // Add a LinkedIn svg/icon in your /public folder
  },
  {
    name: "Email",
    href: "mailto:parthkhungar33@gmail.com",
    icon: "/mail.svg", // Add a mail icon in /public
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full py-5 px-6 md:px-16 bg-transparent">
      <div className="font-extrabold text-2xl text-gray-800 tracking-tight">
        Parth Khungar
      </div>
      <nav className="flex items-center gap-7">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-md font-medium text-gray-700 hover:text-blue-700 transition"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-4 ml-2">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
              <Image src={s.icon} alt={s.name} width={22} height={22} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
