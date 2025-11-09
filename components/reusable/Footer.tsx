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
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Advanced CAE and engineering solutions provider delivering
                precision simulations and virtual validation services globally.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-white w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:bg-opacity-100 transition-all"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wide">
                Newsletter
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest engineering insights delivered to your inbox.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-white px-4 py-2 font-semibold rounded hover:bg-opacity-90 transition-all text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white border-opacity-10 pt-8 mt-8">
            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {year} CAE Engineering Solutions. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
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
