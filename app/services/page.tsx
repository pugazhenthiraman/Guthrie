"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/constants/site";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-28 sm:pt-32 px-4 sm:px-6">
      <Section>
        <div className="mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
            OUR <span className="gradient-text">SERVICES</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-2xl">
            Specialized engineering solutions for Singapore&apos;s critical infrastructure and
            iconic landmarks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/services/${service.id}`}>
                <Card className="h-full group hover:shadow-premium transition-all duration-500">
                  <div className="p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors duration-500 text-3xl">
                      <ServiceIcon id={service.id} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-500 font-bold text-sm gap-2 uppercase tracking-widest">
                      Learn More
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-navy-900/50">
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            READY TO <span className="gradient-text">ELEVATE</span> YOUR PROJECT?
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-light italic">
            &quot;Engineering excellence is not just about tools; it&apos;s about a commitment to
            reliability.&quot;
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact">
              <Button className="!px-12 !py-5">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
