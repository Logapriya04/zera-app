import React from "react";
const HeroItems = {
  heading: "Digital Solutions for Modern Businesses",
  content:
    "We help startups and enterprises build innovative digital products that drive growth and customer satisfaction.",
  contactBtn: "Get in Touch",
};

const HeroSection = () => {
  return (
    <div className="gradient-bg dark:text-white text-black h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-10 ">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {HeroItems.heading}
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-base md:text-xl text-gray-900 dark:text-blue-100">
            {HeroItems.content}
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base md:text-lg font-medium rounded-md text-white dark:text-black bg-black dark:bg-gold hover:bg-blue-50 transition duration-150 ease-in-out"
            >
              {HeroItems.contactBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
