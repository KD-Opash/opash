export interface Industry {
  id: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  solutions: string[];
  metrics: string;
}

export const industriesData: Industry[] = [
  {
    id: "insurtech",
    name: "InsureTech",
    headline: "Automating Policy Underwriting & Claims Processing",
    description: "Opash Software builds secure insurance portals, digital policy issuance engines, and automated claims adjustment systems that eliminate paperwork and speed up approvals.",
    iconName: "ShieldCheck",
    solutions: ["Automated Claims Processing", "Policyholder Self-Serve Portals", "Fraud Detection Algorithms", "Real-time Telematics Integrations"],
    metrics: "70% Faster Claims Processing"
  },
  {
    id: "fintech",
    name: "FinTech & Banking",
    headline: "Secure Financial Transactions & Compliant Payment Ecosystems",
    description: "We architect bank-grade financial platforms, lending management software, neo-banking mobile apps, and multi-gateway payment integrations complying with PCI-DSS.",
    iconName: "Landmark",
    solutions: ["Digital Wallets & Payments", "Automated Loan Underwriting", "KYC / AML Biometric Verification", "Algorithmic Investment Dashboards"],
    metrics: "100% PCI-DSS Security Compliance"
  },
  {
    id: "healthcare",
    name: "Health Care & MedTech",
    headline: "HIPAA-Compliant Patient Care & Medical Portals",
    description: "Empowering clinics, telehealth providers, and health organizations with encrypted electronic health records (EHR), telemedicine video calls, and automated appointment scheduling.",
    iconName: "HeartPulse",
    solutions: ["Telemedicine Video Platforms", "HIPAA-Hardened EHR / EMR", "Medical Device IoT Sync", "Patient Care Portals"],
    metrics: "99.99% Healthcare Uptime"
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    headline: "High-Conversion Headless Storefronts & Multi-Vendor Hubs",
    description: "Building blazing-fast Next.js headless commerce architectures, custom Shopify apps, inventory synchronization engines, and AI-powered product recommendation engines.",
    iconName: "ShoppingBag",
    solutions: ["Headless Next.js Commerce", "Multi-Vendor Marketplaces", "Omnichannel Inventory Sync", "AI Personalized Recommendations"],
    metrics: "3.4x Higher Conversion Rates"
  },
  {
    id: "education",
    name: "Education & EdTech",
    headline: "Engaging Learning Management Systems & Virtual Classrooms",
    description: "Developing scalable LMS platforms, gamified student portals, interactive live video classrooms, and automated assessment scoring for schools, universities, and EdTech startups.",
    iconName: "GraduationCap",
    solutions: ["Custom LMS Architectures", "Live Interactive Classrooms", "AI Homework Grading & Quizzes", "Student Progress Analytics"],
    metrics: "50k+ Active Students Supported"
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    headline: "Interactive Property Marketplaces & Smart Leasing Portals",
    description: "Streamline property buying, leasing, and facility management with 3D virtual tour integrations, automated rent collection, mortgage calculators, and tenant management portals.",
    iconName: "Building2",
    solutions: ["MLS / IDX Property Search Engines", "Automated Lease & Rent Portals", "3D Virtual Tour Embeds", "Broker CRM & Deal Flow"],
    metrics: "4x Lead Velocity For Realtors"
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    headline: "Dynamic Booking Engines & Guest Experience Systems",
    description: "Architecting real-time flight and hotel booking systems, itinerary planners, mobile check-in apps, and loyalty rewards engines that enhance guest satisfaction.",
    iconName: "Plane",
    solutions: ["Real-time Booking & GDS APIs", "Contactless Mobile Check-In", "Dynamic Pricing Algorithms", "Custom Itinerary Builders"],
    metrics: "<1s Multi-GDS Search Response"
  },
  {
    id: "telecom",
    name: "Telecommunication",
    headline: "High-Throughput Billing & Unified Communication Dashboards",
    description: "Building telecom customer self-care portals, usage metering engines, eSIM provisioning flows, and VoIP communication backends capable of millions of events.",
    iconName: "Radio",
    solutions: ["Customer Self-Care Mobile Apps", "Real-Time Usage & Data Metering", "eSIM Activation Flows", "VoIP & SIP Protocol Gateways"],
    metrics: "Millions of Events Processed Daily"
  },
  {
    id: "industrial",
    name: "Industrial Tech & Supply Chain",
    headline: "IoT Fleet Telemetry & Warehouse Logistics Management",
    description: "Connecting manufacturing machinery, supply chain logistics, and IoT sensors to real-time telemetry dashboards for predictive maintenance and inventory tracking.",
    iconName: "Factory",
    solutions: ["Predictive Machinery Maintenance", "Warehouse Management (WMS)", "Real-Time GPS Fleet Tracking", "Industrial CAD Part Portals"],
    metrics: "40% Downtime Reduction"
  },
  {
    id: "ngos",
    name: "NGOs & Non-Profit",
    headline: "Transparent Donor Portals & Impact Tracking Platforms",
    description: "Building high-impact donation collection platforms with recurring gift support, volunteer coordination engines, and public transparency dashboards.",
    iconName: "HandHeart",
    solutions: ["Secure Recurring Giving Portals", "Volunteer Coordination Hubs", "Public Transparency Dashboards", "Campaign Analytics"],
    metrics: "Zero-Fee Donation Pipelines"
  }
];
