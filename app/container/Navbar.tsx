"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import db from "../api/db";

const navLinks = db.navLinks;

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);

  // Handle scroll detection only for same-page sections
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      // Update only if on the same page ("/#...")
      if (pathname === "/") {
        setActiveLink("/#" + current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle manual link click
  const handleClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar border-stroke-dark top-0 left-0 z-50 w-full fixed border-b backdrop-blur-xs bg-gray-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <span className="ml-2 text-xl font-bold text-gold">ZERAHAANS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 transition-all duration-900">
            {navLinks.map((item) => {
              const isActive = activeLink === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`mx-4 px-2 py-1 border-b-2 transition-colors ${
                    isActive
                      ? "font-bold border-gold text-gold"
                      : "text-gray-300 border-transparent hover:text-gold hover:border-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-1 bg-neutral-900 shadow">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === item.href
                  ? "text-gold font-bold"
                  : "text-neutral-50 hover:text-orange-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
