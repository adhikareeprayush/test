"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavProps {
  variant?: "light" | "dark";
}

const Nav = ({ variant = "dark" }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLight = variant === "light";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
  ];

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-16 lg:h-16 z-100 ${
        isLight ? "text-white" : "text-dark"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="shrink-0 flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-20 h-10"
        />
      </Link>

      {/* Desktop Navigation */}
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
              className={`px-4 py-2 transition-colors opacity-90 hover:opacity-100 ${
                isLight ? "hover:text-white" : "hover:text-primary"
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

      {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`absolute top-16 left-0 right-0 ${
            isLight ? "bg-primary" : "bg-white"
          } shadow-lg xl:hidden`}
        >
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-base font-medium transition-colors opacity-90 hover:opacity-100 ${
                  isLight
                    ? "text-white hover:text-gray-200"
                    : "text-dark hover:text-primary"
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
