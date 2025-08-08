
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import alumni1 from "../assets/alumni/alumni1.jpg";
import alumni2 from "../assets/alumni/alumni2.jpg";
import alumni3 from "../assets/alumni/alumni3.jpg";
import alumni4 from "../assets/alumni/alumni1.jpg";
import alumni5 from "../assets/alumni/alumni2.jpg";
import alumni6 from "../assets/alumni/alumni3.jpg";


const alumniList = [
  {
    name: "Aman Verma",
    review: "D -SERVICES helped me gain confidence in tech industry projects. I built 3 live apps and got placed in a top company!",
    image: alumni1,
    rating: 5,
  },
  {
    name: "Neha Sharma",
    review: "Amazing mentorship and hands-on learning environment. I’d highly recommend D -SERVICES to any fresher.",
    image: alumni2,
    rating: 4,
  },
  {
    name: "Rohit Meena",
    review: "Supportive culture, real-world projects, and startup exposure made this journey unforgettable.",
    image: alumni3,
    rating: 5,
  },
  {
    name: "Sneha Roy",
    review: "The learning curve was smooth and fun. I loved the blend of tech and startup vibes here!",
    image: alumni4,
    rating: 4,
  },
  {
    name: "Kunal Mehta",
    review: "D -SERVICES gave me the confidence to launch my own startup! Great exposure and team.",
    image: alumni5,
    rating: 5,
  },
  {
    name: "Priya Nair",
    review: "Hands-on projects, startup mentoring, and a great community — a must for all tech learners!",
    image: alumni6,
    rating: 5,
  },
];

export default function AlumniReviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % alumniList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + alumniList.length) % alumniList.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % alumniList.length);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 tracking-widest"
      >
        Alumni Reviews
      </motion.h2>

      <div className="relative max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-6 rounded-xl shadow-2xl text-center"
          >
            <img
              src={alumniList[index].image}
              alt={alumniList[index].name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-blue-300"
            />

            
    {/* ⭐ Dynamic Star Rating */}
<div className="flex justify-center mb-2">
  {[...Array(5)].map((_, i) => (
    <span
      key={i}
      className={`text-xl ${
        i < alumniList[index]?.rating ? "text-yellow-400" : "text-gray-300"
      }`}
    >
      ⭐
    </span>
  ))}
</div>



            <h4 className="text-xl font-semibold text-blue-800 mb-2">
              {alumniList[index].name}
            </h4>
            <p className="text-gray-700 text-base italic">
              “{alumniList[index].review}”
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 px-4">
          <button
            onClick={handlePrev}
            className="text-blue-700 hover:text-white hover:bg-blue-700 p-2 rounded-full transition duration-300"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="text-blue-700 hover:text-white hover:bg-blue-700 p-2 rounded-full transition duration-300"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
