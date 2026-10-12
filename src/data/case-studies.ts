export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  domain: string;
  website: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  accentColor: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "ucarehq",
    slug: "ucarehq-healthcare-platform",
    client: "UCareHQ",
    domain: "HealthTech & Care Management",
    website: "https://ucarehq.com/",
    headline: "Transforming Care Coordination With An Intuitive Healthcare Management Platform",
    summary: "Opash Software delivered a seamless and HIPAA-compliant care management platform for UCareHQ, combining modern UI/UX design with robust cloud architecture to empower healthcare providers and streamline operational workflows.",
    challenge: "UCareHQ needed to replace fragmented patient data tracking and legacy coordination workflows with a unified, secure cloud portal that compliant medical practitioners could use with zero friction.",
    solution: "Engineered an end-to-end web application with encrypted patient records, role-based practitioner portals, automated appointment scheduling, and real-time medical task boards using Next.js, Node.js, and HIPAA-hardened AWS infrastructure.",
    results: [
      { metric: "65%", label: "Reduction in Administrative Overhead" },
      { metric: "99.99%", label: "Uptime Across Clinics" },
      { metric: "4.9/5", label: "Caregiver Satisfaction Score" },
      { metric: "100%", label: "HIPAA Security Compliance" }
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS HIPAA Cloud", "TailwindCSS"],
    testimonial: {
      quote: "Opash Software delivered a seamless and intuitive platform for UCareHQ, combining modern design with robust functionality to enhance user experience and operational efficiency.",
      author: "Brad Jeffery",
      role: "Founder & Product Lead",
      company: "UCareHQ"
    },
    accentColor: "from-blue-600 to-cyan-500"
  },
  {
    id: "iko-intl",
    slug: "iko-international-enterprise-portal",
    client: "IKO International",
    domain: "Industrial Tech & Supply Chain",
    website: "https://next.ikointl.com/",
    headline: "2-Year Full-Stack Modernization For Global Industrial Engineering Leader",
    summary: "Opash Software partnered with IKO International on a full-time, 2-year dedicated engineering engagement, building and maintaining enterprise frontend portals in Angular and microservices backends.",
    challenge: "IKO required a dedicated full-stack squad capable of integrating with their international engineering team, handling complex mechanical product catalogs, custom CAD downloads, and high-concurrency enterprise quoting systems.",
    solution: "Provided dedicated senior full-stack developers (MEAN stack) who overhauled the customer-facing digital experience, built high-speed search and filtering for thousands of industrial parts, and maintained continuous CI/CD releases.",
    results: [
      { metric: "2 Years", label: "Continuous Dedicated Partnership" },
      { metric: "3x", label: "Search & Catalog Query Speed" },
      { metric: "100%", label: "On-Time Sprint Deliverables" },
      { metric: "0", label: "Production Outages During Migration" }
    ],
    technologies: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "AWS S3", "Docker"],
    testimonial: {
      quote: "We worked with Hiren (Opash Software) for 2 years on a full-time basis as a full stack developer (MEAN) working mostly on the frontend in Angular. They are true professionals — communication was fantastic, and their level of commitment to the project was unmatched. We would love to be working with Opash Software again in the future.",
      author: "Fred Bene",
      role: "Engineering Director",
      company: "IKO International"
    },
    accentColor: "from-indigo-600 to-blue-500"
  },
  {
    id: "esanad",
    slug: "esanad-secure-document-verification",
    client: "eSanad",
    domain: "FinTech & Legal Document Verification",
    website: "https://www.esanad.com/",
    headline: "Building Secure Digital Notarization & Verified Document Pipelines for MENA",
    summary: "We partnered with eSanad to bring their vision to life — developing a high-speed, tamper-proof document verification platform that processes and validates legal certificates in real-time.",
    challenge: "Legal document authentication required airtight cryptographic validation, multi-lingual Arabic/English interfaces, high security against forgery, and instant verification for government and corporate users.",
    solution: "Built a cryptographic verification architecture with QR digital watermarking, encrypted cloud storage, bi-directional verification APIs, and an ultra-clean mobile-first web app.",
    results: [
      { metric: "<1.5s", label: "Instant Document Verification Time" },
      { metric: "250k+", label: "Verified Certificates Processed" },
      { metric: "100%", label: "Audit & Anti-Tamper Accuracy" },
      { metric: "Arabic & Eng", label: "Bilingual Localization" }
    ],
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS Cloud", "Cryptography"],
    testimonial: {
      quote: "We partnered with Opash Software to bring our vision for eSanad.com to life, and they delivered beyond expectations. From secure document verification to a seamless user interface, the platform is fast, intuitive, and scalable.",
      author: "Anas M",
      role: "Co-Founder & CTO",
      company: "eSanad"
    },
    accentColor: "from-emerald-600 to-teal-500"
  },
  {
    id: "taygo",
    slug: "taygo-fintech-mortgage-crm",
    client: "Taygo",
    domain: "FinTech & Mortgage Automation",
    website: "https://www.taygo.com/",
    headline: "Scalable Cloud Architecture & Multi-API Mortgage Automation Engine",
    summary: "Opash Software engineered high-throughput AWS infrastructure and custom API integrations for Taygo, streamlining mortgage lead distribution and automated financial calculations.",
    challenge: "Taygo needed to connect fragmented loan origination software, credit check APIs, and real-time CRM webhooks while maintaining military-grade financial data protection and zero latency.",
    solution: "Architected AWS serverless microservices, secure RESTful API integrations with financial credit bureaus, automated email/SMS workflows, and responsive broker dashboards.",
    results: [
      { metric: "4x", label: "Lead Processing Throughput" },
      { metric: "<100ms", label: "API Webhook Delivery" },
      { metric: "100%", label: "AWS Setup & Security Hardening" },
      { metric: "Top Rated", label: "Client Recommendation" }
    ],
    technologies: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "React", "Docker", "Stripe"],
    testimonial: {
      quote: "It was great working with Opash Software. They developed excellent products for me and provided the best support — great knowledge of AWS setup and API management. It is highly recommended to Hire.",
      author: "Sepi G.",
      role: "VP of Product",
      company: "Taygo"
    },
    accentColor: "from-amber-600 to-orange-500"
  },
  {
    id: "opinionpoll",
    slug: "opinionpoll-realtime-voting-engine",
    client: "OpinionPoll",
    domain: "CivicTech & Real-Time Engagement",
    website: "https://www.opinionpoll.org/",
    headline: "High-Concurrency Public Sentiment & Real-Time Interactive Polling Engine",
    summary: "Delivered a distributed polling and voting platform capable of handling tens of thousands of concurrent real-time votes with live animated visualizations and zero lag.",
    challenge: "Handling unpredictable viral voting spikes without database deadlocks, preventing ballot stuffing, and rendering live SVG analytics in real-time across millions of visitors.",
    solution: "Engineered a Redis-backed caching and voting queue, WebSocket live data sync, bot-protection algorithms, and responsive mobile-first polling cards.",
    results: [
      { metric: "50k+", label: "Concurrent Votes Handled Smoothly" },
      { metric: "0ms", label: "Perceived Live Chart Latency" },
      { metric: "99.8%", label: "Bot & Duplicate Vote Filtration" },
      { metric: "5★", label: "Client Execution Rating" }
    ],
    technologies: ["Next.js", "WebSockets", "Redis", "Node.js", "PostgreSQL", "Chart.js"],
    testimonial: {
      quote: "Thank you Hiren, for your hard work and dedication! Your expertise has been invaluable, and we truly appreciate the effort you've put into delivering exceptional results. Looking forward to collaborating with you again in the future!",
      author: "Anthony F",
      role: "Founder",
      company: "OpinionPoll"
    },
    accentColor: "from-purple-600 to-pink-500"
  },
  {
    id: "stickyframe",
    slug: "stickyframe-creative-production",
    client: "StickyFrame",
    domain: "Creative Media & Video Production",
    website: "https://www.stickyframe.com/",
    headline: "Modern Interactive Digital Showcase For Next-Gen Creative Production",
    summary: "Created a visually stunning portfolio and interactive project collaboration portal for StickyFrame, featuring smooth micro-animations and ultra-fast media loading.",
    challenge: "StickyFrame required a digital presence that reflected their high-end creative visual standards while maintaining snappy mobile loading speeds.",
    solution: "Built a custom lightweight web application featuring video background preloading, custom cursor states, fluid layout transitions, and high-conversion client inquiry modals.",
    results: [
      { metric: "95+", label: "Performance & Accessibility Score" },
      { metric: "2x", label: "Inbound Client Inquiries" },
      { metric: "Repeat", label: "Client Retained For Next Project" },
      { metric: "100%", label: "Cross-Device Fluidity" }
    ],
    technologies: ["React", "CSS Animation", "Next.js", "Cloudinary CDN", "Framer Motion"],
    testimonial: {
      quote: "It was great working with him and we are definitely going to work on our next project again.",
      author: "Austin Rogers",
      role: "Creative Director",
      company: "StickyFrame"
    },
    accentColor: "from-rose-600 to-red-500"
  }
];
