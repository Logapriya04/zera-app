"use client";

import db from "../api/db";
const values = db.values;

const ValuesSection = () => {
  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-gold font-semibold tracking-wide uppercase">
              {values.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              {values.subTitle}
            </p>
          </div>

          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {values.content.map((d, k) => (
              <div
                key={k}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-gold dark:bg-gold text-black dark:text-white  mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={d.logo}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-amber-100 mb-2">
                  {d.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200">{d.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ValuesSection;
