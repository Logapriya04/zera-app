"use client";

import db from "../api/db";
const testimonals = db.testimonals;
// const testimonals = {
//   title: "Testimonials",
//   subTitle: "What Our Clients Say",
//   testimonal: [
//     {
//       profile:
//         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6edd6cdb-5c04-4b64-936b-4edf383b3aac.png",
//       name: "Sarah Johnson",
//       designation: "Marketing Director, TechCorp",
//       info: "InnovateTech transformed our digital presence with their web development expertise. Our traffic has increased by 300% since launch.",
//     },
//   ],
// };

const Testimonal = () => {
  return (
    <>
      <section className="py-20 bg-gold/30 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-gold font-semibold tracking-wide uppercase">
              {testimonals.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {testimonals.subTitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonals.testimonal.map((d, k) => (
              <div key={k} className="bg-gold/20 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://placehold.co/100"
                      // src={t.profile}
                      alt={`Portrait of ${d.name}, ${d.designation}`}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{d.name}</h4>
                    <p className="text-gold">{d.designation}</p>
                  </div>
                </div>
                <p className="text-gray-200">{d.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
