"use client";

import Image from "next/image";
import db from "../api/db";
import { motion } from "framer-motion";

const socialAccount = db.website.socialAccount;
const address = db.website.address;

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0f] to-[#1a1a1f] text-white"
    >
      {/* Animated floating blobs background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-20 w-72 h-72 bg-amber-500/20 blur-3xl rounded-full"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"
          animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-4xl font-extrabold text-amber-400 mb-6">
              Get in Touch ✨
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Have questions or ideas to collaborate? Fill out the form below
              and we’ll reach out soon. Let’s create something remarkable.
            </p>

            <div className="space-y-5">
              <h3 className="text-2xl text-amber-300 font-semibold">
                Contact Information
              </h3>
              {address.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start bg-white/5 rounded-xl p-3 hover:bg-white/10 transition"
                >
                  <Image
                    src={a.logo}
                    alt="icon"
                    width={28}
                    height={28}
                    className="invert"
                  />
                  <p className="ml-3 mt-1 text-gray-300">{a.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-bold mb-4 text-amber-300">
                Follow Us
              </h4>
              <div className="flex space-x-5">
                {socialAccount.accounts.map((a, i) => (
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="#"
                    key={i}
                    className="p-3 rounded-full bg-white/10 hover:bg-amber-400/30 transition text-amber-300"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d={a.logo} clipRule="evenodd" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#0b0b0b]/90 to-[#151515]/90 rounded-2xl shadow-lg shadow-amber-400/20 p-10 backdrop-blur-md"
          >
            <form className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "phone", label: "Phone", type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-sm font-semibold text-gray-200"
                  >
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    id={f.id}
                    name={f.id}
                    className="mt-2 w-full rounded-lg bg-black border border-amber-400/30 text-white py-3 px-4 focus:border-amber-400 focus:ring-amber-400 focus:ring-2 outline-none transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-200"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded-lg bg-black border border-amber-400/30 text-white py-3 px-4 focus:border-amber-400 focus:ring-amber-400 focus:ring-2 outline-none transition"
                >
                  <option>Select a Service</option>
                  <option>Web Development</option>
                  <option>Project Resourcing</option>
                  <option>Student Internships</option>
                  <option>Technical Training</option>
                  <option>Entrepreneurship</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 w-full rounded-lg bg-black border border-amber-400/30 text-white py-3 px-4 focus:border-amber-400 focus:ring-amber-400 focus:ring-2 outline-none transition"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251,191,36,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 bg-amber-400 text-black font-bold rounded-xl hover:bg-amber-300 transition-all duration-300"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
