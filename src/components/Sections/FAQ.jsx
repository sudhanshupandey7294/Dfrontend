// src/components/Sections/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is D-SERVICES government registered?",
    answer: "Yes, we are recognized under MSME, Startup India, NSDC, ISO, and AICTE.",
  },
  {
    question: "How can I get a quote for my project?",
    answer: "Just fill out the Contact Us form or message us on WhatsApp, and we'll connect with you shortly.",
  },
  {
    question: "What type of projects do you handle?",
    answer: "We work on AI tools, websites, software systems, mobile apps, and more.",
  },
  {
    question: "Can I track my project status?",
    answer: "Yes, we provide regular updates and dedicated support channels.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left text-lg font-semibold text-gray-800 focus:outline-none"
              >
                {faq.question}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
