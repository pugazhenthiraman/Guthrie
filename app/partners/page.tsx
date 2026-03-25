"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Daikin",
    category: "HVAC Systems",
    description:
      "Global leader in air conditioning and refrigeration solutions with 95+ years of innovation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    years: "25+",
    projects: "300+",
  },
  {
    name: "Schneider Electric",
    category: "Electrical Distribution",
    description:
      "Specialist in energy management and automation technologies for sustainable efficiency",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    years: "20+",
    projects: "250+",
  },
  {
    name: "Johnson Controls",
    category: "Building Automation",
    description: "Innovator in smart building and HVAC control technologies for intelligent spaces",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    years: "18+",
    projects: "200+",
  },
  {
    name: "Grundfos",
    category: "Pump Solutions",
    description: "World's leading pump manufacturer for building services and water solutions",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    years: "22+",
    projects: "280+",
  },
  {
    name: "ABB",
    category: "Power & Automation",
    description: "Pioneering technology for power grids and industrial automation worldwide",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    years: "30+",
    projects: "400+",
  },
  {
    name: "Siemens",
    category: "Building Technologies",
    description: "Comprehensive solutions for intelligent infrastructure and building automation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    years: "28+",
    projects: "350+",
  },
];

const certifications = [
  { name: "BCA L6 Grading", icon: "🏆" },
  { name: "ISO 9001:2015", icon: "✓" },
  { name: "ISO 14001:2015", icon: "🌱" },
  { name: "ISO 45001:2018", icon: "🛡️" },
];

export default function PartnersPage() {
  return (
    <div className="bg-navy-950">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-32">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Partners"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/90 to-navy-950" />

        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em]">
              Our Network
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase"
          >
            Trusted
            <br />
            <span className="gradient-text">Partners.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Collaborating with world-class manufacturers and technology leaders to deliver
            exceptional engineering solutions
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { value: "50+", label: "Global Partners" },
              { value: "1000+", label: "Joint Projects" },
              { value: "70+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em] mb-4 block"
            >
              Strategic Partnerships
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight"
            >
              Industry <span className="gradient-text">Leaders</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-primary-500/30 hover:bg-white/[0.03] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/40 transition-colors duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-primary-400 transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-xl font-black text-white">{partner.years}</div>
                      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                        Years
                      </div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <div className="text-xl font-black text-white">{partner.projects}</div>
                      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                        Projects
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em] mb-4 block"
            >
              Quality Assurance
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight"
            >
              Certifications & <span className="gradient-text">Standards</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 text-center hover:border-primary-500/30 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-tight">
                  {cert.name}
                </h3>
              </motion.div>
            ))}
          </div>
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
                Become a <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Interested in partnering with us? Let&apos;s explore opportunities together
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
