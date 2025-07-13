"use client";

import db from "../api/db";
const cta = db.cta;

const CtaSection = () => {
  return (
    <>
      <section className="bg-gold/40 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">{cta.title}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{cta.subtitle}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gold bg-black hover:bg-gray-800"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
