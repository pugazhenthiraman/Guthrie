"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function MechanicalServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&q=80", // Industrial facility
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1920&q=80", // Mechanical equipment
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1920&q=80", // HVAC systems
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
            <Image src={img} alt="Mechanical Services" fill className="object-cover" priority />
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
                Mechanical Excellence
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter"
            >
              MECHANICAL <br />
              <span className="gradient-text">SERVICES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-champagne/80 font-light italic max-w-3xl"
            >
              &quot;Guthrie Engineering has a remarkable track record in offering mechanical
              services in the built environment.&quot;
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
          subtitle="Creating New Realities"
          className="!mb-12"
        />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Our commitment to excellence has enabled us to complete complex projects that require
            deep expertise, sophisticated coordination and interdisciplinary insights. Our team of
            professionals work tirelessly to exceed the expectations of our clients.
          </p>
        </div>
      </Section>

      {/* 3D Floating Cards - Services */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <SectionHeader
          badge="Our Expertise"
          title="Comprehensive [Solutions]"
          subtitle="We are respected in the industry as a leading service provider for M&E building services"
          className="mb-20"
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "ACMV Systems",
              desc: "Air Conditioning and Mechanical Ventilation solutions for optimal climate control and energy efficiency",
              image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
            },
            {
              title: "Fire Protection",
              desc: "Comprehensive fire safety systems including sprinklers, alarms, and suppression systems",
              image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
            },
            {
              title: "Building Automation",
              desc: "Intelligent BAS solutions integrating HVAC, lighting, and security systems seamlessly",
              image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
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
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[
                "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
                "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
                "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80",
                "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative w-96 h-64 rounded-2xl overflow-hidden shrink-0 group"
                >
                  <Image
                    src={img}
                    alt={`Mechanical Project ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-sm uppercase tracking-wider">
                      {
                        [
                          "HVAC Installation",
                          "Piping Systems",
                          "Cooling Towers",
                          "Smart Controls",
                          "Ventilation",
                        ][i]
                      }
                    </p>
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
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
                "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative w-96 h-64 rounded-2xl overflow-hidden shrink-0 group"
                >
                  <Image
                    src={img}
                    alt={`Mechanical Project ${i + 6}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-sm uppercase tracking-wider">
                      {
                        [
                          "Fire Safety",
                          "BAS Integration",
                          "Mechanical Room",
                          "Building Systems",
                          "Energy Efficiency",
                        ][i]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Expertise Section - NEW */}
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
                Industry Leader
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Integrated <span className="gradient-text">M&E Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              The company offers Air Conditioning and Mechanical Ventilation (ACMV), Fire Protection
              (FP) and Building Automation System (BAS) solutions under one roof.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              We are able to undertake complex projects that integrate multiple services in one
              package, ensuring seamless coordination and optimal performance.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Complex Projects", value: "200+" },
                { label: "Years Experience", value: "70+" },
                { label: "Client Satisfaction", value: "99%" },
                { label: "Team Members", value: "150+" },
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
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
              alt="Mechanical Engineering"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Capabilities Section - NEW */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <SectionHeader
          badge="Our Capabilities"
          title="Technical [Expertise]"
          subtitle="Comprehensive mechanical engineering services"
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "District Cooling Systems",
              desc: "Large-scale centralized cooling solutions for commercial and industrial complexes with energy-efficient operations.",
            },
            {
              title: "Chiller Plant Design",
              desc: "Custom-engineered chiller systems optimized for capacity, efficiency, and reliability in demanding environments.",
            },
            {
              title: "Ventilation Engineering",
              desc: "Advanced air distribution systems ensuring optimal indoor air quality and compliance with health standards.",
            },
            {
              title: "Energy Optimization",
              desc: "Retrofit and upgrade services to reduce energy consumption and operational costs while maintaining performance.",
            },
            {
              title: "Smoke Control Systems",
              desc: "Life safety systems designed to manage smoke movement during fire emergencies in high-rise buildings.",
            },
            {
              title: "Preventive Maintenance",
              desc: "Comprehensive maintenance programs ensuring system longevity, reliability, and peak performance year-round.",
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
            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1920&q=80"
            alt="Engineering"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Integrated <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-2xl text-champagne font-light leading-relaxed">
            We are able to undertake complex projects that integrate multiple services in one
            package.
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
              Ready to Build <br />
              <span className="gradient-text">Excellence?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Let&apos;s discuss your mechanical engineering needs
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
