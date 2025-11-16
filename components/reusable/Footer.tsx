import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "FAQ", href: "/faq" },
      { label: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-white text-dark">
      <div className="px-6 md:px-12 lg:px-20 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Advanced CAE and engineering solutions provider delivering
                precision simulations and virtual validation services globally.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-dark w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#fd5c01] hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-bold text-dark mb-6 text-sm uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#fd5c01] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-bold text-dark mb-6 text-sm uppercase tracking-wide">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#fd5c01] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-bold text-dark mb-6 text-sm uppercase tracking-wide">
                Newsletter
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest engineering insights delivered to your inbox.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-100 border border-gray-300 rounded px-4 py-2 text-dark text-sm placeholder-gray-500 focus:outline-none focus:border-[#fd5c01]"
                />
                <button className="bg-[#fd5c01] text-white px-4 py-2 font-semibold rounded hover:bg-[#e64c00] transition-all text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {year} CAE Engineering Solutions. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm">
                Advanced Engineering Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
