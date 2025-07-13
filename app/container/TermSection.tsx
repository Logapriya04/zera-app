"use client";

import db from "../api/db";
const teams = db.teams;

const TermSection = () => {
  return (
    <div>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-gold font-semibold tracking-wide uppercase">
              {teams.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-neutral-50 sm:text-4xl">
              {teams.subtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teams.team.map((d, k) => (
              <div key={k} className="group relative">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    className="w-full h-64 object-cover"
                    src="https://placehold.co/400x400"
                    alt={`Portrait of ${d.name}, ${d.designation} in Zerahaans Enterprises`}
                  />
                  <div className="team-overlay absolute inset-0 bg-gold bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-black font-serif px-4 text-center">
                      {d.vision}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-200">
                    {d.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermSection;
