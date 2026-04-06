import React from "react";
import { motion } from "framer-motion";
import { Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "./FaqPage";

const flightRoutes = [
  {
    from: "New York",
    to: "Los Angeles",
    duration: "5h 45m",
    price: "$320",
    type: "Non-stop"
  },
  {
    from: "Chicago",
    to: "Miami",
    duration: "3h 10m",
    price: "$210",
    type: "Direct"
  },
  {
    from: "San Francisco",
    to: "Las Vegas",
    duration: "1h 30m",
    price: "$150",
    type: "Budget"
  },
  {
    from: "Dallas",
    to: "Seattle",
    duration: "4h 20m",
    price: "$280",
    type: "Express"
  },
  {
    from: "Boston",
    to: "Orlando",
    duration: "3h 25m",
    price: "$190",
    type: "Non-stop"
  },
  {
    from: "Atlanta",
    to: "Denver",
    duration: "3h 50m",
    price: "$240",
    type: "Popular"
  }
];

export default function FlightRoutesSection() {
  return (
   <>
    <section className="py-20 px-6 lg:px-20 bg-gray-50">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-black">
          Popular <span className="text-red-600">Flight Routes</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Explore top air routes with best prices and fastest travel options ✈️
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {flightRoutes.map((route, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 group"
          >

            {/* Top */}
            <div className="flex justify-between items-center mb-4">
              <Plane className="text-red-600 group-hover:rotate-12 transition" />
              <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                {route.type}
              </span>
            </div>

            {/* Route */}
            <h3 className="text-lg font-bold text-gray-800">
              {route.from} → {route.to}
            </h3>

            {/* Duration */}
            <p className="text-gray-500 text-sm mt-1">
              Duration: {route.duration}
            </p>

            {/* Price + CTA */}
            <div className="flex justify-between items-center mt-5">
              <span className="text-xl font-black text-red-600">
                {route.price}
              </span>

             <Link to="tel:">
              <button className="flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline">
                Book <ArrowRight size={16} />
              </button>
             </Link>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <Link to="/flights">
          <button className="border border-black text-black hover:border-red-600 hover:text-red-600 px-8 py-4 rounded-lg font-bold transition">
            Explore All Flights
          </button>
        </Link>
      </div>

    </section>

    <FAQSection/>
   </>
  );
}