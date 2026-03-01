"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SITE_CONFIG } from "@/constants/site";
import { AnimatedGallery } from "@/components/sections/AnimatedGallery";
import { FlipCards } from "@/components/sections/FlipCards";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-navy-950 pt-44 sm:pt-52 pb-44 sm:pb-52 px-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-128 h-128 bg-primary-500/10 rounded-full blur-[160px]" />
        </div>
        <div className="w-full max-w-[1800px] mx-auto flex flex-col items-center text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full glass border border-white/10 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            About Guthrie
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter mb-10 sm:mb-12 leading-[0.8] uppercase flex flex-col items-center"
          >
            70+ YEARS OF <br />
            <span className="gradient-text">EXCELLENCE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl font-light leading-relaxed text-center"
          >
            Founded in 1951, Guthrie Engineering is one of Singapore&apos;s most established M&E
            engineering firms, delivering iconic infrastructure projects across the nation.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <Section className="bg-navy-950 overflow-visible">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-16 sm:gap-20 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.2em] mb-4 block">
                Our Heritage
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                FROM HUMBLE ROOTS TO <br />
                <span className="gradient-text">NATIONAL IMPACT.</span>
              </h2>
              <p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
                What began in 1951 as a specialized engineering workshop has grown into a
                cornerstone of Singapore&apos;s M&E industry, trusted by the nation&apos;s most
                prestigious developments.
              </p>
              <p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
                Over seven decades, we have evolved in tandem with Singapore&apos;s growth — from
                the pioneering MRT lines to the world-class terminals at Changi Airport.
              </p>
              <p className="text-gray-300 font-bold leading-relaxed border-l-2 border-primary-500 pl-6 italic">
                Guthrie Engineering holds the prestigious BCA L6 grading, representing the pinnacle
                of mechanical and electrical engineering standards in Singapore.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=70"
                alt="Engineering team at work"
                fill
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
              <div className="absolute bottom-10 left-10 glass-dark px-8 py-4 rounded-2xl border border-white/10">
                <span className="text-4xl font-black text-primary-500">
                  Since {SITE_CONFIG.founded}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Animated Gallery Section */}
      <div className="py-60 sm:py-80 md:py-[20rem] bg-navy-950">
        <AnimatedGallery />
      </div>

      {/* Flip Cards */}
      <FlipCards />

      {/* Accreditations Section */}
      <Section className="bg-white overflow-visible min-h-screen flex items-center !py-60 sm:!py-80 md:!py-[24rem]">
        <div className="w-full">
          <div className="text-center mb-32 sm:mb-48">
            <span className="text-[12px] font-bold text-primary-500 uppercase tracking-[0.5em] mb-8 block">
              Certified Excellence
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-navy-950 tracking-tighter mb-12 leading-none">
              OUR <span className="text-primary-500 italic uppercase">ACCREDITATIONS.</span>
            </h2>
            <p className="text-navy-900/60 max-w-3xl mx-auto font-medium text-xl">
              We maintain the highest industry standards through rigorous certification and
              continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {[
              {
                name: "ISO 9001",
                image: "/iso_9001_certificate_1772138314757.png",
                label: "Quality Management",
              },
              {
                name: "BCA L6",
                image: "/bca_l6_grading_certificate_1772138331107.png",
                label: "Industry Grading",
              },
              {
                name: "bizSAFE STAR",
                image: "/bizsafe_star_certificate_engineering_1772138343281.png",
                label: "WSH Safety",
              },
              {
                name: "Engineering Excellence",
                image: "/engineering_excellence_award_1772138366898.png",
                label: "Professional Excellence",
              },
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-navy-950/5 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-navy-50">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1635339001026-6188d0ce7876?w=400&q=40";
                    }}
                  />
                  <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="glass p-4 rounded-full">
                      <span className="text-white text-xl">🔍</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-navy-950 font-black text-sm uppercase tracking-widest">
                    {cert.name}
                  </h4>
                  <p className="text-navy-950/50 text-[10px] font-bold uppercase tracking-widest mt-1">
                    {cert.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Metrics (Refined Section) */}
      <section className="bg-navy-950 py-32 sm:py-40 md:py-48 border-y border-white/5 relative z-10">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { number: "70", suffix: "+", label: "YEARS HERITAGE" },
              { number: "500", suffix: "+", label: "ICONIC PROJECTS" },
              { number: "BCA", suffix: " L6", label: "HIGHEST GRADING" },
              { number: "1000", suffix: "+", label: "ELITE TALENT" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center group"
              >
                <div className="flex items-baseline mb-4 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
                    {stat.number}
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-500 ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <div className="h-px w-10 bg-primary-500/20 mb-4 group-hover:w-20 group-hover:bg-primary-500 transition-all duration-500" />
                <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-[0.4em] text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
