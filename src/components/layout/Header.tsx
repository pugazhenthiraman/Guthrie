"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/ui/Magnetic";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/constants/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setIsScrolled(latest > 100));
  }, [scrollY]);

  const headerBg = useTransform(
    scrollY,
    [0, 200],
    ["rgba(5, 10, 25, 0.3)", "rgba(2, 4, 18, 1)"] // Deeper, more solid transition
  );

  const headerBlur = useTransform(scrollY, [0, 200], ["blur(4px)", "blur(20px)"]);

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? "py-12 shadow-premium border-champagne/10" : "py-32 border-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between max-w-[1920px]">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Magnetic strength={0.25}>
            <Logo />
          </Magnetic>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="relative group"
            >
              <Link
                href={link.href}
                className={`px-4 py-4 text-sm lg:text-base font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 flex items-center gap-3 ${
                  pathname === (link.href as string) ||
                  (link.href !== ("/home" as string) && pathname.startsWith(link.href))
                    ? "text-primary-400 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                    : "text-champagne hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                }`}
              >
                {link.label}
                {"submenu" in link && (
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {"submenu" in link && (link.submenu as { href: string; label: string }[]) && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[100]">
                  <div className="bg-[#01040f] border-2 border-white/10 p-6 rounded-[2rem] min-w-[480px] shadow-premium relative before:absolute before:-top-10 before:left-0 before:w-full before:h-10 before:bg-transparent overflow-hidden">
                    {/* Premium Gold/Orange Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600" />

                    <div className="flex flex-col gap-2">
                      {(link.submenu as { href: string; label: string }[]).map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="group/sub flex items-center justify-between px-7 py-6 rounded-2xl text-lg font-black uppercase tracking-wider text-champagne hover:text-white hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10"
                        >
                          <div className="flex items-center gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-50 group-hover/sub:scale-150 group-hover/sub:opacity-100 transition-all duration-300" />
                            <span>{sub.label}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] opacity-0 group-hover/sub:opacity-100 transition-all duration-300 tracking-widest text-primary-400">
                              VIEW ALL
                            </span>
                            <svg
                              className="w-5 h-5 opacity-0 -translate-x-3 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300 text-primary-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Magnetic strength={0.15}>
            <Link href="/contact" data-magnetic>
              <button className="px-10 py-4 rounded-full bg-primary-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-primary-600 transition-all duration-300 shadow-glow">
                Inquiry
              </button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 rounded-xl glass flex items-center justify-center border border-white/10"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`w-5 h-0.5 bg-champagne rounded-full transition-transform duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-3 h-0.5 bg-primary-500 rounded-full transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-champagne rounded-full transition-transform duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden fixed inset-0 bg-[#020617]/98 backdrop-blur-2xl z-40 transition-all duration-500 ${isScrolled ? "top-[160px]" : "top-[280px]"}`}
          >
            <ul className="container mx-auto px-6 py-10 flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-black text-champagne uppercase tracking-tighter hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <div className="pt-8 w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-5 rounded-2xl bg-primary-500 text-white font-black uppercase tracking-widest shadow-glow">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
