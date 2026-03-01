"use client";

import { use } from "react";
import { SERVICES } from "@/constants/site";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy-950 pt-32">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                <span className="text-xs text-primary-400 font-bold uppercase tracking-widest">
                  Our Expertise
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
                {service.title.split(" ")[0]} <br />
                <span className="gradient-text">{service.title.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                {service.description}
              </p>
              <Link href="/contact">
                <Button className="!px-12 !py-5">Discuss Your Project</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-premium glass-dark p-12 flex items-center justify-center text-[10rem]">
                <div className="opacity-20 absolute inset-0 flex items-center justify-center">
                  <ServiceIcon
                    id={service.id}
                    className="w-[400px] h-[400px] text-primary-500/30"
                  />
                </div>
                <div className="relative animate-pulse text-primary-500">
                  <ServiceIcon id={service.id} className="w-64 h-64" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Details */}
      <Section>
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
            WHY <span className="gradient-text">GUTHRIE?</span>
          </h2>
          <p className="text-gray-400 font-light tracking-widest uppercase text-xs">
            The Gold Standard in Engineering
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {service.features.map((feature: string, i: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 flex items-start gap-6 group hover:border-primary-500/30 transition-all">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Delivering precision and reliability through decades of specialized experience
                    in {service.title.toLowerCase()}.
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Back Link */}
      <div className="container mx-auto px-6 mb-24">
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
