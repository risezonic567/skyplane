import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DestinationFlights = [
  {
    from: "New York",
    to: "Los Angeles",
    price: "$320",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    desc: "Experience the glamour of Hollywood, sunny beaches, and vibrant nightlife."
  },
  {
    from: "Chicago",
    to: "Miami",
    price: "$210",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Enjoy tropical vibes, beautiful beaches, and exciting nightlife in Miami."
  },
  {
    from: "San Francisco",
    to: "Las Vegas",
    price: "$150",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    desc: "Explore casinos, luxury resorts, and nonstop entertainment in Vegas."
  },
  {
    from: "Dallas",
    to: "Seattle",
    price: "$280",
    img: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362",
    desc: "Discover scenic beauty, coffee culture, and iconic landmarks."
  }
];

export default function DestinationSection() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-black">
          Popular <span className="text-red-600">Destinations</span>
        </h2>
        <p className="text-gray-500 font-semibold mt-4 max-w-2xl mx-auto">
          Discover trending routes across the USA with unbeatable prices. 
          Book your next adventure today and travel smarter ✈️
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {DestinationFlights.map((flight, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className="group rounded-3xl overflow-hidden cursor-pointer shadow-xl bg-white"
          >

            {/* IMAGE */}
            <div className="relative h-[340px] overflow-hidden">
              <img
                src={flight.img}
                alt={flight.to}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* BADGE */}
              <div className="absolute top-4 left-4">
                <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                  Popular
                </span>
              </div>

              {/* TEXT ON IMAGE */}
              <div className="absolute bottom-0 p-5 text-white w-full">
                <h3 className="text-lg font-bold">
                  {flight.from} → {flight.to}
                </h3>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-black text-red-400">
                    {flight.price}
                  </span>

                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>

            {/* 🔥 NEW: DESCRIPTION BELOW */}
            <div className="p-5">
              <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                {flight.desc}
              </p>

              <button className="mt-4 text-sm font-semibold text-red-600 hover:underline">
                <Link to="/">Explore More →</Link>
              </button>
            </div>

          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-16">
        <Link to="tel:">
          <button className="border border-black text-black hover:border-red-600 hover:text-red-600 px-10 py-4 rounded-lg font-bold transition">
            Book Flights
          </button>
        </Link>
      </div>

    </section>
  );
}