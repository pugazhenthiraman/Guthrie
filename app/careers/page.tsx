"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, MapPin, Mail, Briefcase, Clock } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Quantity Surveyor",
    department: "Commercial",
    type: "Full-Time",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    responsibilities: [
      "Keep track of all tender documents, drawings and corrigendum based on document control process",
      "Verify tender drawings/details and prepare tender enquiry",
      "Assist in quotations, selection of qualified subcontractors/vendors and distribution of relevant tender documents",
      "Perform quantity take-off for tender projects based on timeline",
      "Assist with tender evaluation and preparation of tender documents for submission",
      "Ensure all documentary evidences and contemporary records are documented, filed and complied for substantiation purposes",
      "Able to read M&E drawings",
      "Site verifications of variations and taking records for submissions of claims",
      "Assist project manager/designated staff to evaluate and certify completed work",
      "Assist in verifying sub-contractor's claims",
      "Prepare and assist in monitoring the progress of claims submission and payment",
      "Monitor and report on balance amount",
    ],
    requirements: [
      "Candidate must possess at least a Diploma/Advanced/Higher/Graduate Diploma in Quantity Survey or Mechanical/Electrical Engineering or equivalent",
      "Knowledge & experience in M&E system requirements",
      "Able to work under pressure and meet tight deadline",
      "Able to work independently with minimum supervision",
      "Good knowledge and skill set in Microsoft Office",
      "Fast learner and willingness to explore new skill sets/technologies",
    ],
  },
  {
    id: 2,
    title: "BIM Modeller",
    department: "Technology",
    type: "Full-Time",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    responsibilities: [
      "Prepare, revise and update Electrical SLD/3D drawings",
      "Ensure drawings are produced according to specifications",
      "Able to read and interpret electrical information from the drawing",
      "Check for clashes, ensure drawing is up to date",
      "Assist BIM Manager on design and drafting matters",
    ],
    requirements: [
      "Must be proficient in BIM Revit, AECOsim and AutoCAD software",
      "Possess Diploma in Electrical Engineering",
      "Minimum 3 years of drafting experience in construction industry",
      "Candidate with MRT project experience is preferred",
    ],
  },
  {
    id: 3,
    title: "Site/Project Engineer (Electrical)",
    department: "Engineering",
    type: "Full-Time",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    responsibilities: [
      "Capable of reading electrical and ELV drawing schematic diagram drawing",
      "Coordinate and liaise with sub-contractor on project related matters to ensure smooth execution of site work",
      "Able to review and understand contract specification, prepare and submit variation order as according to the requirement",
      "Able to perform engineering design, load and fault calculation",
      "Able to resolve technical issues related to installation, commissioning and testing",
      "Ensure the installation works are done according to the approved shop drawing, method statement, project specifications and relevant standards",
      "Attend regular site meetings with Clients/Sub-contractors to discuss and resolve the site matters",
      "Assist Project/Site/Construction Manager on handling and monitoring the project progress",
    ],
    requirements: [
      "ITE/Diploma/Degree or equivalent in Electrical Engineering",
      "Experience in project management handling for industrial or commercial purpose",
      "Fresh Graduate are welcome",
      "Good communication and interaction skill",
      "A team player and possess problem-solving, coordination and management skills",
    ],
  },
  {
    id: 4,
    title: "Project Engineer (ACMV)",
    department: "Engineering",
    type: "Full-Time",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    responsibilities: [
      "Assist Project Manager to oversee overall project progress, manpower and monitor project schedule",
      "Preparation of engineering detail design development for the project where applicable",
      "Able to carry out testing & commissioning and basic troubleshooting of the system",
      "Ensure project complete within the time frame",
      "Day to day site co-ordinations with main contractors and sub-contractors",
      "Prepare, plan and request site inspection with main contractor or RTO",
      "Ensure the allocation of resources as planned and submit daily work progress and manpower forecast report",
      "Monitor and request for equipment and material delivery",
      "Ensure equipment, material and site work compliance to specifications",
      "Preparation, submission and obtain approval of MOS, RA, SWP, shop drawings, material, equipment, RFA, RFI etc",
      "Attend technical meeting, daily site progress meeting and safety meetings",
      "Preparation of OMM manual, As-Built drawings, training and DLP program",
      "Knowledge of ACMV/HVAC air-conditioning",
      "Knowledge and adherence of WSH, ESH standard",
    ],
    requirements: [
      "ITE/Diploma/Degree or equivalent in Mechanical Engineering",
      "Experience in project management handling ACMV projects for industrial or commercial purpose. Fresh Graduate are welcome",
      "Good communication and interaction skill",
      "A team player and possess problem-solving, coordination and management skills",
    ],
  },
];

const benefits = [
  { icon: "💰", title: "Competitive Salary", desc: "Industry-leading compensation packages" },
  { icon: "🏥", title: "Health Benefits", desc: "Comprehensive medical and dental coverage" },
  { icon: "📚", title: "Training & Development", desc: "Continuous learning and certifications" },
  { icon: "🏖️", title: "Work-Life Balance", desc: "Flexible arrangements and generous leave" },
  { icon: "🎯", title: "Career Growth", desc: "Clear progression paths and mentorship" },
  { icon: "🤝", title: "Team Culture", desc: "Collaborative and supportive environment" },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);

  return (
    <div className="bg-navy-950">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Careers"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/90 to-navy-950" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em]">
              Join Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase"
          >
            Build Your
            <br />
            <span className="gradient-text">Career.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Join one of Singapore&apos;s most established engineering firms. Work on iconic projects
            that shape the nation&apos;s infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex items-center gap-3 text-gray-400">
              <Briefcase className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-medium">{jobs.length} Open Positions</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-primary-500" />
              <span className="text-sm font-medium">Singapore</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em] mb-4 block"
            >
              Why Guthrie
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight"
            >
              Benefits & <span className="gradient-text">Perks</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-primary-500/30 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-primary-400 uppercase tracking-[0.3em] mb-4 block"
            >
              Current Openings
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight"
            >
              Available <span className="gradient-text">Positions</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedJob(job)}
                className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />

                  {/* Department Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {job.department}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-primary-400 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-medium">{job.type}</span>
                    </div>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-medium">{job.location}</span>
                    </div>
                  </div>

                  <button className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy-950 border border-white/10 rounded-3xl max-w-4xl w-full my-8 overflow-hidden"
            >
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={selectedJob.image}
                  alt={selectedJob.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Department Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-primary-500 rounded-full">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                    {selectedJob.department}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12 max-h-[60vh] overflow-y-auto">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                  {selectedJob.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <span className="text-sm font-medium">{selectedJob.type}</span>
                  </div>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span className="text-sm font-medium">{selectedJob.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                    Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <div className="pt-8 border-t border-white/10">
                  <a
                    href="mailto:careers@guthrie.com.sg"
                    className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-primary-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-600 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)]"
                  >
                    <Mail className="w-5 h-5" />
                    Apply Now - careers@guthrie.com.sg
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Spacing */}
      <div className="h-20 sm:h-32" />
    </div>
  );
}
