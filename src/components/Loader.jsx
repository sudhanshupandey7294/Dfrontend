
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000; // 1 second
    const steps = 100;
    const intervalTime = duration / steps; // 10ms per step

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false); // immediately hide after 100%
          return 100;
        }
        return prev + 1; // Increment by 1 each time
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-black text-white z-[9999] flex flex-col items-center justify-center"
        >
          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="relative w-48 h-48 border-[6px] border-cyan-500 border-dashed rounded-full flex items-center justify-center"
          >
            {/* Inner Glowing Orb */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 20px #0ff",
                  "0 0 50px #0ff",
                  "0 0 20px #0ff"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-800"
            />

            {/* Digital % Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-300 text-3xl font-bold font-mono tracking-wider"
            >
              {progress}%
            </motion.div>
          </motion.div>

          {/* Digital Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              transition: { duration: 1.5, repeat: Infinity }
            }}
            className="mt-8 text-sm uppercase tracking-widest text-cyan-400 font-mono"
          >
            Initializing Core Matrix...
          </motion.div>

          {/* Animated Pulses / Status bars */}
          <div className="flex gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: ["10px", "20px", "10px"],
                  backgroundColor: ["#0ff", "#00f2ff", "#0ff"]
                }}
                transition={{
                  duration: 0.8 + i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-2 rounded bg-cyan-400"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
