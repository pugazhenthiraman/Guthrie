"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
      className={`mb-20 md:mb-28 flex flex-col w-full ${centered ? "!items-center !text-center !mx-auto" : "items-start text-left"} ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-2xl"
        >
          <Sparkles className="w-3 h-3" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[0.9] uppercase w-full"
      >
        {title.includes("[") ? (
          <>
            {title.split("[")[0]}
            <span className="text-primary-500">{title.split("[")[1].split("]")[0]}</span>
            {title.split("]")[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl font-light italic leading-relaxed tracking-wide mx-auto lg:mx-0"
        >
          {subtitle}
        </motion.p>
      )}

      <div
        className={`w-24 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mt-12 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
