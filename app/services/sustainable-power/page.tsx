"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function SustainablePowerPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Sustainable Power"
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
                Renewable Energy
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter"
            >
              SUSTAINABLE <br />
              <span className="gradient-text">POWER</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-champagne/80 font-light italic max-w-3xl"
            >
              &quot;Pioneering renewable energy solutions for a sustainable future.&quot;
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <SectionHeader
          title="Guthrie [Engineering]"
          subtitle="Leading the Green Energy Revolution"
          className="!mb-12"
        />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            We integrate cutting-edge renewable energy technologies with traditional power systems
            to create sustainable, efficient, and reliable energy solutions for Singapore&apos;s
            future.
          </p>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <SectionHeader
          badge="Our Solutions"
          title="Renewable [Energy]"
          subtitle="Comprehensive sustainable power solutions"
          className="mb-20"
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Solar Power Systems",
              desc: "Advanced photovoltaic installations with smart grid integration and energy storage solutions for maximum efficiency",
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
            },
            {
              title: "Wind Energy Solutions",
              desc: "High-efficiency wind turbine installations for commercial and industrial applications with 24/7 monitoring",
              image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80",
            },
            {
              title: "Energy Storage Systems",
              desc: "Battery management systems and grid-scale energy storage ensuring continuous power availability",
              image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
            },
          ].map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              style={{ perspective: 1000 }}
              className="group"
            >
              <Card className="!p-0 overflow-hidden h-full hover:border-primary-500/50 transition-all transform-gpu hover:scale-105 hover:rotate-1 bg-navy-900 border-2 border-white/10">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-black/50 to-transparent" />
                </div>
                <div className="p-8 bg-navy-900">
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light">{solution.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50MW+", label: "Renewable Capacity" },
            { value: "200+", label: "Installations" },
            { value: "30%", label: "Energy Savings" },
            { value: "24/7", label: "Monitoring" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 glass rounded-2xl"
            >
              <div className="text-5xl font-black gradient-text mb-3">{stat.value}</div>
              <p className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-xs text-primary-400 font-bold uppercase tracking-[0.3em]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              The Future is <span className="gradient-text">Renewable</span>
            </h2>
            <div className="space-y-6">
              {[
                "Reduce carbon footprint by up to 80%",
                "Lower energy costs with smart optimization",
                "Government incentives and rebates available",
                "Increase property value and sustainability rating",
                "24/7 monitoring and predictive maintenance",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-lg text-gray-300 font-light">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-premium"
          >
            <Image
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
              alt="Renewable Energy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Parallax Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80"
            alt="Solar Farm"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Powering <span className="gradient-text">Tomorrow</span>
          </h2>
          <p className="text-2xl text-champagne font-light leading-relaxed">
            Delivering reliable renewable energy solutions for Singapore&apos;s sustainable future
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <Section className="bg-navy-950 !py-12">
        <div className="glass border border-white/5 rounded-3xl py-20 px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              Ready to Go <br />
              <span className="gradient-text">Green?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Start your sustainable energy journey today
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
