"use client";

import { Section } from "@/components/ui/Section";
import { SERVICES } from "@/constants/site";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import Image from "next/image";
import { Award, ShieldCheck, Building2, Zap } from "lucide-react";

// Using the newly created component
import { ServicesHero } from "@/components/sections/ServicesHero";

const SERVICE_IMAGES: Record<string, string> = {
  "mechanical-services": "/assets/services/mechanical.png",
  "electrical-services": "/assets/services/electrical.png",
  "technology-solutions":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  "switchboard-manufacturing":
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
  "sustainable-power": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
};

export default function ServicesPage() {
  return (
    <div className="bg-navy-950 pb-32">
      <ServicesHero />

      {/* Editorial Services Sections */}
      {SERVICES.map((service, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <Section
            key={service.id}
            id={index === 0 ? "divisions" : undefined}
            className={`${index === 0 ? "!pt-20" : "!pt-40"} !pb-40 border-b border-white/5`}
          >
            <div
              className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 lg:gap-24 items-center`}
            >
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group">
                  <Image
                    src={SERVICE_IMAGES[service.id] || SERVICE_IMAGES["technology-solutions"]}
                    alt={service.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.5rem] pointer-events-none" />

                  {/* Floating ID badge */}
                  <div className="absolute top-8 left-8 glass px-4 py-2 rounded-xl border border-white/10">
                    <span className="text-[10px] font-black text-primary-500 uppercase tracking-widest">
                      Division {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-8 shadow-2xl">
                  <ServiceIcon id={service.id} />
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                  {service.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={i === service.title.split(" ").length - 1 ? "gradient-text" : ""}
                    >
                      {word}{" "}
                    </span>
                  ))}
                </h2>

                <p className="text-sm font-bold text-primary-500 uppercase tracking-[0.3em] mb-8">
                  {service.tagline}
                </p>

                <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12 w-full max-w-md">
                  {service.features?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 group/feat">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover/feat:scale-150 transition-transform" />
                      <span className="text-xs font-bold text-white/60 uppercase tracking-wider group-hover/feat:text-primary-400 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="!px-10 !py-5 border-white/10 hover:border-primary-500 group"
                  >
                    <span className="mr-3">Discover Division</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </Section>
        );
      })}

      {/* Expertise & Standards Section */}
      <Section className="!py-40 bg-white/5 backdrop-blur-3xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.5em] mb-6">
              Legacy & Standards
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              THE PINNACLE OF <br />
              <span className="gradient-text">ENGINEERING.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              Holding the prestigious BCA L6 grading, Guthrie Engineering represents the highest
              level of quality and reliability in the M&E sector.
            </p>
            <div className="flex gap-12 mt-4">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">70+</span>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black mt-1">
                  Years
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">L6</span>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black mt-1">
                  Grading
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">ISO</span>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black mt-1">
                  Certified
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
            {[
              { icon: Building2, label: "BCA L6" },
              { icon: ShieldCheck, label: "ISO 9001" },
              { icon: Zap, label: "Licensed" },
              { icon: Award, label: "Safety" },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="w-28 h-28 md:w-40 md:h-40 glass rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-700 group-hover:border-primary-500/50 group-hover:bg-white/10 group-hover:-translate-y-3">
                  <item.icon className="w-16 h-16 text-primary-500 shadow-glow mb-2" />
                  <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.3em] group-hover:text-primary-400 transition-colors">
                    {item.label}
                  </span>
                </div>
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-primary-500/0 blur-2xl rounded-full group-hover:bg-primary-500/5 transition-all duration-500 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="!py-32 sm:!py-40">
        <div className="max-w-5xl mx-auto text-center py-24 relative z-10 glass-dark rounded-[4rem] border border-white/10 px-8 lg:px-20 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-500/10 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-700/10 blur-[100px]" />

          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.8] relative z-10">
            ENGINEERING <br />
            <span className="gradient-text">POSSIBILITIES.</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl mb-16 font-light italic max-w-3xl mx-auto leading-relaxed relative z-10">
            &quot;Work with a team that values your vision as much as technical precision.&quot;
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
            <Link href="/contact">
              <Button className="!px-16 !py-8 text-lg font-black tracking-widest uppercase">
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
