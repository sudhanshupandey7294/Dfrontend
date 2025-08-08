// src/components/Sections/Achievements.jsx
import { motion } from "framer-motion";

const achievements = [
  {
    year: "2025",
    title: "Founded D-SERVICES",
    description: "Started with a vision to empower digital India.",
  },
  {
    year: "2025",
    title: "50+ Clients",
    description: "Delivered solutions across healthcare, education, and retail.",
  },
  {
    year: "2025",
    title: "Govt Recognition",
    description: "Partnered with MSME, NSDC, and Startup India.",
  },
  {
    year: "2025",
    title: "ISO Certified",
    description: "Recognized for quality services and tech innovations.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-white py-16 px-4" id="achievements">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Our Journey & Milestones
        </h2>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10"
            >
              <h4 className="text-xl font-semibold text-blue-600">{item.year}</h4>
              <h3 className="text-lg font-bold text-gray-800 mt-1">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
