import React from "react";

const services = {
  title: "Services",
  subTitle: "What We Offer",
  content: "Comprehensive digital solutions tailored to your business needs.",
  features: [
    {
      title: "Web Development",
      logo: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      content:
        "Custom websites and web applications built with modern technologies.",
    },
    {
      title: "Cloud Solutions",
      logo: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      content: "Scalable cloud infrastructure and deployment strategies.",
    },
    {
      title: "Mobile Apps",
      logo: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z",
      content: "Cross-platform mobile applications for iOS and Android.",
    },
  ],
};

const Services = () => {
  return (
    <div className="py-12  dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-white dark:text-gold font-semibold tracking-wide uppercase">
            {services.title}
          </h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-neutral-50 sm:text-4xl">
            {services.subTitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-neutral-50 lg:mx-auto">
            {services.content}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.features.map((s, i) => (
              <div className="relative" key={i}>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black dark:bg-gray-200 text-white dark:text-stone-950">
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
                      d={s.logo}
                    />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-neutral-200">
                    {s.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
