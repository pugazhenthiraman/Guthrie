"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function TermsPage() {
  return (
    <div>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
          >
            TERMS OF <span className="text-primary-500">SERVICE.</span>
          </motion.h1>
        </div>
      </section>

      <Section className="bg-navy-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8 text-gray-400 font-light leading-relaxed">
            <div>
              <h2 className="text-xl font-black text-white mb-3">Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms
                and provisions of this agreement.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-white mb-3">Use of Website</h2>
              <p>
                This website is provided for informational purposes regarding Guthrie
                Engineering&apos;s services and capabilities. The content is subject to change
                without notice.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-white mb-3">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the
                property of Guthrie Engineering and is protected by applicable intellectual property
                laws.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-white mb-3">Limitation of Liability</h2>
              <p>
                Guthrie Engineering shall not be liable for any damages arising from the use of this
                website or reliance on any information provided herein.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
