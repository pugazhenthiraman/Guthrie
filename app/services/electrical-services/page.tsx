"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function ElectricalServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-navy-950">
      {/* Hero with Image Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === i ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={img} alt="Electrical Services" fill className="object-cover" priority />
          </motion.div>
        ))}
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
                Electrical Excellence
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter"
            >
              ELECTRICAL <br />
              <span className="gradient-text">SERVICES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-champagne/80 font-light italic max-w-3xl"
            >
              &quot;Powering Singapore&apos;s infrastructure with reliable electrical engineering
              solutions.&quot;
            </motion.p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-12 h-1 rounded-full transition-all ${
                currentSlide === i ? "bg-primary-500 w-16" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Intro */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <SectionHeader
          title="Guthrie [Engineering]"
          subtitle="Powering & Lighting the Way"
          className="!mb-12"
        />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            We breathe life into buildings and infrastructures. We power up the systems and we light
            the way. Our team has extensive expertise in HT substations, LT distribution, airfield
            lighting, illuminated signages, street lighting and energy harvesting.
          </p>
        </div>
      </Section>

      {/* 3D Floating Cards - Services */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <SectionHeader
          badge="Our Expertise"
          title="Comprehensive [Solutions]"
          subtitle="Complete electrical engineering services from design to maintenance"
          className="mb-20"
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "HT/LT Distribution",
              desc: "High tension and low tension power distribution systems for commercial and industrial facilities",
              image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
            },
            {
              title: "Lighting Solutions",
              desc: "Airfield lighting, street lighting, and architectural illumination systems",
              image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
            },
            {
              title: "Switchgear Systems",
              desc: "Custom switchboard manufacturing and electrical control panel solutions",
              image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
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
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-black/50 to-transparent" />
                </div>
                <div className="p-10 sm:p-12 bg-navy-900 flex flex-col items-center text-center">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-5 uppercase tracking-tight !text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light text-base !text-center">
                    {service.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Scrolling Image Gallery */}
      <section className="bg-navy-900 py-24 overflow-hidden">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm font-bold">
            Excellence in Execution
          </p>
        </div>

        {/* First Row - Scroll Left */}
        <motion.div
          className="flex gap-6 mb-6"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[
                {
                  img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
                  title: "HT Substation Design",
                  desc: "22kV/415V electrical distribution",
                },
                {
                  img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
                  title: "Control Panel Systems",
                  desc: "Custom switchboard manufacturing",
                },
                {
                  img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
                  title: "LED Street Lighting",
                  desc: "Energy-efficient illumination",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="relative w-96 h-64 rounded-2xl overflow-hidden shrink-0 group"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-base uppercase tracking-wider mb-1">
                      {project.title}
                    </p>
                    <p className="text-gray-300 text-sm font-light">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Second Row - Scroll Right */}
        <motion.div
          className="flex gap-6"
          animate={{ x: [-1920, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[
                {
                  img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
                  title: "Airfield Lighting Systems",
                  desc: "Aviation-grade runway illumination",
                },
                {
                  img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80",
                  title: "Power Distribution",
                  desc: "LT electrical infrastructure",
                },
                {
                  img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80",
                  title: "Solar Integration",
                  desc: "Renewable energy solutions",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="relative w-96 h-64 rounded-2xl overflow-hidden shrink-0 group"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-base uppercase tracking-wider mb-1">
                      {project.title}
                    </p>
                    <p className="text-gray-300 text-sm font-light">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Expertise Section */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <div className="w-full max-w-[1400px] mx-auto">
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
                  Industry Leader
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Complete <span className="gradient-text">Electrical Solutions</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                From high-voltage substations to energy-efficient LED lighting, we provide
                comprehensive electrical engineering services for buildings and infrastructure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Our expertise spans power generation, distribution, control systems, and specialized
                lighting solutions including airfield and street lighting systems.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { label: "Projects Completed", value: "300+" },
                  { label: "Years Experience", value: "70+" },
                  { label: "Safety Record", value: "100%" },
                  { label: "Certified Engineers", value: "80+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 glass rounded-2xl">
                    <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
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
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Electrical Engineering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <SectionHeader
          badge="Our Capabilities"
          title="Technical [Expertise]"
          subtitle="Comprehensive electrical engineering services"
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "HT Substation Design",
              desc: "High-tension electrical substations with advanced protection and monitoring systems.",
            },
            {
              title: "LT Power Distribution",
              desc: "Low-tension distribution networks optimized for efficiency and reliability.",
            },
            {
              title: "Airfield Lighting",
              desc: "Specialized aviation lighting systems meeting international safety standards.",
            },
            {
              title: "Street Lighting",
              desc: "Energy-efficient LED street lighting with smart control systems.",
            },
            {
              title: "Energy Harvesting",
              desc: "Solar integration and renewable energy solutions for sustainable power.",
            },
            {
              title: "Electrical Maintenance",
              desc: "Preventive maintenance programs ensuring system reliability and longevity.",
            },
          ].map((capability, i) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-10 h-full hover:border-primary-500/30 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-black text-lg shrink-0 shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm">
                      {capability.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Parallax Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
            alt="Engineering"
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
            Delivering reliable electrical solutions that power Singapore&apos;s future.
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
              Ready to Power <br />
              <span className="gradient-text">Your Project?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Let&apos;s discuss your electrical engineering needs
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
