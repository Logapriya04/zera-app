"use client"; // required if using Next.js 13+ with app router

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/skill-studio", label: "Skill Studio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* <nav className="bg-white shadow"></nav> */}
      <nav className="navbar  border-stroke-dark top-0 left-0 z-50 w-full fixed border-b backdrop-blur-xs bg-gray-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image
                src="/assets/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-gold">
                ZERAHAANS
              </span>
            </div>
            <div className="flex">
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4 transition-all duration-900">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mx-4 px-2 py-1 hover:text-gold transition-colors ${
                      pathname === item.href
                        ? "text-primary font-bold border-b-2 border-gold"
                        : "text-gray-300 "
                    }`}
                    // className="border-transparent text-neutral-50 hover:border-gold hover:text-gold px-3 py-2 active:text-gold text-sm font-medium border-b-2 no-underline transition-all duration-450"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {/* Theme Toggle */}
              <div className="flex">
                <button className="p-2 rounded-full focus:outline-none">
                  <svg
                    className="w-6 h-6 text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </button>
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-200 p-2 rounded-md focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6 text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          isMenuOpen
                            ? "M6 18L18 6M6 6l12 12"
                            : "M4 6h16M4 12h16M4 18h16"
                        }
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 space-y-1 bg-neutral-900 shadow">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-neutral-50  hover:text-orange-300 dark:hover:text-orange-300 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)} // auto-close on click
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
