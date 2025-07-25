"use client";

import db from "../api/db";
const footerData = db.footerData;
const services = db.services.service;
const quickLinks = db.navLinks;

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerData.title}</h3>
            <p className="text-gray-400">{footerData.content}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((d, k) => (
                <li key={k}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((d, k) => (
                <li key={k}>
                  <a href={d.href} className="text-gray-400 hover:text-white">
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerData.Legal.map((d, i) => (
                <li key={i}>
                  <a
                    href={d.link ? d.link : "#"}
                    className="text-gray-400 hover:text-white"
                  >
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">
            © 2023 Zerahaans. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
