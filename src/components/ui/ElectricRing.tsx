"use client";

import { motion } from "framer-motion";

interface ElectricRingProps {
  children: React.ReactNode;
  active?: boolean;
}

export function ElectricRing({ children, active = false }: ElectricRingProps) {
  return (
    <div className="relative flex items-center justify-center p-1 cursor-pointer">
      {/* Outer subtle glow */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-500 bg-primary-500/10 blur-xl ${active ? "opacity-100" : "opacity-0"}`}
      />

      {/* The rotating dashed ring */}
      <motion.div
        animate={active ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-0 rounded-full border border-dashed transition-colors duration-500 ${
          active ? "border-primary-500 border-opacity-50" : "border-white/10"
        }`}
        style={{ borderWidth: "1.5px" }}
      />

      {/* Inner solid ring */}
      <div
        className={`absolute inset-1 rounded-full border transition-colors duration-500 ${
          active ? "border-primary-500/30" : "border-white/5"
        }`}
      />

      {/* Content wrapper */}
      <div
        className={`relative z-10 transition-transform duration-500 ${active ? "scale-110" : "scale-100"}`}
      >
        {children}
      </div>
    </div>
  );
}
