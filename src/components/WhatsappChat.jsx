import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const phoneNumber = "+919971101450"; // Replace with your number
  const message = "Hi, I'm interested in learning more about your services!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.08, 1],
        boxShadow: [
          "0 0 0px rgba(37, 211, 102, 0.4)",
          "0 0 15px rgba(37, 211, 102, 0.9)",
          "0 0 0px rgba(37, 211, 102, 0.4)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Glowing outer aura ring */}
        <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-40 animate-pulse z-[-1]"></div>

        {/* Main button with gradient, glass effect, shine, and bounce icon */}
        <div className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 p-4 rounded-full border-[3px] border-white shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center relative">
          
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-10 blur-sm z-0" />

          {/* WhatsApp Icon */}
          <FaWhatsapp size={28} className="text-white animate-bounce relative z-10" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppChat;
