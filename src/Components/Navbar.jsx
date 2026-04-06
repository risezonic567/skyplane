import { Phone } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Contact", href: "/" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-black backdrop-blur-sm shadow-md border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">

          <Link to="/" className="flex items-center">
            <img
              src=""
              alt="logo"
              className="h-12 md:h-14"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                to={link.href}
                className="text-white font-bold hover:text-red-600 transition"
              >
                {link.name}
              </HashLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">

            <Link
              to="tel:+18448215950"
              className="hidden sm:flex bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-800 transition"
            >
              <Phone size={20} />+18448215950
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white rounded-md hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="bg-gray-50 border-t px-4 pb-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <HashLink
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block p-3 text-lg font-medium rounded-lg hover:bg-teal-100"
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}