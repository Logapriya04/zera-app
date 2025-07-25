"use client";

import Image from "next/image";
import db from "../api/db";
const contactDetails = db.contactDetails;
const socialAccount = db.website.socialAccount;
const address = db.website.address;

const ContactSection = () => {
  return (
    <div>
      <section id="contact" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-neutral-50  mb-6">
                Get in touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-neutral-200 mb-6">
                Have questions about our services or want to discuss a project?
                Fill out the form and our team will get back to you as soon as
                possible.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl text-gold font-bold mb-6">
                  Contact Information
                </h3>
                {address.map((a, i) => (
                  <div className="flex items-start" key={i}>
                    <div className="flex-shrink-0">
                      <Image
                        key={i}
                        className="light:invert"
                        src={a.logo}
                        alt={`${a.logo} icon`}
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className="ml-3 mt-1 text-base dark:text-gray-200 text-gray-600">
                      <p>{a.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialAccount.accounts.map((a, i) => (
                    <a
                      href="#"
                      className="text-gray-50 dark:text-gray-300 dark:hover:text-gold"
                      key={i}
                    >
                      <svg
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d={a.logo}
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-black rounded-lg shadow-md shadow-amber-50 p-8">
              <form>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm shadow-gray-200 py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm shadow-gray-200 py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm shadow-gray-200 py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-1 block w-full border bg-black border-gray-300 rounded-md shadow-sm shadow-gray-200 py-2 px-3 focus:outline-none focus:ring-gold focus:border-gold"
                    >
                      <option defaultValue=" "></option>
                      <option>Web Development</option>
                      <option>Project Resourcing</option>
                      <option>Student Internships</option>
                      <option>Technical Training</option>
                      <option>Entrepreneurship</option>
                      <option>Trading & Investment</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold dark:text-black text-white bg-black dark:bg-gold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
