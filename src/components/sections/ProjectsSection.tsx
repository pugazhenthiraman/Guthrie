"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { FEATURED_PROJECTS } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const singaporeImages = [
  "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=70",
  "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=70",
  "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=70",
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=70",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=70",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=70",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=70",
  "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=70",
];

export function ProjectsSection() {
  const [images] = useState<string[]>(singaporeImages);

  useEffect(() => {
    // Component mounted
  }, []);

  return (
    <Section className="bg-navy-950 px-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              Our Legacy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-tighter"
            >
              SINGAPORE&apos;S <span className="text-primary-500">LANDMARKS.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <Button variant="outline" className="hidden md:flex">
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-12 sm:pb-16 scrollbar-hide gap-4 sm:gap-6 px-4 sm:px-6 md:px-16">
        {FEATURED_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group relative flex-shrink-0 w-[85vw] sm:w-[80vw] md:w-[550px] aspect-video overflow-hidden rounded-2xl bg-navy-900 border border-white/5"
          >
            <div className="relative w-full h-full">
              {images.length > 0 && (
                <Image
                  src={images[index % images.length]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80" />
            </div>

            <div className="absolute inset-0 p-5 sm:p-6 md:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-full glass border border-white/10 text-[9px] sm:text-[10px] font-bold text-primary-400 uppercase tracking-widest">
                  {project.year}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-white/50 uppercase tracking-widest">
                  {project.service}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white tracking-tighter">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 mt-4 sm:mt-6 md:hidden">
        <Link href="/projects">
          <Button variant="primary" className="w-full">
            View All Projects
          </Button>
        </Link>
      </div>
    </Section>
  );
}
