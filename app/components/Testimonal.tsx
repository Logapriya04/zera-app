"use client"

const testimonals = {
  title: "Testimonials",
  subTitle: "What Our Clients Say",
  testimonal: [
    {
      profile:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6edd6cdb-5c04-4b64-936b-4edf383b3aac.png",
      name: "Sarah Johnson",
      designation: "Marketing Director, TechCorp",
      info: "InnovateTech transformed our digital presence with their web development expertise. Our traffic has increased by 300% since launch.",
    },
  ],
};

const Testimonal = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white dark:text-gold font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonals.testimonal.map((t, i) => (
            <div className="bg-gray-300 p-6 rounded-lg" key={i}>
              <div className="flex items-center">
                <img
                  src={t.profile}
                  alt={`Portrait of ${t.name}, ${t.designation}`}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-95">
                    {t.designation}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-900">{t.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
