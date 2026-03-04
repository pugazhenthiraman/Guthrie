"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CORE_VALUES } from "@/constants/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ValueIcons = [
  <svg key="1" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>,
  <svg key="2" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>,
  <svg key="3" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
];

function CoreValueCard({
  value,
  index,
}: {
  value: { title: string; subtitle: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -12,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      className="h-full perspective-1000"
    >
      <Card className="h-full bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-100 hover:border-primary-400 transition-all duration-500 group !p-10 sm:!p-12 relative overflow-hidden flex flex-col items-center text-center shadow-lg hover:shadow-2xl">
        {/* Animated gradient orb */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Accent bar with animation */}
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
          style={{ transformOrigin: "top" }}
        />

        <motion.div
          className="mb-8"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-white/30"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            {ValueIcons[index]}
          </div>
        </motion.div>

        <motion.h3
          className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight relative z-10"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          {value.title}
        </motion.h3>
        <motion.p
          className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-5 relative z-10"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.4 }}
        >
          {value.subtitle}
        </motion.p>
        <motion.p
          className="text-gray-600 leading-relaxed text-base relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          {value.description}
        </motion.p>
      </Card>
    </motion.div>
  );
}

export function CoreValues() {
  return (
    <Section className="bg-navy-950 px-4 sm:px-6 py-24 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <SectionHeader
        badge="Our Foundation"
        title="RESPECTED. READY. [RELIABLE.]"
        subtitle="Three pillars that define our commitment to excellence in M&E engineering"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {CORE_VALUES.map((value, index) => (
          <CoreValueCard key={index} value={value} index={index} />
        ))}
      </div>
    </Section>
  );
}
