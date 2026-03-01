"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ElectricBorder from "../../../components/ElectricBorder";

const cards = [
  {
    title: "PROMISE",
    subtitle: "Our Commitment",
    front: "OUR PROMISE.",
    back: "At Guthrie Engineering, we promise to enable your business with our innovations, products and expertise. As a respected brand, we are ready with resources to provide you with dependable and reliable solutions. We promise to overcome all obstacles and challenges with tenacity, commitment and teamwork.",
  },
  {
    title: "MISSION",
    subtitle: "Our Purpose",
    front: "OUR MISSION.",
    back: "We strive to excite you with possibilities delivered by design, with dedication and through collaboration that enables your potential.",
  },
  {
    title: "VALUES",
    subtitle: "Our Principles",
    front: "OUR VALUES.",
    back: "Respect • Dignity, Fairness, Professionalism\nSatisfaction • Responsiveness, Listening, Goes the Extra Mile\nTrust • Openness, Honesty, Responsibility\nTeamwork • Cooperation, Ready to Share, Solving Problems Together",
  },
];

function FlipCard({ card, index }: { card: (typeof cards)[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="perspective-1000 h-[450px] sm:h-[500px] md:h-[550px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-[2.5rem]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <ElectricBorder
            color="#f97316"
            speed={0.8}
            chaos={0.1}
            borderRadius={40}
            className="w-full h-full"
          >
            <div className="w-full h-full glass border border-white/10 p-10 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center relative rounded-[2.5rem] group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-full">
                <motion.div animate={{ scale: isFlipped ? 0.9 : 1 }} transition={{ duration: 0.3 }}>
                  <span className="text-xs sm:text-sm font-bold text-primary-400 uppercase tracking-[0.4em] mb-6 block">
                    {card.subtitle}
                  </span>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                    {card.front}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-8" />
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-[0.3em] font-bold">
                    Hover to Read
                  </p>
                </motion.div>
              </div>
            </div>
          </ElectricBorder>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-[2.5rem]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <ElectricBorder
            color="#f97316"
            speed={0.8}
            chaos={0.1}
            borderRadius={40}
            className="w-full h-full"
          >
            <div className="w-full h-full glass-dark border border-primary-500/30 p-10 sm:p-12 md:p-14 flex flex-col items-center justify-center text-center relative rounded-[2.5rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-500/10" />

              <div className="relative z-10 w-full overflow-hidden">
                <span className="text-xs sm:text-sm font-bold text-primary-400 uppercase tracking-[0.4em] mb-6 block">
                  {card.subtitle}
                </span>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light whitespace-pre-line max-w-[90%] mx-auto">
                  {card.back}
                </p>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FlipCards() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-44 md:pb-32 bg-navy-950 relative overflow-visible z-10">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-[1800px] relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 sm:mb-28 flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm font-bold text-primary-400 uppercase tracking-[0.3em] mb-6 block">
            What Defines Us
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-10">
            OUR <span className="gradient-text">FOUNDATION.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Hover over each card to discover the principles that drive our excellence, national
            impact, and commitment to the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-24 mt-20 sm:mt-32">
          {cards.map((card, index) => (
            <FlipCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* Dedicated Space below cards - Reduced size */}
        <div className="h-40 sm:h-52 md:h-64 lg:h-80" />
      </div>
    </section>
  );
}
