"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]">
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <div className="relative w-32 h-32 mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-primary-500/20 rounded-[2rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent rounded-[1.5rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black text-white italic">G</span>
          </div>
        </div>

        {/* Text and Progress */}
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-black uppercase tracking-[0.3em] text-sm"
          >
            Precision <span className="text-primary-500">Engineering</span>
          </motion.h2>

          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-primary-500"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] text-white/50 uppercase tracking-widest"
          >
            Loading...
          </motion.p>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </div>
  );
}
