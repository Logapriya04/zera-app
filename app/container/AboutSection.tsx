"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, StarIcon, HeartIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setPrefersReducedMotion(!mediaQuery.matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || window.innerWidth <= 768) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / innerWidth;
    const y = (e.clientY - innerHeight / 2) / innerHeight;
    setMouse({ x, y });
  };

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = {
    title: "About Zerahaans",
    subtitle: "Empowering Growth. Inspiring Excellence.",
    story:
      "Founded in 2023, Zerahaans was built on a clear vision — to bridge the gap between corporate needs and individual growth. From the beginning, we’ve focused on helping businesses complete their projects efficiently while empowering individuals to enhance their skills and unlock their potential.",
    details:
      "At Zerahaans, we believe true success comes from collaboration, innovation, and continuous learning. Our commitment to excellence drives everything we do — from delivering business solutions that produce real results to training programs that shape confident, capable professionals.",
    mission:
      "To empower both businesses and individuals through tailored solutions and transformative learning experiences.",
    strive: [
      "Deliver customized corporate services that enhance performance and productivity.",
      "Offer skill development programs that prepare individuals to thrive in a fast-changing world.",
    ],
    extensions: [
      {
        title: "Why Choose Zerahaans",
        icon: <StarIcon className="w-8 h-8 text-yellow-400 inline mr-3" aria-hidden="true" />,
        points: [
          {
            head: "Client-Centric Approach",
            desc: "We start by understanding your unique goals and challenges, crafting solutions that align perfectly with your needs.",
            icon: <HeartIcon className="w-6 h-6 text-yellow-300 inline mr-2" aria-hidden="true" />,
          },
          {
            head: "Expertise and Experience",
            desc: "Our diverse team of professionals brings a blend of knowledge, creativity, and real-world experience to every project and training initiative.",
            icon: <CheckCircleIcon className="w-6 h-6 text-yellow-300 inline mr-2" aria-hidden="true" />,
          },
          {
            head: "Commitment to Growth",
            desc: "We believe growth is a journey — for our clients, our learners, and our team. Through constant innovation and learning, we ensure lasting impact.",
            icon: <StarIcon className="w-6 h-6 text-yellow-300 inline mr-2" aria-hidden="true" />,
          },
        ],
      },
      {
        title: "Our Promise",
        icon: <CheckCircleIcon className="w-8 h-8 text-yellow-400 inline mr-3" aria-hidden="true" />,
        points: [
          {
            desc: "At Zerahaans, we don’t just deliver results — we build relationships that inspire growth and success. Whether you’re a business aiming to optimize operations or an individual ready to advance your career, we’re here to help you achieve your goals with confidence.",
          },
        ],
      },
    ],
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-32 overflow-hidden font-['Montserrat',sans-serif] text-yellow-200"
      style={{ background: "black" }}
    >
      {/* Floating gradient circles */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-[-250px] left-[-250px] w-[800px] h-[800px] bg-gradient-to-tr from-gray-700 to-gray-900 rounded-full blur-3xl opacity-25"
            style={{ transform: `translate(${mouse.x * 70}px, ${mouse.y * 70}px)` }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-gradient-to-tr from-gray-700 to-gray-900 rounded-full blur-3xl opacity-25"
            style={{ transform: `translate(${-mouse.x * 90}px, ${-mouse.y * 90}px)` }}
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      {/* Wave background (top + bottom) */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={!prefersReducedMotion ? { y: [0, 25, -25, 0] } : {}}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      >
        {/* Bottom wave */}
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#0e0d0dff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            fillOpacity="0.25"
            d="M0,320L48,288C96,256,192,192,288,170.7C384,149,480,171,576,181.3C672,192,768,192,864,208C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160V800H0Z"
          ></path>
        </svg>

        {/* Top mirrored wave */}
        <svg className="absolute top-0 w-full h-full rotate-180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#0e0d0dff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad2)"
            fillOpacity="0.25"
            d="M0,320L48,288C96,256,192,192,288,170.7C384,149,480,171,576,181.3C672,192,768,192,864,208C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160V800H0Z"
          ></path>
        </svg>
      </motion.div>

      {/* === Main Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-yellow-400 uppercase tracking-widest text-sm font-semibold flex items-center justify-center">
            <StarIcon className="w-5 h-5 mr-2" aria-hidden="true" /> {data.title}
          </h2>
          <h3 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mt-4">
            {data.subtitle}
          </h3>
          <p className="mt-8 text-xl max-w-4xl mx-auto text-yellow-100 leading-relaxed">{data.story}</p>
          <p className="mt-6 text-yellow-300 max-w-4xl mx-auto text-lg">{data.details}</p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-20 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center">
              <CheckCircleIcon className="w-8 h-8 mr-3" aria-hidden="true" /> Our Mission
            </h3>
            <p className="text-yellow-100 mb-8 leading-relaxed text-lg">{data.mission}</p>

            <h3 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center">
              <StarIcon className="w-8 h-8 mr-3" aria-hidden="true" /> We Strive To:
            </h3>
            <ul className="space-y-4 text-yellow-100 list-none">
              {data.strive.map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-yellow-300 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(180,180,180,0.4)] hover:shadow-[0_0_90px_rgba(200,200,200,0.6)] transform transition-all duration-700 hover:scale-110 hover:rotate-2">
            <img src="./about-800x500.png" alt="Team collaboration workspace" className="w-full h-auto rounded-2xl" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-500/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Click-to-open Sections */}
        <div className="mt-28 max-w-5xl mx-auto space-y-10">
          {data.extensions.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900/40 to-transparent shadow-[0_0_30px_rgba(180,180,180,0.25)] transition-all duration-500"
            >
              {/* Header with toggle */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-gray-800/30 transition"
              >
                <h4 className="text-3xl font-semibold text-yellow-300 flex items-center">
                  {section.icon} {section.title}
                </h4>
                <ChevronDownIcon
                  className={`w-7 h-7 text-yellow-300 transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expandable content */}
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden px-8 pb-8"
              >
                <div className="space-y-8 mt-4">
                  {section.points.map((p, j) => (
                    <div key={j}>
                      {p.head && (
                        <h5 className="text-xl font-semibold text-yellow-200 mb-3 flex items-center">
                          {p.icon} {p.head}
                        </h5>
                      )}
                      <p className="text-yellow-100 leading-relaxed text-lg">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
