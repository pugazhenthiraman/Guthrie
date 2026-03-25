"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG, CONTACT_CATEGORIES } from "@/constants/site";
import { Mail, Phone, MapPin, Clock, Send, Building2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", category: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <div className="bg-navy-950">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-40 mt-8">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" />

        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary-500/20 bg-primary-500/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em]">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase"
          >
            Let&apos;s Build
            <br />
            <span className="gradient-text">Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Partner with Singapore&apos;s most trusted M&E engineering firm. Our team is ready to
            bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="tel:+6562822211"
              className="flex items-center gap-3 px-8 py-4 bg-primary-500 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-primary-600 transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:info@guthrie.com.sg"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-40 px-6 sm:px-10 lg:px-16 border-t border-white/5 relative z-10 bg-[#020412] overflow-hidden">
        {/* Animated Soft Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-500/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-500/5 rounded-full blur-[120px]"
          />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em] mb-4 block"
            >
              Contact Information
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight"
            >
              Reach <span className="gradient-text">Us</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                label: "Visit Our Office",
                value: "6 Aljunied Avenue 3",
                sub: "#04-00, Singapore 389932",
                link: "https://www.google.com/maps/search/?api=1&query=6+Aljunied+Avenue+3+04-00+Singapore+389932",
              },
              {
                icon: Mail,
                label: "Email Address",
                value: SITE_CONFIG.email,
                sub: "Response within 24 hours",
                link: `mailto:${SITE_CONFIG.email}`,
              },
              {
                icon: Phone,
                label: "Phone Number",
                value: SITE_CONFIG.phone,
                sub: "Mon - Fri, 9AM - 6PM",
                link: `tel:+65${SITE_CONFIG.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Clock,
                label: "Business Hours",
                value: "Monday - Friday",
                sub: "9:00 AM - 6:00 PM SGT",
                link: null,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.icon === Building2 ? "_blank" : undefined}
                    rel={item.icon === Building2 ? "noopener noreferrer" : undefined}
                    className="relative block bg-white/[0.01] border border-white/10 backdrop-blur-2xl rounded-3xl p-10 hover:border-primary-500/40 hover:bg-white/[0.05] transition-all duration-700 h-full group overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <item.icon className="w-10 h-10 text-primary-500 mb-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-700" />
                    <div className="text-[10px] font-black text-primary-400/50 uppercase tracking-[0.5em] mb-4 group-hover:text-primary-400 transition-colors duration-500">
                      {item.label}
                    </div>
                    <div className="text-white text-2xl font-bold mb-3 tracking-tighter group-hover:text-white transition-colors duration-500 leading-tight">
                      {item.value}
                    </div>
                    <div className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                      {item.sub}
                    </div>

                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-700 rounded-tl-[40px]" />
                  </a>
                ) : (
                  <div className="relative block bg-white/[0.01] border border-white/10 backdrop-blur-2xl rounded-3xl p-10 hover:border-primary-500/20 hover:bg-white/[0.03] transition-all duration-700 h-full group overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                    <item.icon className="w-10 h-10 text-primary-500 mb-10 group-hover:scale-110 transition-all duration-700" />
                    <div className="text-[10px] font-black text-primary-400/50 uppercase tracking-[0.5em] mb-4">
                      {item.label}
                    </div>
                    <div className="text-white text-2xl font-bold mb-3 tracking-tighter leading-tight">
                      {item.value}
                    </div>
                    <div className="text-gray-500 text-sm leading-relaxed font-light">
                      {item.sub}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout - Form & Map */}
      <section className="py-40 px-6 sm:px-10 lg:px-16 bg-[#020412]/50 relative overflow-hidden">
        {/* Radar Effect Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-16">
                <span className="text-xs font-bold text-primary-500 uppercase tracking-[0.4em] mb-4 block">
                  Send A Message
                </span>
                <h2 className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                  Project <span className="gradient-text">Inquiry</span>
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                  Have an architectural vision? Our experts are ready to bring it to life.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 mb-8">We&apos;ll respond within 24 hours.</p>
                  <button
                    onClick={resetForm}
                    className="px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group relative pt-6">
                    <label
                      htmlFor="name"
                      className="absolute top-0 left-0 text-[10px] font-black text-primary-400/40 uppercase tracking-[0.3em] group-focus-within:text-primary-500 transition-colors"
                    >
                      01. Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary-500 py-4 text-white placeholder-gray-600 focus:outline-none transition-all font-medium text-lg"
                      placeholder="e.g. John Doe"
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div className="group relative pt-6">
                    <label
                      htmlFor="email"
                      className="absolute top-0 left-0 text-[10px] font-black text-primary-400/40 uppercase tracking-[0.3em] group-focus-within:text-primary-500 transition-colors"
                    >
                      02. Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary-500 py-4 text-white placeholder-gray-600 focus:outline-none transition-all font-medium text-lg"
                      placeholder="e.g. john@company.com"
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div className="group relative pt-6">
                    <label
                      htmlFor="phone"
                      className="absolute top-0 left-0 text-[10px] font-black text-primary-400/40 uppercase tracking-[0.3em] group-focus-within:text-primary-500 transition-colors"
                    >
                      03. Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary-500 py-4 text-white placeholder-gray-600 focus:outline-none transition-all font-medium text-lg"
                      placeholder="e.g. +65 9123 4567"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div className="group relative pt-6">
                    <label
                      htmlFor="category"
                      className="absolute top-0 left-0 text-[10px] font-black text-primary-400/40 uppercase tracking-[0.3em] group-focus-within:text-primary-500 transition-colors"
                    >
                      04. Service Interest
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-transparent border-b border-white/10 focus:border-primary-500 py-4 text-white appearance-none cursor-pointer focus:outline-none transition-all font-medium text-lg pr-10"
                        required
                        disabled={status === "submitting"}
                      >
                        <option value="" className="bg-navy-950">
                          Select a service
                        </option>
                        {CONTACT_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat} className="bg-navy-950 text-white">
                            {cat}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary-500/50 group-hover:text-primary-500 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group relative pt-6">
                    <label
                      htmlFor="message"
                      className="absolute top-0 left-0 text-[10px] font-black text-primary-400/40 uppercase tracking-[0.3em] group-focus-within:text-primary-500 transition-colors"
                    >
                      05. Project Details
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 focus:border-primary-500 py-4 text-white placeholder-gray-600 focus:outline-none min-h-[140px] resize-none transition-all font-medium text-lg"
                      placeholder="Tell us about your project vision..."
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                      <p className="text-red-400 text-sm">⚠️ {errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full group relative py-6 bg-primary-500 text-white font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 overflow-hidden hover:bg-primary-600 shadow-[0_20px_40px_rgba(249,115,22,0.2)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.4)]"
                  >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
                    <div className="relative flex items-center justify-center gap-4">
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                          Send Message
                        </>
                      )}
                    </div>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <div className="mb-12">
                <span className="text-xs font-bold text-primary-500 uppercase tracking-[0.4em] mb-4 block">
                  Find Us
                </span>
                <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                  Our <span className="gradient-text">Location</span>
                </h2>
                <div className="space-y-4 max-w-sm">
                  <div className="flex items-start gap-4 p-6 bg-white/[0.04] rounded-2xl border border-white/5 backdrop-blur-xl shadow-xl">
                    <MapPin className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-white font-bold text-lg leading-tight uppercase tracking-tight">
                        6 Aljunied Ave 3 #04-00
                      </p>
                      <p className="text-gray-400 font-light">Singapore 389932</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=6+Aljunied+Avenue+3+04-00+Singapore+389932"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden group hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7628!2d103.8889!3d1.3244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTknMjcuOCJOIDEwM8KwNTMnMjAuMCJF!5e0!3m2!1sen!2ssg!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-primary-500/5 mix-blend-overlay group-hover:bg-transparent transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                </div>

                <div className="mt-8 p-8 bg-white/[0.04] border border-white/10 rounded-3xl backdrop-blur-xl group hover:border-primary-500/30 transition-all duration-500 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-black text-lg uppercase tracking-tight block mb-1">
                        Get Directions
                      </span>
                      <span className="text-gray-400 font-light text-sm uppercase tracking-widest">
                        Open in Google Maps
                      </span>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20 sm:h-32" />
    </div>
  );
}
