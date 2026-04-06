import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          {/* <img
                        src="https://i.postimg.cc/902Y24L8/ATB-LOGO-white-png.png"
                        alt="Logo"
                        className="h-16 mb-4"
                    /> */}
          <p className="text-sm leading-relaxed text-gray-400">
            Experience seamless flight booking with unbeatable deals and
            unmatched support. Your journey begins with just one click!
          </p>
          <div className="mt-3">

          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <HashLink to="/#home" className="hover:text-red-500 transition-all">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink to="/#about" className="hover:text-red-500 transition-all">
                About Us
              </HashLink>
            </li>

             <li>
              <Link to="/flight-routes" className="hover:text-red-500 transition-all">
                Flight-Routes
              </Link>
            </li>

            <li>
              <Link to="tel:+18448215950" className="hover:text-red-500 transition-all">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="tel:+18448215950"
                className="flex items-center gap-2 text-white hover:text-red-500"
              >
                <Phone size={18} />
                <span>+18448215950</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Airlines Ticket Booking. All rights reserved
      </div>
    </footer>
  );
}
