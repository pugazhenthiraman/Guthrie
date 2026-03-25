"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Particle {
  width: number;
  height: number;
  left: string;
  top: string;
  y: number[];
  x: number[];
  duration: number;
  delay: number;
}

export function ServicesHero() {
  const [state, setState] = useState<{ mounted: boolean; particles: Particle[] }>({
    mounted: false,
    particles: [],
  });

  useEffect(() => {
    const newParticles: Particle[] = [...Array(6)].map(() => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      y: [0, Math.random() * -100 - 50],
      x: [0, (Math.random() - 0.5) * 50],
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState((prev) => ({ ...prev, mounted: true, particles: newParticles }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950 py-32 px-6 sm:px-8 lg:px-12">
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 opacity-80" />

        {state.mounted &&
          state.particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-500/30 blur-[1px]"
              style={{
                width: p.width,
                height: p.height,
                left: p.left,
                top: p.top,
              }}
              animate={{
                y: p.y,
                x: p.x,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              }}
            />
          ))}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary-500/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-primary-700/10 rounded-full blur-[90px]"
        />
      </div>

      <div className="w-full max-w-[1800px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border border-white/10 mb-10 overflow-hidden"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(0,178,227,0.8)]" />
            <span className="text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
              Engineering Capabilities
            </span>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase"
            >
              EXPERTISE <br />
              <span className="gradient-text">& SOLUTIONS.</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl font-light leading-relaxed mb-16 italic opacity-80"
          >
            &quot;Precision engineering for Singapore&apos;s most complex blueprints. Delivered with
            over seven decades of reliability, refined for the modern era.&quot;
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-24 bg-gradient-to-b from-primary-500 to-transparent"
            />
            <Link href="#divisions" className="group flex flex-col items-center gap-2">
              <span className="text-[10px] text-gray-400 group-hover:text-primary-500 uppercase tracking-[0.5em] font-bold transition-colors duration-300">
                Explore Our Divisions
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="w-full h-[1px] bg-primary-500 origin-center transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
