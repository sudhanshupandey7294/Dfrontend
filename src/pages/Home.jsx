// Home.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Contact from "../components/Contact";
import Alumini from "../pages/Alumini"
import WhatsAppChat from "../components/WhatsappChat"; 




import poster1 from '../assets/posters/poster1.png';

import msme from '../assets/logos/msme.png';
import startup from '../assets/logos/startup.png';
import iso from '../assets/logos/iso.png';
import nsdc from '../assets/logos/nsdc.png';
import aicte from '../assets/logos/aicte.png';



const Home = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-blue-200 to-purple-200">
        <div className="flex-1 mb-10 md:mb-0">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Welcome to <br /> <span className="text-blue-600">D -SERVICES</span>
          </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl"
          >
            Empowering Your Future with Smart Tech Solutions
          </motion.p>

          <motion.a
            href="#why"
            whileHover={{ scale: 1.1 }}
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Why Join Us?
          </motion.a>
        </div>

<motion.div
  className="flex-1 relative group"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  {/* Poster Image with Animated Blue Floating Shadow */}
  <motion.div
    className="rounded-xl overflow-hidden transition-all duration-500 "
    animate={{
      boxShadow: [
     "0 0 0px rgba(0, 102, 255, 0.2)",
      "0 0 10px rgba(0, 102, 255, 0.4)",
      "0 0 20px rgba(0, 102, 255, 0.7)",
      "0 0 10px rgba(0, 102, 255, 0.4)",
      "0 0 0px rgba(0, 102, 255, 0.2)"
      ]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }}
  >
    <img
      src={poster1}
      alt="D Services Poster"
      className="w-full object-cover"
    />
  </motion.div>

  {/* Floating Rotating Logo */}
  <motion.img
    src="logo.png"
    alt="Rotating Logo"
    className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-blue-500 shadow-lg bg-white object-cover"
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 10,
      ease: "linear"
    }}
  />
</motion.div>


      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          About Us
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700">
          At <strong>D -SERVICES</strong>, we specialize in providing innovative tech solutions that empower businesses and individuals. Whether it's AI systems, software platforms, or digital transformation—we’re here to deliver excellence with cutting-edge tools and smart minds.
        </p>
      </section>
      {/* OUR STORY SECTION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Our Story
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center">
          Founded in 2025 by passionate tech enthusiasts, <strong>D -SERVICES</strong> started with a vision to bridge the gap between technology and real-world problems. What began as a garage project has now become a mission-driven startup backed by community trust and a vision for global impact.
        </p>
      </section>
      {/* SERVICES SECTION */}
      <section id="services" className="py-16 px-6 md:px-20 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Solutions",
              icon: "🤖",
              desc: "Custom-built AI models for business insights, automation, and growth.",
            },
            {
              title: "Web Development",
              icon: "💻",
              desc: "Modern, responsive websites built using cutting-edge technologies.",
            },
            {
              title: "Cloud & DevOps",
              icon: "☁️",
              desc: "Secure and scalable cloud deployments with continuous integration.",
            },
            {
              title: "Digital Strategy",
              icon: "📈",
              desc: "Helping startups and enterprises drive results through smart tech.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* WHY JOIN SECTION */}
      <section id="why" className="py-16 px-6 md:px-20 bg-gradient-to-br from-purple-100 to-blue-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Why Join <span className="text-blue-600">D -SERVICES</span>?
        </motion.h2>

        <div className="max-w-4xl mx-auto text-lg space-y-4 text-gray-800">
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="list-disc list-inside space-y-2"
          >
            <li>✅ Work with cutting-edge technologies and global clients</li>
            <li>✅ Remote-friendly, inclusive, and growth-driven work culture</li>
            <li>✅ Mentorship programs, training, and certification support</li>
            <li>✅ Hands-on experience in real-time projects</li>
            <li>✅ Fast-paced, flexible environment for freshers & experts alike</li>
          </motion.ul>
        </div>
      </section>

      {/* ALUMNI REVIEWS */}
     
      <Alumini/>
      {/* LOGOS SECTION */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Proudly Recognized & Supported By
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {[msme, startup, iso, nsdc, aicte].map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt={`partner-logo-${i}`}
              className="w-24 h-auto grayscale hover:grayscale-0 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            />
          ))}
        </div>
      </section>
      <Contact />
      <WhatsAppChat />


      </div>
  );
}
export default Home;