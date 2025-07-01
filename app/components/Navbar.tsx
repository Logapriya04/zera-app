// components/Navbar.js
import Link from "next/link";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/skill-studio", label: "Skill Studio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// const Navbar = () => {
//   return (
//     <nav className="fixed w-full dark:bg-black bg-neutral-50 bg-opacity-80 text-gold flex justify-center py-4 z-20">
//       <ul className="flex space-x-6 text-lg font-semibold">
//         {navItems.map((item) => (
//           <li key={item.href}>
//             <Link
//               href={item.href}
//               className="hover:text-white transition-colors"
//             >
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };
const Navbar = () => {
  //   document.documentElement.classList.toggle(
  //     "dark",
  //     localStorage.theme === "dark" ||
  //       (!("theme" in localStorage) &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   );

  //   // Whenever the user explicitly chooses light mode
  //   localStorage.theme = "light";
  //   // Whenever the user explicitly chooses dark mode
  //   localStorage.theme = "dark";
  //   // Whenever the user explicitly chooses to respect the OS preference
  //   localStorage.removeItem("theme");

  return (
      <div className="fixed w-full bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/assets/logo.jpg"
                  alt="InnovateTech company logo with abstract geometric design in blue and purple"
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 text-xl font-bold text-gray-800 dark:text-amber-400">
                  ZERAHAANS
                </span>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8 text-gray-800">
              <Link
                href="#"
                className=" dark:text-neutral-50 dark:hover:text-orange-300 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>

              <a
                href="#"
                className="text-gray-800 dark:text-neutral-50 dark:hover:text-orange-300 hover:text-orange-300 px-3 py-2 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-neutral-50 dark:hover:text-orange-300 hover:text-orange-300 px-3 py-2 text-sm font-medium"
              >
                Skill Studio
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-neutral-50 dark:hover:text-orange-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-neutral-50 dark:hover:text-orange-300 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center">
              <button
                id="themeToggle"
                className="p-2 rounded-full focus:outline-none"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
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
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
