"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({ children }) {
  const [menu, setmenu] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/signup" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        onClick={() => {
          if (menu) setmenu(false);
        }}
      >
        {children}

        <nav className="z-10 fixed bottom-1 left-0 right-0 p-4">
          {/* Mobile navigation */}
          <div className="sm:hidden">
            <div className="flex flex-col justify-around bg-black items-center antialiased text-xl shadow-[0_4px_15px_rgba(255,255,255,0.5)] w-[80vw] mx-auto p-2 rounded-xl">
              {menu ? (
                <div className="flex flex-col justify-around bg-black items-center gap-4 antialiased w-[100%]">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`w-[100%] text-center ${
                        pathname === item.href
                          ? "text-pink-500"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <span>{item.name}</span>
                    </a>
                  ))}
                  <div
                    onClick={() => setmenu(!menu)}
                    className="w-[100%] text-center text-white"
                  >
                    Menu
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setmenu(!menu)}
                  className="w-[100%] text-center text-gray-400 hover:text-gray-200 text-white"
                >
                  Menu
                </div>
              )}
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:block">
            <div className="flex justify-around bg-black items-center antialiased shadow-[0_4px_15px_rgba(255,255,255,0.5)] w-[60vw] mx-auto p-2 rounded-full">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-xl ${
                    pathname === item.href
                      ? "text-pink-500"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </body>
    </html>
  );
}
