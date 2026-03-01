"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

interface ButtonProps {
  variant?: "primary" | "outline" | "glass";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ variant = "primary", children, className = "", onClick }: ButtonProps) {
  const variants = {
    primary: "bg-primary-500 text-white shadow-glow hover:bg-primary-600",
    outline: "border border-white/20 text-white hover:bg-white/5",
    glass: "glass text-white hover:bg-white/10",
  };

  return (
    <Magnetic strength={0.2}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        data-magnetic
        className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${variants[variant]} ${className}`}
      >
        {children}
      </motion.button>
    </Magnetic>
  );
}
