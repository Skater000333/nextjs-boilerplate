import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";  // If you use a context/provider
import Header from "./Header";
import Image from "next/image"; // For footer icons

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Khungar | Portfolio",
  description: "Parth's interactive product portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col`}
      >
        <Header />
        <Providers>
          <main className="w-full max-w-screen-lg mx-auto px-2 sm:px-8 flex-1 flex flex-col gap-8">
            {children}
          </main>
          {/* Footer */}
          <footer className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 py-6 w-full max-w-screen-lg mx-auto mt-6">
            <a
              className="flex items-center gap-2 hover:underline text-blue-700"
              href="https://linkedin.com/in/parth-khungar-6a1a3217b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={18}
                height={18}
              />
              LinkedIn
            </a>
            <a
              className="flex items-center gap-2 hover:underline text-blue-700"
              href="mailto:parthkhungar33@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={18}
                height={18}
              />
              Email Me
            </a>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
