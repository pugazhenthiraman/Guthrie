"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
          >
            PRIVACY <span className="text-primary-500">POLICY.</span>
          </motion.h1>
        </div>
      </section>

      <Section className="bg-navy-900">
        <div className="container mx-auto px-6 max-w-4xl prose prose-invert prose-gray">
          <div className="space-y-8 text-gray-400 font-light leading-relaxed">
            <div>
              <h2 className="text-xl font-black text-white mb-3">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as your name, email address,
                phone number, and any messages you send through our contact form.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-white mb-3">How We Use Your Information</h2>
              <p>
                We use the information we collect to respond to your inquiries, provide our
                engineering services, and communicate with you about our projects and capabilities.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-white mb-3">Data Protection</h2>
              <p>
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-black text-white mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:guthrie@guthrie.com.sg"
                  className="text-primary-500 hover:underline"
                >
                  guthrie@guthrie.com.sg
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
