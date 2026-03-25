"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function SwitchboardManufacturingPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80"
          alt="Switchboard Manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-navy-950 z-10" />

        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8 border border-white/10"
            >
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-xs text-primary-400 font-bold uppercase tracking-[0.3em]">
                ISO 9001:2000 Certified
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter"
            >
              SWITCHBOARD <br />
              <span className="gradient-text">MANUFACTURING</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-champagne/80 font-light italic max-w-3xl"
            >
              &quot;30 years of technical expertise in low and medium voltage switchgear
              solutions.&quot;
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <Section className="bg-navy-900 !pt-10 sm:!pt-14 !pb-2">
        <SectionHeader
          title="Guthrie [Engineering]"
          subtitle="Precision Manufacturing Since 1951"
          className="!mb-6"
        />
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Over the last 30 years, Guthrie Engineering has acquired the technical expertise and
            experience to design, manufacture and manage low and medium voltage
            switchgear/switchboards that meet stringent standards for various industries including
            public infrastructures by LTA.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            With dedication and commitment, we operate our factory with a well-managed and
            controlled Quality Management System that is certified to ISO 9001:2000 to meet the
            demands for high quality and challenges of a fast changing competitive market
            environment.
          </p>
        </div>
      </Section>

      {/* Manufacturing Images */}
      <Section className="bg-navy-950 !py-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[280px] rounded-3xl overflow-hidden shadow-premium"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80"
              alt="Switchboard Panels"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Control Panels
              </h3>
              <p className="text-gray-300 text-sm font-light mt-2">
                Precision-engineered electrical panels
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[280px] rounded-3xl overflow-hidden shadow-premium"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
              alt="Manufacturing Facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Manufacturing Facility
              </h3>
              <p className="text-gray-300 text-sm font-light mt-2">
                State-of-the-art production line
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section className="bg-navy-900 !pt-4 sm:!pt-8 !pb-10 sm:!pb-14">
        <SectionHeader
          badge="Our Commitment"
          title="Quality & [Excellence]"
          subtitle="Dedicated to delivering superior switchboard solutions"
          className="!mb-6"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "Dedicated Design Team",
              desc: "A dedicated design team that understands projects requirements and delivers tailored solutions for every client.",
              icon: "01",
            },
            {
              title: "Project Management",
              desc: "A dedicated project team to oversee management, design, engineering, manufacturing and QA/QC throughout the entire process.",
              icon: "02",
            },
            {
              title: "Flexible Engineering",
              desc: "A flexible engineering and manufacturing process to meet clients' design changes and adapt to evolving project needs.",
              icon: "03",
            },
            {
              title: "Training & Support",
              desc: "Comprehensive training and after sales support to ensure optimal performance and longevity of our switchboard systems.",
              icon: "04",
            },
          ].map((commitment, i) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-10 h-full hover:border-primary-500/30 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-black text-lg shrink-0 shadow-glow">
                    {commitment.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{commitment.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm">
                      {commitment.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-navy-950 !pt-6 sm:!pt-10 !pb-10 sm:!pb-14">
        <SectionHeader
          badge="Our Capabilities"
          title="Technical [Expertise]"
          subtitle="Comprehensive switchboard manufacturing services"
          className="!mb-6"
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Low Voltage Switchgear",
              desc: "Design and manufacture of LV switchboards up to 415V for commercial and industrial applications.",
            },
            {
              title: "Medium Voltage Systems",
              desc: "MV switchgear solutions up to 22kV meeting stringent industry standards and safety requirements.",
            },
            {
              title: "Custom Solutions",
              desc: "Tailored switchboard designs to meet specific project requirements and client specifications.",
            },
            {
              title: "Quality Assurance",
              desc: "ISO 9001:2000 certified manufacturing process ensuring consistent quality and reliability.",
            },
            {
              title: "Public Infrastructure",
              desc: "Specialized switchboards for LTA and other public infrastructure projects in Singapore.",
            },
            {
              title: "Testing & Commissioning",
              desc: "Comprehensive testing, commissioning, and after-sales support for all manufactured units.",
            },
          ].map((capability, i) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full hover:border-primary-500/30 transition-all text-center">
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {capability.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-navy-900 !py-8 sm:!py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Experience", value: "30+" },
            { label: "ISO Certified", value: "9001" },
            { label: "Projects Delivered", value: "500+" },
            { label: "Quality Standard", value: "100%" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-8 glass rounded-2xl"
            >
              <div className="text-4xl md:text-5xl font-black gradient-text mb-3">{stat.value}</div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy-950 !py-6 sm:!py-10">
        <div className="glass border border-white/5 rounded-3xl py-12 px-8 sm:py-16 sm:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              Need Custom <br />
              <span className="gradient-text">Switchboard Solutions?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Let&apos;s discuss your switchboard manufacturing requirements
            </p>
            <Link href="/contact">
              <Button className="!px-12 !py-5 !text-base">Get Started</Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1400px] pb-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest"
        >
          ← Back to All Services
        </Link>
      </div>
    </div>
  );
}
