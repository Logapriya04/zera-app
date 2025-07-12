"use client";

import HolographicButton from "./HolographicButton";
import db from "../api/db"; // Uncomment if using a different import path

const HeroItems = db.HeroItems;

const HeroSection = () => {
  return (
    <div>
      {/* <div className="bg-radial-[at_25%_25%] from-gray-600 to-zinc-900 to-75% dark:text-neutral-50 text-black h-screen flex items-center justify-center relative"> */}
      <section className="relative  h-screen flex items-center justify-center text-white">
        {/* <div className=" absolute inset-0 bg-gradient-to-br from-white to-zinc-500 opacity-100 z-0"></div> */}

        {/* Background image with mask */}
        <div className="hero-bg  absolute inset-0 bg-[url('/assets/backImage.jpg')] bg-cover  bg-center mask-[url('/assets/dots.png')] mask-repeat mask-size-cover opacity-100 z-0"></div>

        {/* Overlay (optional for contrast) */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-30 to-zinc-40/60 z-0 max-w-7xl mx-auto"></div> */}

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col px-6 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>{HeroItems.heading}</span>
            <br />
            <span className="text-gold">{HeroItems.headColored}</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-blue-100">
            {HeroItems.content}
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <div className="rounded-md shadow">
              <a
                href="#services"
                className="w-full flex items-center justify-center px-8 py-3 border-2 border-gold text-base font-medium rounded-md text-white hover:bg-amber-200/30 hover:border-transparent md:py-4 md:text-lg md:px-10"
              >
                Our Services
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 bg-gold/50 text-base font-medium rounded-md text-primary  hover:bg-gold hover:text-black md:py-4 md:text-lg md:px-10"
              >
                get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-30 to-zinc-40/60 z-0 max-w-7xl mx-auto"></div>
    </div>
  );
};

export default HeroSection;
