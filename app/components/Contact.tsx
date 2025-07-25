"use client";
import React from "react";

const contactDetails = {
  title: "Contact US",
  subTitle: "Get in Touch",
  content: "Have a project in mind? We'd love to hear from you.",
  FormData: [
    {
      type: "text",
      data: "name",
      label: "Full Name",
    },
    {
      type: "email",
      data: "email",
      label: "Email Address",
    },
    {
      type: "tel",
      data: "phone",
      label: "Phone Number",
    },
    {
      type: "dropDown",
      data: "services",
      options: [
        "Web Development",
        "Internship",
        "Online courses",
        "Consulting",
        "trading",
        "Other",
      ],
      label: "Service Needed",
    },
    {
      type: "textarea",
      data: "message",
      label: "Project Details",
    },
    {
      type: "button",
      data: "Submit Inquiry",
    },
  ],
  address: {
    title: "Contact Information",
    location: "Neyveli",
    phoneNumber: "",
    emailId: "",
  },
  socialAccount: {
    title: "Follow Us",
    accounts: [
      {
        title: "fb",
        logo: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        link: "",
      },
      {
        title: "insta",
        logo: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
        link: "",
      },
      {
        title: "LinkedIn",
        logo: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
        link: "",
      },
    ],
  },
};

const Contact = () => {
  return (
    <div id="contact" className="py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-gold font-semibold tracking-wide uppercase">
            {contactDetails.title}
          </h2>
          <br />
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-neutral-50 sm:text-4xl">
            {contactDetails.subTitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-neutral-50  lg:mx-auto">
            {contactDetails.content}
          </p>
        </div>

        <div className="bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <form id="contactForm" className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    className="form-input w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="floating-label absolute left-4 top-2 text-gray-500 dark:text-gray-300 pointer-events-none"
                  >
                    Full Name
                  </label>
                </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=" "
                      className="form-input w-full px-4 py-2  border-gray-300 dark:border-gray-600 shadow-sm shadow-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="floating-label absolute left-4 top-2 text-gray-500 dark:text-gray-300 pointer-events-none"
                    >
                      Name
                    </label>
                  </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    className="form-input w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="floating-label absolute left-4 top-2 text-gray-500 dark:text-gray-300 pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder=" "
                    className="form-input w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="floating-label absolute left-4 top-2 text-gray-500 dark:text-gray-300 pointer-events-none"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    className="form-input w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    required
                  >
                    <option defaultValue=" "></option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <label
                    htmlFor="service"
                    className="floating-label absolute left-4 top-2 text-gray-500 dark:text-gray-300 pointer-events-none"
                  >
                    Service Needed
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=" "
                    className="form-input w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="floating-label absolute left-4 top-2 text-gray-500 dark:text-gray-300 pointer-events-none"
                  >
                    Project Details
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold dark:text-black text-white bg-black dark:bg-gold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-black dark:bg-gold text-gold dark:text-black p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-50 dark:text-gray-900">
                    123 Tech Street
                  </p>
                  <p className="text-gray-50 dark:text-gray-900">
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-50 dark:text-gray-900">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-50 dark:text-gray-900">
                    info@innovatetech.com
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {contactDetails.socialAccount.accounts.map((a, i) => (
                    <a
                      href="#"
                      className="text-gray-50 dark:text-gray-950 dark:hover:text-gold"
                      key={i}
                    >
                      <svg
                        className="h-6 w-6"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
