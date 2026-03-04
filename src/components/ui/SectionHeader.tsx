"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 md:mb-24 flex flex-col w-full !items-center !text-center !mx-auto ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-premium"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-tight !text-center w-full"
      >
        {title.includes("[") ? (
          <>
            {title.split("[")[0]}
            <span className="gradient-text">{title.split("[")[1].split("]")[0]}</span>
            {title.split("]")[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-base sm:text-lg md:text-xl font-light italic leading-relaxed tracking-wide !text-center mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      <div
        className={`w-16 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mt-8 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
