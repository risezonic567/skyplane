import React from "react";
import { motion } from "framer-motion";
import { Plane, ShieldCheck, Globe, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
        <>
            <section id="about" className=" text-white py-20 px-6 lg:px-20">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src="/images/AboutUs into.jpg.jpeg"
                            alt="flight"
                            className="rounded-3xl w-full h-full shadow-2xl"
                        />

                        {/* Glow Effect */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/20 blur-[80px] rounded-full"></div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="bg-red-600 px-4 py-2  rounded-full text-2xl font-bold uppercase">
                            About Us
                        </span>

                        <h2 className="text-3xl lg:text-5xl font-black leading-tight">
                            Your Trusted Partner for <br />
                            <span className="text-red-600">Flight Bookings</span>
                        </h2>

                        <p className="text-gray-400 text-lg">
                            We provide seamless flight booking experiences with the best deals across the globe.
                            Compare airlines, find the cheapest fares, and travel stress-free with our powerful platform.
                        </p>

                        {/* FEATURES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">

                            <div className="flex gap-3 items-start">
                                <Plane className="text-red-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-500">500+ Routes</h4>
                                    <p className="text-gray-500 text-sm">Worldwide destinations covered</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <ShieldCheck className="text-red-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-500">Secure Booking</h4>
                                    <p className="text-gray-500 text-sm">Safe & trusted payment system</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <Globe className="text-red-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-500">Global Coverage</h4>
                                    <p className="text-gray-500 text-sm">Flights to every major city</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <Clock className="text-red-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-500">24/7 Support</h4>
                                    <p className="text-gray-500 text-sm">Always here to help you</p>
                                </div>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <Link to="tel:">
                            <button className="mt-6 cursor-pointer bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold">
                                Call Us
                            </button>
                        </Link>
                    </motion.div>
                </div>

            </section>
        </>
    );
}