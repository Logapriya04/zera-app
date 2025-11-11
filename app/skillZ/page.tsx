"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SkillZPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "resume" && files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-black via-[#111827] to-[#0f172a]">
      {/* Subtle animated texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,204,0,0.05)_0%,transparent_60%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05)_0%,transparent_60%)]"></div>
        <motion.div
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30"
          initial={{ backgroundPosition: "0px 0px" }}
          animate={{ backgroundPosition: ["0px 0px", "100px 50px", "0px 0px"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-10 left-[-10%] w-[120%] h-[50vh] bg-gradient-to-tr from-yellow-400/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full"
        animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-16 w-40 h-40 bg-yellow-300/10 rounded-full"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
      >
        SkillZ Student Registration
      </motion.h1>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
        className="relative z-10 bg-[#111827]/85 border border-gray-700 rounded-2xl p-10 w-[90%] max-w-2xl backdrop-blur-md space-y-6 shadow-[0_4px_40px_rgba(0,0,0,0.3)]"
      >
        {/* Name */}
        <div>
          <label className="block text-base font-bold mb-2 text-gray-300">Full Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full text-[1rem] font-semibold p-4 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-base font-bold mb-2 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full text-[1rem] font-semibold p-4 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-base font-bold mb-2 text-gray-300">Phone Number</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            required
            placeholder="+91 9876543210"
            className="w-full text-[1rem] font-semibold p-4 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-base font-bold mb-2 text-gray-300">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full text-[1rem] font-semibold text-white bg-[#0f172a] border border-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-yellow-400 file:text-black hover:file:bg-yellow-300 cursor-pointer transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-base font-bold mb-2 text-gray-300">Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your skills or expectations..."
            className="w-full text-[1rem] font-semibold p-4 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all duration-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 text-lg font-extrabold text-black rounded-lg bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300"
        >
          Submit Inquiry
        </motion.button>
      </motion.form>

      {/* Footer */}
      <p className="mt-10 text-gray-400 text-base font-semibold relative z-10">
        Empowering SkillZ — Learn, Grow, and Excel ✨
      </p>
    </section>
  );
}
