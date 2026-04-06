import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book a flight?",
    answer: "You can easily book a flight by selecting your destination, choosing dates, and proceeding to checkout securely."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, we maintain complete transparency. The price you see is the final price you pay."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking depending on airline policies. Cancellation charges may apply."
  },
  {
    question: "Do you offer refunds?",
    answer: "Refunds are processed as per airline rules and usually take 5-7 working days."
  },
  {
    question: "Is my payment secure?",
    answer: "Absolutely! We use secure payment gateways to ensure your transactions are safe."
  }
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-50">

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-black">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h2>
        <p className="text-gray-500 mt-3">
          Everything you need to know before booking your flight ✈️
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800"
            >
              {faq.question}

              <motion.div
                animate={{ rotate: active === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 font-semibold text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

      </div>

    </section>
  );
}