"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const openings = [
  { title: "Senior M&E Engineer", dept: "Engineering", type: "Full-Time" },
  { title: "Project Manager", dept: "Project Management", type: "Full-Time" },
  { title: "BIM Coordinator", dept: "Technology", type: "Full-Time" },
  { title: "Electrical Supervisor", dept: "Site Operations", type: "Full-Time" },
  { title: "Quantity Surveyor", dept: "Commercial", type: "Full-Time" },
  { title: "Safety Officer", dept: "QHSE", type: "Full-Time" },
];

export default function CareersPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-950 pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Join Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[0.85]"
          >
            BUILD YOUR <br />
            <span className="gradient-text">CAREER.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light text-center"
          >
            Join one of Singapore&apos;s most established engineering firms and work on projects
            that shape the nation.
          </motion.p>
        </div>
      </section>

      {/* Why Guthrie */}
      <Section className="bg-navy-900 pt-24 sm:pt-32 pb-40 sm:pb-52">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {[
              {
                icon: "🏗️",
                title: "Iconic Projects",
                desc: "Work on Singapore's most prestigious infrastructure.",
              },
              {
                icon: "📈",
                title: "Growth",
                desc: "Clear career progression and professional development.",
              },
              {
                icon: "🤝",
                title: "Culture",
                desc: "A supportive team with over 70 years of heritage.",
              },
            ].map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass border border-white/5 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-black text-white mb-2">{perk.title}</h3>
                <p className="text-gray-400 font-light text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter">
              OPEN <span className="text-primary-500">POSITIONS.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="glass border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary-500/30 transition-colors duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-black text-white">{job.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                      {job.dept}
                    </span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="!px-6 !py-2 !text-xs">
                    Apply Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
