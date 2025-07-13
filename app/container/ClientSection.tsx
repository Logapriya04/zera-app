import React from "react";

const Services = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-500 mb-8">
          Trusted by leading organizations
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-1 flex justify-center">
            <img
              className="h-12 grayscale hover:grayscale-0 transition-all"
              src="https://placehold.co/150x60"
              alt="Company X logo in monochrome"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              className="h-12 grayscale hover:grayscale-0 transition-all"
              src="https://placehold.co/150x60"
              alt="Organization Y logo in monochrome"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              className="h-12 grayscale hover:grayscale-0 transition-all"
              src="https://placehold.co/150x60"
              alt="Enterprise Z logo in monochrome"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              className="h-12 grayscale hover:grayscale-0 transition-all"
              src="https://placehold.co/150x60"
              alt="Business W logo in monochrome"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              className="h-12 grayscale hover:grayscale-0 transition-all"
              src="https://placehold.co/150x60"
              alt="Corporation V logo in monochrome"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              className="h-12 grayscale hover:grayscale-0 transition-all"
              src="https://placehold.co/150x60"
              alt="Industry Partner U logo in monochrome"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
