"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
  "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=80",
  "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
];

export function AutoScrollGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slower transition
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-navy-900 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1600px] mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter text-center"
        >
          OUR <span className="gradient-text">WORK.</span>
        </motion.h2>
      </div>

      <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
        {images.map((img, index) => {
          const isActive = currentIndex === index;
          const isPrev = currentIndex === (index + 1) % images.length;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.95,
                zIndex: isActive ? 10 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
              style={{ display: isActive || isPrev ? "flex" : "none" }} // Only render active and previous
            >
              <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-glow">
                <Image src={img} alt={`Project ${index + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-primary-500 w-8" : "bg-white/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
