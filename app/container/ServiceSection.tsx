"use client";

import db from "../api/db";
const services = db.services;

const Services = () => {
  return (
    <>
      <section id="services" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-gold font-semibold tracking-wide uppercase">
              {services.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-neutral-50 sm:text-4xl">
              {services.subTitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-amber-50 lg:mx-auto">
              {services.content}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.service.map((d, k) => (
              <div
                key={k}
                className="service-card bg-gray-200 dark:bg-dark rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-gray-50 p-3 rounded-md text-stone-950">
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
                    <h3 className="ml-3 text-lg font-bold text-gray-900">
                      {d.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{d.content}</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {d.points.map((d, k) => (
                      <li className="flex items-start" key={k}>
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="text-amber-950 font-medium hover:text-secondary"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
