import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <a href="#about" className="hover:text-blue-400 block md:inline-block px-4 py-2">About</a>
      <a href="#services" className="hover:text-blue-400 block md:inline-block px-4 py-2">Services</a>
      <a href="#why" className="hover:text-blue-400 block md:inline-block px-4 py-2">Why Join</a>
      <a href="#contact" className="hover:text-blue-400 block md:inline-block px-4 py-2">Contact</a>

      {/* ✅ Use React Router Links */}
      <Link to="/login" className="hover:text-blue-400 block md:inline-block px-4 py-2">Login</Link>
      <Link to="/signup" className="hover:text-white text-black bg-blue-400 rounded px-4 py-2 block md:inline-block md:ml-2 mt-1 md:mt-0">Sign Up</Link>
    </>
  );

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8 }}
      className="bg-black text-white p-4 shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Animated Logo and Title */}
        <div className="flex items-center space-x-3">
          <motion.img
            src="logo.png" // ✅ Use your actual logo path
            alt="D -SERVICES Logo"
            className="w-14 h-14 rounded-full object-cover border border-blue-500 shadow-lg"
            animate={{
              boxShadow: [
                "0 0 0px #00f",
                "0 0 20px #00f",
                "0 0 30px #00f",
                "0 0 20px #00f",
                "0 0 0px #00f"
              ]
            }}
            transition={{
              duration:1.6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          <h1 className="text-2xl font-bold text-white tracking-wider">D -SERVICES</h1>
</div>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          {links}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black flex flex-col items-start px-4 pt-2"
          >
            {links}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = (
//     <>
//       <a href="#about" className="hover:text-blue-400 block md:inline-block px-4 py-2">About</a>
//       <a href="#services" className="hover:text-blue-400 block md:inline-block px-4 py-2">Services</a>
//       <a href="#why" className="hover:text-blue-400 block md:inline-block px-4 py-2">Why Join</a>
//       <a href="#contact" className="hover:text-blue-400 block md:inline-block px-4 py-2">Contact</a>
//     </>
//   );

//   return (
//     <motion.nav 
//       initial={{ y: -100 }} 
//       animate={{ y: 0 }} 
//       transition={{ duration: 0.8 }}
//       className="bg-black text-white p-4 shadow-lg sticky top-0 z-50"
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">D -SERVICES</h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-4">
//           {links}
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-black flex flex-col items-start px-4 pt-2"
//           >
//             {links}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
