"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Commercial", "Infrastructure", "Hospitality", "Industrial", "Retail"];

const projects = [
  {
    title: "Marina Bay Financial Center",
    category: "Commercial",
    year: "2023",
    value: "$50M",
    description:
      "Complete M&E systems for 50-story commercial tower including HVAC, electrical distribution, and building automation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    tags: ["HVAC", "Electrical", "BMS", "Fire Protection"],
  },
  {
    title: "Changi Airport Terminal 5",
    category: "Infrastructure",
    year: "2023",
    value: "$120M",
    description:
      "Advanced airfield lighting and electrical systems for Singapore's next-generation airport terminal",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    tags: ["Airfield Lighting", "HT/LT", "Emergency Systems"],
  },
  {
    title: "Sentosa Integrated Resort",
    category: "Hospitality",
    year: "2022",
    value: "$80M",
    description:
      "Comprehensive mechanical and electrical services for luxury resort complex with sustainable power solutions",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    tags: ["District Cooling", "Solar", "Smart Building"],
  },
  {
    title: "Jurong Industrial Park",
    category: "Industrial",
    year: "2022",
    value: "$35M",
    description:
      "Custom switchboard manufacturing and power distribution for industrial manufacturing facility",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    tags: ["Switchboards", "Power Distribution", "Controls"],
  },
  {
    title: "Orchard Road Retail Complex",
    category: "Retail",
    year: "2021",
    value: "$45M",
    description:
      "Full M&E fit-out for premium shopping mall with advanced climate control and lighting systems",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    tags: ["Retail HVAC", "Lighting", "Energy Management"],
  },
  {
    title: "CBD Office Tower",
    category: "Commercial",
    year: "2021",
    value: "$60M",
    description:
      "Green building certified office tower with intelligent building management systems",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    tags: ["Green Building", "BMS", "Energy Efficiency"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-navy-950">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-primary-500/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary-600/8 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em]">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase"
          >
            Featured
            <br />
            <span className="gradient-text">Projects.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Explore our portfolio of iconic projects that have shaped Singapore&apos;s
            infrastructure landscape
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 sm:px-10 lg:px-16 border-t border-white/5 sticky top-20 sm:top-24 bg-navy-950/95 backdrop-blur-xl z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    : "bg-white/[0.02] border border-white/10 text-gray-400 hover:border-primary-500/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-primary-500/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Value Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {project.value}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-[0.2em]">
                      {project.year}
                    </span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                      Completed
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[3rem] p-12 sm:p-16 text-center overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-500/10 blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-600/10 blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Let&apos;s create something extraordinary together
              </p>
              <a href="/contact">
                <button className="px-12 py-5 bg-primary-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-600 transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)]">
                  Get In Touch
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20 sm:h-32" />
    </div>
  );
}
