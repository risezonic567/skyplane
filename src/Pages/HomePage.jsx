import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutSection from './AboutPage';
import DestinationSection from './DestinationPage';
import FeaturedSection from './FeaturePage';
import FAQSection from './FaqPage';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section id='home'>
        <div className="min-h-screen  text-white selection:bg-red-600 selection:text-white">

          <main className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-24 gap-12 overflow-hidden">

            <div className="absolute inset-0">
              <img
                src="/images/home page banner.jpg.jpeg"
                alt="Flight Background"
                className="w-full h-full"
              />
            </div>

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 w-full lg:w-1/2 space-y-6">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Flight Booking 2026
                </span>

                <h1 className="text-3xl lg:text-6xl font-black leading-tight mt-4">
                  BOOK YOUR <br />
                  <span className="text-red-500">FLIGHTS ONLINE</span>
                </h1>

                <p className="text-gray-300 max-w-md text-lg mt-4">
                  Compare flight prices, explore global destinations, and book your tickets instantly with the best deals available.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-4"
              >
                {/* <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition">
              Explore Flights <ArrowRight />
            </button> */}

                <button className="border border-white hover:border-red-600 px-8 py-4 rounded-lg font-bold transition">
                  <Link>Call Now</Link>
                </button>
              </motion.div>

            </div>

          </main>

          <section className="bg-zinc-900/80 py-12 border-y border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
              {[
                { label: 'Airlines', val: '100+' },
                { label: 'Routes', val: '500+' },
                { label: 'Bookings', val: '50k+' },
                { label: 'Experience', val: '10 Yrs' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-black text-red-600">{stat.val}</h3>
                  <p className="text-gray-300 text-sm uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </section>


        </div>
      </section>

      <AboutSection />
      <FeaturedSection />
      <DestinationSection />
      <FAQSection />
    </>
  );
}