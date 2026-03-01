"use client";

import { Section } from "@/components/ui/Section";
import { FEATURED_PROJECTS } from "@/constants/site";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-28 sm:pt-32">
      <Section>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="mb-20">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
              OUR <span className="gradient-text">PROJECTS</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-2xl">
              A legacy of engineering excellence across Singapore&apos;s built environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:shadow-premium transition-all duration-700 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-premium"
                    />
                    <div className="absolute top-6 right-6 glass p-3 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[10px] text-primary-400 font-bold uppercase tracking-widest">
                        {project.service}
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
                      {project.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-fit text-[10px] tracking-[0.2em] uppercase"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Global Presence Counterpart */}
      <Section className="bg-navy-900/30 pt-24 sm:pt-32 pb-40 sm:pb-52">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="glass p-12 rounded-[2rem]">
            <div className="text-6xl font-black text-white mb-2 tracking-tighter">70+.</div>
            <div className="text-xs text-primary-500 font-bold uppercase tracking-[0.3em]">
              Years of History
            </div>
          </div>
          <div className="glass p-12 rounded-[2rem]">
            <div className="text-6xl font-black text-white mb-2 tracking-tighter">BCA L6.</div>
            <div className="text-xs text-primary-500 font-bold uppercase tracking-[0.3em]">
              Quality Rating
            </div>
          </div>
          <div className="glass p-12 rounded-[2rem]">
            <div className="text-6xl font-black text-white mb-2 tracking-tighter">500+.</div>
            <div className="text-xs text-primary-500 font-bold uppercase tracking-[0.3em]">
              Projects Completed
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
