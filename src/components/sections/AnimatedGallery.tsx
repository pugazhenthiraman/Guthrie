"use client";

import { motion } from "framer-motion";
import CircularGallery from "@/components/ui/CircularGallery";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=90",
    text: "Airport",
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=90",
    text: "Mechanical",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=90",
    text: "Construction",
  },
  {
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=90",
    text: "Engineering",
  },
  {
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1600&q=90",
    text: "Singapore MRT",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=90",
    text: "Building",
  },
  {
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=90",
    text: "Industrial",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=90",
    text: "Architecture",
  },
  {
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1600&q=90",
    text: "Electrical",
  },
  {
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=90",
    text: "HVAC",
  },
  {
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1600&q=90",
    text: "Modern",
  },
  {
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=90",
    text: "Site",
  },
];

export function AnimatedGallery() {
  return (
    <section className="relative py-32 md:py-48 bg-navy-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-mesh-gradient opacity-10 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-5 py-2 rounded-full glass border border-white/5 text-primary-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
          >
            Curated Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.8] uppercase"
          >
            OUR <span className="gradient-text italic">LEGACY.</span>
          </motion.h2>
        </div>
      </div>

      {/* Interactive Circular WebGL Gallery */}
      <div className="relative w-full z-10 cursor-grab active:cursor-grabbing h-[400px] sm:h-[500px] md:h-[700px]">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-12 text-gray-500 text-sm font-medium tracking-widest uppercase flex flex-col items-center justify-center gap-2"
      >
        <span className="hidden md:inline">← Drag to Explore →</span>
        <span className="md:hidden">Swipe to Explore</span>
      </motion.div>
    </section>
  );
}
