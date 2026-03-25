"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import SplashCursor from "@/components/ui/SplashCursor";

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

export function Hero() {
  const [state, setState] = useState<{ mounted: boolean; particles: Particle[] }>({
    mounted: false,
    particles: [],
  });

  const { scrollY } = useScroll();

  // Prevent hydration mismatch and fix impure function issues
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

    const rafId = requestAnimationFrame(() => {
      setState({ mounted: true, particles: newParticles });
    });

    return () => cancelAnimationFrame(rafId);
  }, []);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950 py-24 sm:py-32 px-4 sm:px-6">
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
      {/* Premium Background - Enhanced visuals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60 mix-blend-screen" />

        {/* 6 Floating Particles - Optimized */}
        {state.mounted &&
          state.particles.map((p: Particle, i: number) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-500/40 blur-[1px]"
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

        {/* 2 Giant Gradient Orbs - Optimized blur */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-500/15 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-primary-700/10 rounded-full blur-[70px]"
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-6 sm:pt-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl flex flex-col items-center"
          >
            <div className="overflow-hidden mb-2 relative">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black text-white leading-[0.85] tracking-tighter"
              >
                GUTHRIE
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-12 sm:mb-16">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black leading-[0.85] tracking-tighter gradient-text pb-4"
              >
                ENGINEERING.
              </motion.h1>
            </div>

            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full glass mb-6 sm:mb-8 border border-white/10 group cursor-default"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(0,178,227,0.8)]" />
                <span className="text-[10px] sm:text-xs text-white font-black uppercase tracking-[0.2em]">
                  Singapore&apos;s M&E Excellence
                </span>
              </div>
              <div className="w-[1px] h-3 bg-white/20 mx-1" />
              <span className="text-[9px] sm:text-[10px] text-primary-400 font-bold uppercase tracking-[0.3em]">
                Est. 1951
              </span>
            </motion.div>

            <div className="overflow-hidden mb-8 md:mb-12 relative flex flex-col items-center gap-4">
              <motion.span
                variants={fadeUpVariants}
                className="text-primary-500 font-black uppercase tracking-[0.5em] text-[10px] sm:text-xs"
              >
                Premier Engineering Solutions
              </motion.span>
              <motion.span
                variants={fadeUpVariants}
                className="text-white/40 font-black uppercase tracking-[0.8em] text-[10px] sm:text-xs"
              >
                Premium Legacy
              </motion.span>
            </div>

            <motion.div variants={fadeUpVariants} className="relative max-w-3xl mt-4 sm:mt-6">
              <div className="absolute -inset-x-12 -inset-y-6 bg-primary-500/5 blur-3xl rounded-full opacity-50" />
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light text-center tracking-wide italic">
                &quot;Engineering excellence for Singapore&apos;s most{" "}
                <span className="text-primary-400 font-medium not-italic">iconic blueprints</span>.
                Over seven decades of reliability, refined for the{" "}
                <span className="text-white font-medium not-italic">modern era</span>.&quot;
              </p>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mx-auto mt-10 md:mt-12" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: state.mounted ? opacity : 0 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] text-gray-500 uppercase tracking-[0.4em] font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary-500 to-transparent relative">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[-1px] w-[3px] h-[3px] bg-primary-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
