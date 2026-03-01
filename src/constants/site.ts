export const SITE_CONFIG = {
  name: "Guthrie Engineering",
  tagline: "Enabling Purpose since 1951",
  description: "From Iconic Projects to Key National Infrastructure, Guthrie Engineering Delivers",
  founded: 1951,
  email: "guthrie@guthrie.com.sg",
  phone: "6746 2222",
  fax: "6746 2300",
  address: {
    street: "6 Aljunied Avenue 3 #04-00",
    city: "Singapore",
    postal: "389932",
  },
  social: {
    linkedin: "#",
    facebook: "#",
  },
} as const;

export const SITE_MISSION =
  "We strive to excite you with possibilities delivered by design, with dedication and through collaboration that enables your potential.";

export const SITE_PROMISE =
  "At Guthrie Engineering, we promise to enable your business with our innovations, products and expertise. As a respected brand, we are ready with resources to provide you with dependable and reliable solutions. We promise to overcome all obstacles and challenges with tenacity, commitment and teamwork.";

export const CORE_VALUES = [
  {
    title: "Respected",
    subtitle: "Respected by the people",
    description:
      "Founded and based in Singapore, Guthrie Engineering is poised to bring Singapore's standard of innovation & management beyond Singapore's shores.",
  },
  {
    title: "Ready",
    subtitle: "Ready to serve",
    description:
      "Guthrie Engineering is BCA accredited across various M&E trades and offer valued services spanning supply, management, construction energy optimisation and sustainable solutions.",
  },
  {
    title: "Reliable",
    subtitle: "Always Reliable",
    description:
      "Guthrie Engineering is a team of managers, engineers, domain experts and technicians that deliver best-in-class products and systems. We stand behind our guarantees.",
  },
] as const;

export const COMPANY_VALUES = [
  {
    title: "Respect",
    description: "Dignity, Fairness, Professionalism",
  },
  {
    title: "Satisfaction",
    description: "Responsiveness, Listening, Goes the Extra Mile",
  },
  {
    title: "Trust",
    description: "Openness, Honesty, Responsibility",
  },
  {
    title: "Teamwork",
    description: "Cooperation, Ready to Share, Solving Problems Together",
  },
] as const;

export const SERVICES = [
  {
    id: "technology-solutions",
    title: "Technology Solutions",
    tagline: "Innovating Today for Tomorrow",
    description:
      "As adopters, designers and integrators of innovative technologies we are able to offer customised, cost-effective and holistic solutions for our clients. We help them to transform the experiences of their end-users.",
    icon: "🚀",
    href: "/services/technology-solutions",
    features: [
      "Customized IoT Solutions",
      "Digital Transformation",
      "Smart Building Integration",
      "Tech Advisory",
    ],
  },
  {
    id: "mechanical-services",
    title: "Mechanical Services",
    tagline: "Creating New Realities",
    description:
      "We bring physiological comfort, safety and efficiency to buildings. We cool, heat, protect and optimize. We are a team with expertise and extensive experiences in ACMV, BMS, FP, DCS, subway ECS and energy optimisation.",
    icon: "⚙️",
    href: "/services/mechanical-services",
    features: [
      "ACMV Systems",
      "Building Management (BMS)",
      "District Cooling",
      "Energy Optimization",
    ],
  },
  {
    id: "electrical-services",
    title: "Electrical Services",
    tagline: "Powering & Lighting the Way",
    description:
      "We breathe life into the buildings and infrastructures. We power up the systems and we light the way. We are a team with expertise and extensive experiences in HT substations, LT distribution, airfield lighting, illuminated signages, street lighting and energy harvesting.",
    icon: "⚡",
    href: "/services/electrical-services",
    features: [
      "HT/LT Distribution",
      "Airfield Lighting",
      "Street Lighting",
      "Switchgear Solutions",
    ],
  },
  {
    id: "switchboard-manufacturing",
    title: "Switchboard Manufacturing",
    tagline: "We Deliver Satisfaction",
    description:
      "We make the building liveable, clean, green, productive and conducive for occupation. We extend the longevity and value of the buildings.",
    icon: "🏭",
    href: "/services/switchboard-manufacturing",
    features: [
      "Type-Tested Switchboards",
      "Control Panels",
      "Custom Enclosures",
      "Rapid Prototyping",
    ],
  },
  {
    id: "sustainable-power",
    title: "Sustainable Power Solutions",
    tagline: "Delivering Where It Matters",
    description:
      "We are authorised suppliers for select building products that are noted for their reliability, durability, maintainability and sustainability. Our supply partners are notable brands with excellent reputations for quality and workmanship.",
    icon: "🌱",
    href: "/services/sustainable-power",
    features: [
      "Solar Integration",
      "Energy Storage",
      "EV Charging Infrastructure",
      "Sustainable Audits",
    ],
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    id: "marina-bay-sands",
    title: "Marina Bay Sands",
    service: "Fire Protection Services",
    year: 2010,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    description:
      "Comprehensive fire protection systems for Singapore's most iconic integrated resort.",
  },
  {
    id: "thomson-east-coast-mrt",
    title: "Thomson-East Coast MRT Line",
    service: "Electrical Services",
    year: 2017,
    image: "https://images.unsplash.com/photo-1473163922596-3bc3a304e266?w=800&q=80",
    description:
      "Power distribution and lighting for multiple underground stations across the TEL network.",
  },
  {
    id: "jewel-changi",
    title: "Jewel Changi Airport",
    service: "ACMV & Acoustical",
    year: 2019,
    image: "https://images.unsplash.com/photo-1542296105-3c137021640c?w=800&q=80",
    description:
      "Specialized ventilation and acoustic engineering for the world's best airport mall.",
  },
  {
    id: "funan-mall",
    title: "Funan CapitaLand Mall",
    service: "Mechanical Services",
    year: 2019,
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80",
    description:
      "State-of-the-art air conditioning and mechanical systems for a tech-heavy retail space.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    submenu: SERVICES.map((s) => ({ label: s.title, href: s.href })),
  },
  { label: "Our Partners", href: "/partners" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const CONTACT_CATEGORIES = [
  "General",
  "Technology Solutions",
  "Mechanical Services",
  "Electrical Services",
  "Building & Sustainable Products",
  "Facility Management Services",
  "Switchboard Manufacturing",
] as const;
