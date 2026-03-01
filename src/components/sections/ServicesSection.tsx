"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SERVICES } from "@/constants/site";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  return (
    <Link href={service.href} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1,
          duration: 0.6,
          type: "spring",
          stiffness: 80,
        }}
        whileHover={{
          scale: 1.05,
          rotateZ: 2,
          transition: { duration: 0.3 },
        }}
        className="h-full"
      >
        <Card className="h-full bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-100 hover:border-primary-400 transition-all duration-500 group !p-10 sm:!p-12 relative overflow-hidden flex flex-col items-center text-center shadow-lg hover:shadow-2xl">
          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-transparent"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 45 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            style={{ transformOrigin: "top right" }}
          />

          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          <motion.div
            className="mb-6"
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              scale: 1.15,
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              <ServiceIcon id={service.id} />
            </div>
          </motion.div>

          <motion.h3
            className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-2 tracking-tight relative z-10"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-4 relative z-10"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {service.tagline}
          </motion.p>

          <motion.p
            className="text-gray-600 leading-relaxed text-sm mb-6 relative z-10 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="mt-auto pt-5 w-full border-t-2 border-gray-100 flex items-center justify-center gap-3 text-gray-900 font-bold text-xs uppercase tracking-wide group-hover:text-primary-600 transition-colors duration-300 relative z-10 group-hover:border-primary-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <span>Learn More</span>
            <motion.div
              className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-all duration-300"
              whileHover={{ x: 5, rotate: 45 }}
            >
              <span className="group-hover:text-white">→</span>
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <Section className="bg-navy-900 px-4 sm:px-6 relative !pb-16 sm:!pb-24 md:!pb-32">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-500 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-navy-400 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-premium"
          >
            Our Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[0.9]"
          >
            PRECISION <br className="hidden sm:block" />
            <span className="gradient-text">ENGINEERING.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light italic leading-relaxed tracking-wide !text-center"
          >
            &quot;Specialized{" "}
            <span className="text-primary-400 font-medium not-italic">top-tier M&E solutions</span>{" "}
            engineered for complex, large-scale national infrastructure.&quot;
          </motion.p>
          <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-8 opacity-80" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14 w-full relative z-10">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-40px)] flex"
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
