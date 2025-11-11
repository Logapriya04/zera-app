"use client";

import db from "../api/db";
import Image from "next/image";
import { motion } from "framer-motion";

const services = {
  ...db.services,
  service: db.services.service.filter(
    (d) => d.title.toLowerCase() !== "trading and investment"
  ),
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 text-gray-100 overflow-hidden bg-[#0e0e0e]"
    >
      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1a1a1a,#0e0e0e,#000)] animate-gradient-move"></div>

        <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] blur-[120px] rounded-full animate-float1"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(150,120,40,0.1)_0%,transparent_70%)] blur-[130px] rounded-full animate-float2"></div>
      </div>

      {/* ===== Header Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20"
      >
        <h2 className="text-sm font-semibold tracking-[5px] uppercase text-[#d4af37]">
          {services.title}
        </h2>
        <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold text-[#d4af37]">
          {services.subTitle}
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {services.content}
        </p>
      </motion.div>

      {/* ===== Service Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 lg:px-8">
        {services.service.map((d, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative group bg-[#1a1a1a]/80 border border-[#d4af37]/20 rounded-2xl p-10 backdrop-blur-md 
                       shadow-[0_0_25px_rgba(212,175,55,0.05)] transition-all duration-700 
                       hover:shadow-[0_0_45px_rgba(212,175,55,0.3)] 
                       hover:border-[#f5d26c]/70 active:shadow-[0_0_60px_rgba(245,210,108,0.5)]"
          >
            {/* Neon glow ring on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(245,210,108,0.25)_0%,transparent_70%)] blur-xl animate-pulse-slow"></div>
            </div>

            {/* Moving golden shine */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5d26c]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]"></div>
            </div>

            {/* Icon */}
            <div className="absolute -top-7 left-6 bg-[#d4af37]/10 border border-[#d4af37]/30 p-4 rounded-xl shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#d4af37]"
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

            {/* Title */}
            <h3 className="mt-6 text-2xl font-bold mb-4 tracking-wide text-[#f5d26c]">
              {d.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {d.content}
            </p>

            {/* Points */}
            <ul className="space-y-3 text-[1rem] text-gray-200 font-medium">
              {d.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-[#d4af37] mt-1"
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
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block text-[#d4af37] text-lg font-semibold hover:text-[#b5972e] transition-colors duration-300"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Animations ===== */}
      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(25px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-float1 {
          animation: float1 12s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 14s ease-in-out infinite;
        }
        .animate-gradient-move {
          background-size: 300% 300%;
          animation: gradientMove 20s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
