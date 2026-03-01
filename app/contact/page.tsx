"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, CONTACT_CATEGORIES } from "@/constants/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will get back to you shortly.");
  };

  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-950 pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[0.85]"
          >
            CONTACT <br />
            <span className="gradient-text">US.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light text-center"
          >
            Have a project in mind? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      <Section className="bg-navy-900 pt-24 sm:pt-32 pb-40 sm:pb-52">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid md:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
                  Headquarters
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city} {SITE_CONFIG.address.postal}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
                  Email
                </h3>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-primary-500 font-bold hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
                  Phone
                </h3>
                <p className="text-primary-500 font-bold">{SITE_CONFIG.phone}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
                  Fax
                </h3>
                <p className="text-gray-400 font-light">{SITE_CONFIG.fax}</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="glass border border-white/5 rounded-2xl p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="+65"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy-900">
                        Select category
                      </option>
                      {CONTACT_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat} className="bg-navy-900">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-primary-500 focus:outline-none transition-colors min-h-[150px] resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <Button className="w-full">Send Inquiry</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>
    </main>
  );
}
