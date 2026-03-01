"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/home" className={`flex items-center gap-3 group ${className}`}>
      <motion.div
        className="relative w-24 h-24"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-primary-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 opacity-90 shadow-glow-lg" />

        {/* G Letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-4xl font-black text-white relative z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            G
          </motion.span>
        </div>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-primary-500/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Company name */}
      <div className="flex flex-col gap-1">
        <motion.span
          className="text-3xl font-black text-white tracking-tighter uppercase leading-none"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          Guthrie
        </motion.span>
        <span className="text-[13px] font-bold text-primary-400 uppercase tracking-[0.25em] leading-none">
          Engineering
        </span>
      </div>
    </Link>
  );
}
