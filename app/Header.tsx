"use client";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Side Projects", href: "/side-projects" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "#contact" }, // (or replace with another page)
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
  return (
    <header className="flex items-center justify-between w-full py-5 px-4 sm:px-10 bg-transparent">
      <div className="font-extrabold text-2xl text-gray-800 tracking-tight">
        <Link href="/">Parth Khungar</Link>
      </div>
      <nav className="flex items-center gap-4 sm:gap-7">
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="text-md font-medium text-gray-700 hover:text-blue-700 transition"
          >
            {link.name}
          </Link>
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
