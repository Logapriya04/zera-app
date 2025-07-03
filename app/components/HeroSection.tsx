"use client";

import HolographicButton from "./HolographicButton";

const HeroItems = {
  heading: "Digital Solutions for Modern Businesses",
  content:
    "Zerahaans powers businesses with web development, skilled workforce outsourcing, and hands-on training. From coding to careers, we build talent and deliver results.",
  contactBtn: "Get in Touch",
};

const HeroSection = () => {
  return (
    <div className="bg-radial-[at_25%_25%] from-gray-600 to-zinc-900 to-75% dark:text-neutral-50 text-black h-screen flex items-center justify-center relative">
      <section className="relative  h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-900 opacity-50 z-0"></div>

        {/* Background image with mask */}
        <div className="absolute inset-0 bg-[url('/assets/bgImage.jpg')] bg-cover  bg-center mask-[url('/assets/dots.png')] mask-repeat mask-size-cover opacity-80 z-0"></div>

        {/* Overlay (optional for contrast) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-zinc-900/60 z-0 max-w-7x mx-auto"></div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            {HeroItems.heading}
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-blue-100">
            {HeroItems.content}
          </p>
          <div className="mt-10 inline-flex items-center">
            <HolographicButton />
            {/* <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 font-medium rounded-md text-black bg-gold hover:bg-blue-50 transition"
            >
              {HeroItems.contactBtn}
            </a> */}
          </div>
        </div>
      </section>

      {/* <div className="mask-b-from-20% mask-b-to-80% mask-[url(/assets/dots.png)] ]"></div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {HeroItems.heading}{" "}
            <span className="bg-gradient inline bg-clip-text text-transparent">
              Mr..
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-base md:text-xl text-gray-900 dark:text-neutral-200">
            {HeroItems.content}
          </p>
          <div className="mt-10 inline-flex">
            <HolographicButton />
            <a
              href="#contact"
              className="relative inline-flex items-center px-6 py-3 border border-transparent text-base md:text-lg font-bold rounded-md text-white dark:text-black bg-black dark:bg-gold transition-all duration-150 ease hover:scale-110 shadow-lg/20 group"
            >
              <span className="z-10">{HeroItems.contactBtn}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent/30 via-yellow-500/30 rotate-[-45deg] transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[100%] before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-t before:from-transparent before:to-transparent/30 before:via-yellow-500/30 before:rotate-[-45deg] before:transition-opacity before:duration-500 before:opacity-0 group-hover:before:opacity-100 group-hover:before:translate-y-[100%]" />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
