"use client";

import Link from "next/link";
import { SERVICES, SITE_CONFIG, NAV_LINKS } from "@/constants/site";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 sm:px-8 max-w-[1500px] relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 mb-20 sm:mb-32">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-8 sm:mb-10">
              <Logo />
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base max-w-xs">
              Singapore&apos;s trusted partner in M&E engineering since 1951. Delivering excellence
              through innovation and reliability.
            </p>
            <div className="flex gap-4 sm:gap-5">
              {[
                { label: "FB", href: "https://facebook.com" },
                { label: "LN", href: "https://linkedin.com" },
                { label: "TW", href: "https://twitter.com" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#f97316", borderColor: "rgba(249,115,22,0.4)" }}
                  className="w-11 h-11 rounded-full glass border border-white/5 flex items-center justify-center text-[10px] font-bold text-gray-400 transition-all duration-300"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.25em] mb-8 sm:mb-10">
              Navigation
            </h4>
            <ul className="space-y-4 sm:space-y-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm font-medium tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.25em] mb-8 sm:mb-10">
              Solutions
            </h4>
            <ul className="space-y-4 sm:space-y-5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm font-medium line-clamp-1 tracking-wide"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.25em] mb-10 sm:mb-12 text-primary-500">
              Headquarters
            </h4>
            <div className="not-italic space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city} {SITE_CONFIG.address.postal}
                </p>
              </div>
              <div className="space-y-4 pt-2 border-t border-white/5">
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 group">
                  <span className="text-lg">✉️</span>
                  <span className="text-sm font-bold text-white group-hover:text-primary-500 transition-colors">
                    {SITE_CONFIG.email}
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="text-lg">📞</span>
                  <p className="text-primary-500 text-base font-black tracking-tighter">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs text-gray-500 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <Link
              href="/privacy"
              className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
