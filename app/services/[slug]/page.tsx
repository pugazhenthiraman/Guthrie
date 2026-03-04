"use client";

import { use } from "react";
import { SERVICES } from "@/constants/site";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-navy-950">
      {/* Hero Banner */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-navy-950 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt={service.title}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="w-full max-w-[1400px] !mx-auto px-6 sm:px-10 lg:px-16 relative z-20">
          <div className="flex flex-col items-center !text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-6 border border-white/10"
            >
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-xs text-primary-400 font-bold uppercase tracking-[0.3em]">
                Our Expertise
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter !text-center w-full"
            >
              {service.title.split(" ")[0]} <br />
              <span className="gradient-text">{service.title.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-champagne/80 font-light italic max-w-3xl !mx-auto !text-center"
            >
              &quot;{service.tagline}&quot;
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Name + Tagline */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <SectionHeader
          title="Guthrie [Engineering]"
          subtitle="Innovating Today for Tomorrow"
          className="!mb-0"
        />
      </Section>

      {/* Main Content with Side Image */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              {service.description}
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              By focusing and tailoring our solutions for the end user, we can innovatively address
              their needs. This approach creates a layer of value that is difficult to substitute.
              With Guthrie Engineering, the impossible becomes possible.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-premium"
          >
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Technology Innovation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <div className="max-w-4xl !mx-auto !text-center space-y-12 w-full flex flex-col items-center">
          <p className="text-2xl md:text-4xl lg:text-5xl text-champagne font-light italic leading-relaxed !text-center">
            &quot;When it comes to transforming lives, there are many exciting possibilities. The
            sky is not the limit.&quot;
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-2xl !mx-auto !text-center">
            Our team of experienced engineers are complimented by younger engineers who bring with
            them fresh perspectives while still sharing Guthrie Engineering&apos;s passion for
            innovation & technology.
          </p>
        </div>
      </Section>

      {/* Technology Showcase - NEW */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <SectionHeader
          badge="Innovation in Action"
          title="Transforming [Industries]"
          subtitle="Real-world applications of our technology solutions"
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {[
            {
              title: "Smart Building Integration",
              desc: "IoT-enabled systems that optimize energy consumption, security, and occupant comfort in real-time.",
              image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
              badge: "IoT",
            },
            {
              title: "Industrial Automation",
              desc: "Advanced robotics and AI-driven processes that increase efficiency and reduce operational costs.",
              image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
              badge: "AI/ML",
            },
            {
              title: "Data Analytics Platform",
              desc: "Big data solutions that provide actionable insights for strategic decision-making.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              badge: "Big Data",
            },
            {
              title: "Cloud Infrastructure",
              desc: "Scalable cloud solutions ensuring 99.9% uptime and seamless digital transformation.",
              image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
              badge: "Cloud",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden h-full hover:border-primary-500/30 transition-all !p-0">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-primary-500">
                    <span className="text-white font-black text-xs uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-10 bg-navy-900 flex flex-col items-center text-center">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-5 !text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light text-base !text-center">
                    {item.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section - NEW */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-premium order-2 lg:order-1 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
              alt="Our Process"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-white font-bold text-xs uppercase tracking-wider">
                  Trusted Process
                </span>
              </div>
              <h3 className="text-3xl font-black text-white">
                Engineering <span className="text-primary-400">Excellence</span>
              </h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 order-1 lg:order-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-xs text-primary-400 font-bold uppercase tracking-[0.3em]">
                  Our Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Proven <span className="gradient-text">Methodology</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                A systematic approach refined over 70+ years of engineering excellence
              </p>
            </div>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  desc: "Deep dive into your business needs and technical requirements",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  desc: "Custom architecture tailored to your specific challenges",
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Agile deployment with continuous testing and optimization",
                },
                {
                  step: "04",
                  title: "Support & Evolution",
                  desc: "Ongoing maintenance and scalability enhancements",
                },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-black text-lg shrink-0 shadow-glow group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 font-light text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section - NEW */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 font-black uppercase tracking-[0.5em] text-sm mb-6 block"
          >
            By the Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Proven <span className="gradient-text">Track Record</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { number: "70+", label: "Years Experience" },
            { number: "500+", label: "Projects Delivered" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <Card className="p-8 lg:p-10 hover:border-primary-500/30 transition-all h-full">
                <div className="text-5xl md:text-6xl font-black gradient-text mb-4 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Three Key Pillars */}
      <Section className="bg-navy-950 !py-24 sm:!py-32">
        <SectionHeader badge="Supported by" title="Three Key [Pillars]" className="mb-20" />

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {[
            {
              title: "Stability",
              desc: "Reliable, robust solutions built on proven engineering principles and decades of expertise.",
            },
            {
              title: "Possibility",
              desc: "Innovative approaches that transform challenges into opportunities for breakthrough solutions.",
            },
            {
              title: "Speed",
              desc: "Agile execution and rapid deployment without compromising quality or precision.",
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="p-10 lg:p-12 text-center h-full hover:border-primary-500/30 transition-all group">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-black text-3xl group-hover:scale-110 transition-transform shadow-glow">
                  {i + 1}
                </div>
                <h3 className="text-xl font-black text-white mb-5 uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">{pillar.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Description Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8 w-full block"
        >
          <p className="text-lg text-gray-400 leading-relaxed font-light text-center w-full">
            Our innovations go beyond the label of simply being &quot;smart&quot;. Instead, they are
            supported by three key pillars and directed towards creating a positive experience to
            the end user. The three pillars are Stability, Possibility and Speed.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed font-light text-center w-full">
            This approach in developing innovations has produced concepts that covers analytics,
            diagnostics and prognostics. We collaborate with technology partners, co-existing in the
            R&D space to co-develop{" "}
            <span className="text-primary-400 font-medium">
              automation, mechanisation, artificial intelligence, big data application, and IOT
            </span>
            .
          </p>
        </motion.div>
      </Section>

      {/* Capabilities Grid */}
      <Section className="bg-navy-900 !py-24 sm:!py-32">
        <SectionHeader
          badge="Capabilities"
          title="Our [Capabilities]"
          subtitle="Comprehensive Solutions Tailored to Your Needs"
          className="mb-20"
        />

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {service.features.map((feature: string, i: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 lg:p-12 flex items-start gap-8 group hover:border-primary-500/30 transition-all h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-black text-xl shrink-0 group-hover:scale-110 transition-transform shadow-glow">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{feature}</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-sm">
                    Delivering precision and reliability through decades of specialized experience.
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-950 !py-12">
        <div className="glass border border-white/5 rounded-3xl py-16 px-10 md:py-20 md:px-16 lg:py-24 lg:px-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              Ready to Transform <br />
              <span className="gradient-text">Your Vision?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Let&apos;s discuss how our {service.title.toLowerCase()} can elevate your project.
            </p>
            <Link href="/contact">
              <Button className="!px-12 !py-5 !text-base">Start Your Project</Button>
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
    </main>
  );
}
