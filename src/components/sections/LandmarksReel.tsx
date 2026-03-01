"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const landmarks = [
  {
    name: "Marina Bay Sands",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80",
  },
  {
    name: "Jewel Changi Airport",
    img: "https://images.unsplash.com/photo-1548678967-f1aec58f6fb2?w=600&q=80",
  },
  {
    name: "Gardens by the Bay",
    img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80",
  },
  {
    name: "MRT Infrastructure",
    img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
  },
  {
    name: "Funan Mall",
    img: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80",
  },
  {
    name: "Singapore Skyline",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
];

// Duplicate for seamless loop
const allLandmarks = [...landmarks, ...landmarks];

export function LandmarksReel() {
  return (
    <section className="py-28 sm:py-36 md:py-48 bg-navy-950 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1600px] mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            SINGAPORE&apos;S <span className="gradient-text">LANDMARKS</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide italic !text-center">
            &quot;Powering the nation&apos;s most{" "}
            <span className="text-primary-400 font-medium not-italic">iconic infrastructure</span>{" "}
            since 1951&quot;
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mx-auto mt-6" />
        </motion.div>
      </div>

      {/* Cinema Reel - Infinite Scroll */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -landmarks.length * 420],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allLandmarks.map((landmark, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[280px] relative rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={landmark.img}
                alt={landmark.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <h3 className="text-white font-black text-xl tracking-tight">{landmark.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-950 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
