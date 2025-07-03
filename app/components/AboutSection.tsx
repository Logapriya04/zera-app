import React from "react";

const AboutZera = {
  title: "About Zerahaans",
  content:
    "Founded in 2020, Zerahaans is a forward-driven company committed to delivering innovative solutions across education, technology, and business services.",
};

const AboutSection = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c80323e9-f73e-4070-8905-7dc130ae2a90.png"
              alt="Diverse team of professionals collaborating in a modern office space with laptops and whiteboards"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:mt-0 mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About InnovateTech
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Founded in 2020, Zerahaans is a forward-driven company committed
              to delivering innovative solutions across education, technology,
              and business services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
