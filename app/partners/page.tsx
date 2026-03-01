"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const partners = [
  {
    name: "Daikin",
    category: "HVAC Systems",
    description: "Global leader in air conditioning and refrigeration.",
  },
  {
    name: "Schneider Electric",
    category: "Electrical Distribution",
    description: "Specialist in energy management and automation.",
  },
  {
    name: "Johnson Controls",
    category: "Building Automation",
    description: "Innovator in smart building technologies.",
  },
  {
    name: "Grundfos",
    category: "Pump Solutions",
    description: "World&apos;s leading pump manufacturer for building services.",
  },
  {
    name: "ABB",
    category: "Power & Automation",
    description: "Pioneering technology for power grids and industry.",
  },
  {
    name: "Siemens",
    category: "Building Technologies",
    description: "Creating perfect environments through intelligent infrastructure.",
  },
];

export default function PartnersPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-950 pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Trusted Partnerships
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[0.85]"
          >
            OUR <br />
            <span className="gradient-text">PARTNERS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light text-center"
          >
            We collaborate with world-class brands to deliver premium building solutions.
          </motion.p>
        </div>
      </section>

      <Section className="bg-navy-900 pt-24 sm:pt-32 pb-40 sm:pb-52">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass border border-white/5 rounded-2xl p-8 hover:border-primary-500/30 transition-colors duration-200 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-2xl font-black text-primary-500">
                  {partner.name.charAt(0)}
                </div>
                <h3 className="text-xl font-black text-white mb-1">{partner.name}</h3>
                <p className="text-[10px] font-bold text-primary-500/80 uppercase tracking-widest mb-3">
                  {partner.category}
                </p>
                <p className="text-gray-400 font-light text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
