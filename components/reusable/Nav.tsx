"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavProps {
  variant?: "light" | "dark";
}

const Nav = ({ variant = "dark" }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLight = variant === "light";
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-16 lg:h-16 z-50 backdrop-blur-md ${
        isLight ? "text-white bg-white/20" : "text-dark bg-white/80"
      }`}
    >
      <Link href="/" className="shrink-0 flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-20 h-10 drop-shadow-lg"
        />
      </Link>

      <div className="hidden xl:flex items-center gap-2">
        <div
          className={`flex items-center gap-1 text-sm md:text-base font-medium ${
            isLight ? "text-white" : "text-dark"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                isActive(link.href)
                  ? isLight
                    ? "text-white border-white"
                    : "text-[#fd5c01] "
                  : isLight
                  ? "hover:text-white opacity-80 hover:opacity-100"
                  : "hover:text-[#fd5c01] opacity-70 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-4">
          <Button />
        </div>
      </div>

      <button
        className="xl:hidden flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={24} className={isLight ? "text-white" : "text-dark"} />
        ) : (
          <Menu size={24} className={isLight ? "text-white" : "text-dark"} />
        )}
      </button>

      {isOpen && (
        <div
          className={`absolute top-16 left-0 right-0 ${
            isLight ? "bg-[#fd5c01]" : "bg-white"
          } shadow-lg xl:hidden`}
        >
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-3 rounded-lg text-base font-medium transition-all ${
                  isActive(link.href)
                    ? isLight
                      ? "text-white border-l-4 border-white bg-white/10"
                      : "text-[#fd5c01] border-l-4 border-[#fd5c01] bg-orange-50"
                    : isLight
                    ? "text-white hover:text-gray-200"
                    : "text-dark hover:text-[#fd5c01]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-opacity-20">
              <Button />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
