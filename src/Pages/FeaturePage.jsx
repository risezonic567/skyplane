import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, DollarSign } from "lucide-react";

const features = [
    {
        title: "Instant Booking",
        desc: "Book your flights in seconds with our lightning-fast system.",
        icon: <Zap className="text-yellow-500 w-6 h-6" />,
    },
    {
        title: "Secure Payments",
        desc: "Your transactions are fully encrypted and protected.",
        icon: <ShieldCheck className="text-green-500 w-6 h-6" />,
    },
    {
        title: "24/7 Support",
        desc: "We’re always here to help you anytime, anywhere.",
        icon: <Clock className="text-blue-500 w-6 h-6" />,
    },
    {
        title: "Best Price Guarantee",
        desc: "We offer the most competitive flight prices online.",
        icon: <DollarSign className="text-red-500 w-6 h-6" />,
    }
];

export default function FeaturedSection() {
    return (
        <section className="py-20 px-6 lg:px-20 bg-white text-black">

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl lg:text-5xl font-black">
                    Why Choose <span className="text-red-600">Us</span>
                </h2>
                <p className="text-gray-400 font-semibold mt-4">
                    Experience seamless flight booking with powerful features designed for you
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className="group p-6 rounded-2xl bg-white shadow-xl border border-white/10 backdrop-blur-xl hover:bg-gray-300 transition-all"
                    >

                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 mb-4 group-hover:scale-110 transition">
                            {item.icon}
                        </div>

                        <h3 className="text-lg font-bold mb-2">
                            {item.title}
                        </h3>

                        <p className="text-black  text-sm font-semibold">
                            {item.desc}
                        </p>

                        <div className="h-1 w-0 bg-red-600 mt-4 group-hover:w-full transition-all duration-300 rounded-full"></div>

                    </motion.div>
                ))}

            </div>

        </section>
    );
}