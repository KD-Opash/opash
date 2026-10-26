export interface CompanyStats {
  developers: string;
  projectsDelivered: string;
  hoursExecuted: string;
  yearsExperience: string;
  clientRetentionRate: string;
  clutchRating: string;
}

export interface Milestone {
  year: string;
  title: string;
  badge: string;
  description: string;
  iconName: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  badge: string;
  description: string;
  highlight: string;
}

export interface ArchitecturalPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  metric: string;
  iconName: string;
  accent: string;
  features: string[];
}

export const companyData = {
  name: "Opash Software",
  tagline: "Empowering You With Innovation & Technology",
  heroSubtitle: "Top Global Partner for Custom Software, Scalable SaaS & AI Solutions",
  aboutBrief:
    "At Opash Software, we're not just another IT company — we're a dedicated team of tech experts turning digital dreams into reality. Based in Surat, Gujarat, we engineer enterprise-grade web, mobile, SaaS, and AI-driven platforms for clients across the US, Europe, Middle East, and Asia.",
  fullStory:
    "Founded with a mission to eliminate software bloat and deliver tailor-made, high-velocity engineering, Opash Software has grown from a specialized development boutique into a trusted global engineering partner. Over 8+ years, we have mastered full-stack development, cloud infrastructure, AI/ML integrations, and DevOps pipelines. We build software that scales cleanly, performs flawlessly, and accelerates business growth.",
  
  stats: {
    developers: "Dedicated Squads",
    projectsDelivered: "75+",
    hoursExecuted: "12,000+",
    yearsExperience: "8+",
    clientRetentionRate: "96%",
    clutchRating: "4.9/5",
  } as CompanyStats,

  ceo: {
    name: "Hiren Danecha",
    role: "Founder & Chief Executive Officer",
    experience: "10+ Years in Full-Stack Architecture & Product Strategy",
    quote: "We don't just write code — we build resilient digital foundations and long-term partnerships powered by innovation, engineering rigor, and mutual growth.",
    bio: "With a decade of experience in software architecture, distributed systems, and product engineering, Hiren founded Opash Software to help ambitious startups, SMEs, and Fortune 500 partners transform complex ideas into market-defining digital products. Under his leadership, Opash has delivered 75+ global projects with a 96% client retention rate.",
    tags: ["Tech Strategist", "Startup Mentor", "Full-Stack Architect", "AI Evangelist"],
    email: "hiren@opashsoftware.com",
    linkedin: "https://in.linkedin.com/company/opash-software",
    image: "/images/image.webp"
  },

  contact: {
    address: "129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan, Surat - 395009, Gujarat, India",
    googleMapsUrl: "https://www.google.com/maps/place/Opash+Software/@21.1855732,72.7808585,17z/data=!3m1!4b1!4m5!3m4!1s0x3be04d10c334ee8d:0x940b36a19424de4c!8m2!3d21.1855296!4d72.783052",
    phone: "+91 95372-22266",
    phoneClean: "+919537222266",
    email: "hiren@opashsoftware.com",
    hrEmail: "opash.hr@gmail.com",
    whatsapp: "https://wa.me/919537222266",
    workingHours: "Monday - Friday : 9:30 AM to 6:30 PM IST (Global Coverage Available 24/7)",
  },

  socials: {
    linkedin: "https://in.linkedin.com/company/opash-software",
    instagram: "https://www.instagram.com/opashsoftware",
    facebook: "https://hi-in.facebook.com/opash.software",
    upwork: "https://www.upwork.com/agencies/opashsoftware",
    clutch: "https://clutch.co/profile/opash-software",
    goodfirms: "https://www.goodfirms.co/company/opash-software",
    trustpilot: "https://www.trustpilot.com/review/opashsoftware.com",
  },

  globalPresence: [
    { country: "India (HQ)", city: "Surat", timezone: "IST (UTC+5:30)", active: true },
    { country: "United States", city: "San Francisco / NY", timezone: "PST / EST", active: true },
    { country: "United Kingdom", city: "London", timezone: "GMT (UTC+0)", active: true },
    { country: "United Arab Emirates", city: "Dubai", timezone: "GST (UTC+4)", active: true },
    { country: "Canada", city: "Toronto", timezone: "EST (UTC-5)", active: true },
    { country: "Australia", city: "Sydney", timezone: "AEST (UTC+10)", active: true },
    { country: "Europe", city: "Berlin / Amsterdam", timezone: "CET (UTC+1)", active: true },
  ],

  milestones: [
    {
      year: "2021",
      badge: "Inception",
      title: "Laying The Foundation",
      description: "Opash Software was founded in Surat, India with an elite team of engineers dedicated to delivering custom web & cloud solutions for startups in North America.",
      iconName: "Compass",
    },
    {
      year: "2022",
      badge: "Expansion",
      title: "Full-Stack & Cloud Scale",
      description: "Diversified our engineering stack across React, Angular, Node, Python, and AWS. Scaled our cross-platform mobile app development services for enterprise clients.",
      iconName: "Layers",
    },
    {
      year: "2023",
      badge: "Global Growth",
      title: "Global Reach & 75+ Projects",
      description: "Expanded our full-time engineering squads and successfully delivered 75+ global projects across US, UK, UAE, and Europe, establishing high-trust Upwork and Clutch agency rankings.",
      iconName: "Globe",
    },
    {
      year: "2024",
      badge: "Transformation",
      title: "FinTech, HealthTech & Microservices",
      description: "Engineered scalable digital ecosystems including eSanad document verification, UCareHQ healthcare portal, and industrial SaaS architectures with 99.99% uptime.",
      iconName: "ShieldCheck",
    },
    {
      year: "2025 - 2026",
      badge: "Next-Gen AI",
      title: "AI/ML Solutions & Cloud-First Future",
      description: "Integrated Generative AI, LLM orchestration, predictive analytics, and automated DevOps CI/CD into core deliverables, empowering clients to lead their industries.",
      iconName: "Sparkles",
    },
  ] as Milestone[],

  coreValues: [
    {
      icon: "Shield",
      title: "Integrity & Transparency",
      description: "Open code repositories, transparent sprint tracking, real-time communication, and zero hidden costs."
    },
    {
      icon: "Zap",
      title: "Innovation-Driven",
      description: "We don't just follow blueprints; we engineer modern architectures using AI, microservices, and cutting-edge tech."
    },
    {
      icon: "Users",
      title: "Client-Centric Partnerships",
      description: "We align deeply with your KPIs, business models, and runway to build software that maximizes your ROI."
    },
    {
      icon: "Clock",
      title: "On-Time, Every Sprint",
      description: "Agile 2-week delivery cycles, clear roadmaps, and predictable release deadlines that respect your go-to-market speed."
    },
    {
      icon: "Lock",
      title: "100% IP & Code Ownership",
      description: "You own all code, repositories, architectures, and intellectual property from day one without vendor lock-in."
    },
    {
      icon: "Headphones",
      title: "24/7 Global Support",
      description: "Round-the-clock coverage with seamless overlap across US, UK, Europe, Middle East, and APAC time zones."
    }
  ] as CoreValue[],

  recognitions: [
    { name: "Clutch", rating: "4.9 / 5.0", label: "Top Software Developers", logoText: "Clutch" },
    { name: "GoodFirms", rating: "5.0 / 5.0", label: "Top Custom Software Agency", logoText: "GoodFirms" },
    { name: "Trustpilot", rating: "4.8 / 5.0", label: "Verified Client Reviews", logoText: "Trustpilot" },
    { name: "Upwork", rating: "100% Job Success", label: "Top Rated Plus Agency", logoText: "Upwork" },
    { name: "TechReviewer", rating: "Top 10", label: "Web & Mobile Developers", logoText: "TechReviewer" },
    { name: "TopDevelopers", rating: "5-Star", label: "Global IT Service Provider", logoText: "TopDevelopers" }
  ],

  whyChooseUs: [
    {
      icon: "Star",
      title: "Custom Solutions",
      badge: "Bespoke Architecture",
      description: "Engineered from first principles to fit your exact business goals — without rigid templates, technical bloat, or throwaway code.",
      highlight: "100% Tailored Code",
    },
    {
      icon: "Clock",
      title: "Fast + Reliable Delivery",
      badge: "On-Time Sprints",
      description: "Accelerated release cycles powered by automated CI/CD pipelines, daily PR reviews, and predictable 2-week milestone delivery.",
      highlight: "2-Week Sprints",
    },
    {
      icon: "RefreshCw",
      title: "Full-Cycle Development",
      badge: "End-to-End",
      description: "Complete execution from product discovery, system architecture, and UX design to cloud DevOps and post-launch scale.",
      highlight: "Concept to Scale",
    },
    {
      icon: "AtSign",
      title: "Agile & Transparent",
      badge: "Direct Comms",
      description: "Direct collaboration with senior engineers through dedicated Slack channels, weekly sprint demos, and live GitHub tracking.",
      highlight: "Zero Hidden Layers",
    },
    {
      icon: "Lock",
      title: "Scalable Codebase",
      badge: "Enterprise Ready",
      description: "Modular microservices and clean domain architectures built to handle millions of transactions with sub-second latency.",
      highlight: "High Concurrency",
    },
    {
      icon: "Check",
      title: "Global Experience",
      badge: "Worldwide Reach",
      description: "Proven track record delivering mission-critical platforms for fast-growth startups and enterprise leaders across 15+ countries.",
      highlight: "15+ Countries",
    },
  ] as WhyChooseUsItem[],

  architecturalPillars: [
    {
      number: "01",
      title: "Zero-Bloat Digital Foundations",
      tagline: "Engineered for 10x Scalability & Sub-Second Latency",
      description:
        "We build clean, robust architectures from day one. Every application is designed with modular microservices, automated CI/CD pipelines, and clean code that scales seamlessly to millions of users without technical debt.",
      metric: "99.99% Uptime SLAs",
      iconName: "Layers",
      accent: "#00a88f",
      features: [
        "Domain-Driven Design & Clean Code Standards",
        "Automated CI/CD Pipelines & Test Suites",
        "Stateless Edge Caching & Scalable Microservices"
      ]
    },
    {
      number: "02",
      title: "Direct Senior Engineering Rigor",
      tagline: "Specialist Devs Without Non-Technical Account Layers",
      description:
        "No non-technical intermediaries or ticket delays. You collaborate directly with senior software architects via dedicated Slack pods, daily standups, and transparent GitHub commits.",
      metric: "Top 3% Vetted Talent",
      iconName: "Cpu",
      accent: "#38bdf8",
      features: [
        "Direct Slack & Zoom Pods with Lead Engineers",
        "Daily Git Commits & 2-Week Agile Sprints",
        "Transparent Velocity & Sprint Burndown Telemetry"
      ]
    },
    {
      number: "03",
      title: "100% Day-One IP Ownership",
      tagline: "Your Code, Your Repositories, Your Infrastructure",
      description:
        "Complete peace of mind. You retain 100% ownership of all source code, private Git repositories, cloud infrastructure, and intellectual property from the first commit with zero vendor lock-in.",
      metric: "100% IP Transferred",
      iconName: "ShieldCheck",
      accent: "#6366f1",
      features: [
        "Direct Ownership of Private GitHub Repositories",
        "Zero Proprietary Framework Hostage Fees",
        "Complete Architecture Schematics & Handover Docs"
      ]
    }
  ] as ArchitecturalPillar[],
};
