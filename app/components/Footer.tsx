"use client";

const footerData = {
  title: "Zerahaans Enterprises",
  content:
    "Digital solutions for modern businesses. Helping you navigate the digital landscape with innovative technology.",
  quickLinks: ["Home", "Services", "About us", "Contact"],
  Legal: [
    {
      title: "Privacy Policy",
      link: "",
    },
    {
      title: "Terms of Service",
      link: "",
    },
    {
      title: "Cookie Policy",
      link: "",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerData.title}</h3>
            <p className="text-gray-400">{footerData.content}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {link}
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
    </footer>
  );
};

export default Footer;
