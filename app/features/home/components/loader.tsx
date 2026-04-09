"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center bg-transparent">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-24 w-24 rounded-full border-t-2 border-r-2 border-secondary"
        />

        {/* Inner Ring */}
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-16 w-16 rounded-full border-b-2 border-l-2 border-primary/40"
        />

        {/* Central Pulse */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-6 w-6 rounded-full bg-secondary shadow-[0_0_15px_rgba(254,179,0,0.6)]"
        />

        {/* Subtle Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -bottom-16 whitespace-nowrap text-sm font-medium tracking-widest uppercase text-muted-foreground/60"
        >
          Chargement...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
