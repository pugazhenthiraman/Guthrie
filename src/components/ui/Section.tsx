"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`py-28 sm:py-36 md:py-48 ${className}`}
    >
      <div className="container max-w-[1800px] px-6 sm:px-8 lg:px-12">{children}</div>
    </motion.section>
  );
}
