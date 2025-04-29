import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venture Academy",
  description: "Online Classes",
};

export default function DashboardLayout({
  children,
}) {
  return (  
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <nav className="z-10 fixed bottom-1 left-0 right-0   p-4">
          <div className="flex justify-around bg-black items-center antialiased shadow-[0_4px_15px_rgba(255,255,255,0.5)] w-[90vw] sm:w-[60vw] mx-auto p-2 rounded-full">
            <a href="/" className="text-gray-400 hover:text-gray-200">
              <span>Home</span>
            </a>
            <a href="/about" className="text-gray-400 hover:text-gray-200">
              <span>About</span>
            </a>
            <a href="/courses" className="text-gray-400 hover:text-gray-200">
              <span>Courses</span>
            </a>
            <a href="/signup" className="text-gray-400 hover:text-gray-200">
              <span>Contact</span>
            </a>
          </div>
        </nav>
      </body>
    </html>
  );
}
