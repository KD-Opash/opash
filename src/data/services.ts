export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconName: string;
  badge: string;
  features: { title: string; desc: string }[];
  technologies: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  metrics: { value: string; label: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "custom-software",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDesc: "Tailored precisely to your business needs, industry workflows, and growth goals. We deliver scalable, secure, and fully personalized solutions built from the ground up.",
    heroHeadline: "Custom Software Development Tailored to Your Business Needs",
    heroSubheadline: "Whether you're building internal tools, client-facing portals, or enterprise-grade systems, our team delivers scalable, secure, and fully personalized solutions—built from the ground up.",
    iconName: "Code2",
    badge: "Enterprise Grade",
    metrics: [
      { value: "8+ Years", label: "Industry Expertise" },
      { value: "40%", label: "Faster Time-To-Market" },
      { value: "99.98%", label: "System Availability" },
      { value: "100%", label: "IP & Architecture Ownership" }
    ],
    features: [
      {
        title: "Custom Web & Mobile Applications",
        desc: "Frontend, backend, APIs—built just for your use case with modern reactive frameworks and cloud backends."
      },
      {
        title: "Third-party Integrations",
        desc: "Seamless integration with CRM, ERP, payment gateways, AI tools, biometric services, and more."
      },
      {
        title: "Real-time Features",
        desc: "Live data updates, interactive dashboards, event streaming, push notifications, chat, and telemetry tracking."
      },
      {
        title: "Automation Tools",
        desc: "Automated report generation, task automation, and streamlined workflow management to eliminate operational bottlenecks."
      },
      {
        title: "Security & Compliance",
        desc: "Custom data protection, granular audit logs, and rigorous compliance with GDPR, HIPAA, and industry-specific regulations."
      },
      {
        title: "Legacy System Modernization",
        desc: "Upgrade or rebuild monolithic, aging systems into high-performance cloud architectures with zero downtime."
      }
    ],
    technologies: [
      "React", "Angular", "HTML", "TailwindCSS", "Material UI", "Next.js",
      "Node", "Nest.js", "Django", "Python",
      "React Native", "Flutter",
      "PostgreSQL", "MS SQL", "MongoDB", "Firebase",
      "RESTful API", "GraphQL", "Webhooks",
      "AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean",
      "Docker", "GitHub Actions", "Jenkins", "Kubernetes", "Terraform",
      "Cypress", "Selenium", "Jest", "Postman"
    ],
    deliverables: [
      "Full Source Code & Git Repositories (100% IP Ownership)",
      "Interactive Figma Prototypes & UI/UX Design System",
      "System Architecture Blueprints & ER Diagrams",
      "Swagger / OpenAPI RESTful & GraphQL Documentation",
      "CI/CD Deployment Pipelines & Docker Containers",
      "Production Handover, SLA Support & Maintenance Plan"
    ],
    process: [
      { step: "01", title: "Discovery & Requirement Analysis", desc: "We dive deep into your business goals, user journeys, and workflows to define clear success metrics and technical specifications." },
      { step: "02", title: "Planning & Design", desc: "We create wireframes, system architecture, and intuitive UI/UX prototypes, laying out a strategic tech roadmap." },
      { step: "03", title: "Development in Agile Sprints", desc: "Development is executed in Agile sprints using clean, modular code and an API-first approach to ensure flexibility and fast iterations." },
      { step: "04", title: "Testing & Quality Assurance", desc: "Our QA process involves both manual and automated methods (Jest, Cypress, Selenium, Postman) to guarantee security, speed, and performance." },
      { step: "05", title: "CI/CD-Driven Deployment", desc: "Your software is seamlessly launched on cloud (AWS, Azure, GCP) or on-premise environments with automated zero-downtime pipelines." },
      { step: "06", title: "Support & Maintenance", desc: "Post-launch, we provide continuous performance optimization, bug fixes, upgrades, and feature enhancements to scale with your business." }
    ],
    faqs: [
      {
        question: "Why should we choose custom software instead of off-the-shelf products?",
        answer: "Every business is unique—your software should be too. Off-the-shelf products often come with limitations, unused features, recurring per-seat fees, or poor alignment with your operations. With custom software, you get a solution tailored to your exact requirements, giving you total control over features, security, user experience, and integrations. Custom software is future-proof, flexible, cost-efficient in the long run, and ensures 100% intellectual property ownership."
      },
      {
        question: "How long does a typical custom software project take?",
        answer: "Initial MVP iterations and modular applications are typically delivered in 6 to 10 weeks, while full enterprise systems range from 3 to 6 months depending on integration depth and complexity. Our Agile sprints ensure you see working functionality every two weeks."
      },
      {
        question: "Do we retain full intellectual property (IP) and code rights?",
        answer: "Yes, 100%. Upon project milestone sign-off, all source code, database architectures, APIs, design files, and intellectual property belong exclusively to you with zero vendor lock-in."
      },
      {
        question: "Can you modernize or rebuild our legacy systems without business downtime?",
        answer: "Yes. Using the Strangler Fig pattern and API micro-gateways, we gradually decouple and modernize monolithic legacy systems into cloud-native services with zero data loss and uninterrupted business continuity."
      },
      {
        question: "How does Opash Software maintain security and regulatory compliance?",
        answer: "We engineer enterprise security from day one with role-based access control (RBAC), end-to-end encryption (TLS 1.3 / AES-256), immutable audit logs, and adherence to GDPR, HIPAA, and SOC-2 guidelines."
      }
    ]
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDesc: "High-performance, responsive, and SEO-optimized web applications built with modern frontend and backend frameworks.",
    heroHeadline: "Next-Gen Web Applications That Captivate & Convert",
    heroSubheadline: "We build ultra-fast, accessible, and scalable web platforms using React, Next.js, Angular, Node, and headless cloud architectures.",
    iconName: "Globe2",
    badge: "Lightning Fast",
    metrics: [
      { value: "<1.2s", label: "Average Page Load Time" },
      { value: "98+", label: "Google Lighthouse Score" },
      { value: "3.4x", label: "Conversion Rate Increase" },
      { value: "100%", label: "Mobile Responsive" }
    ],
    features: [
      {
        title: "Modern Jamstack & Server Components",
        desc: "Leveraging Next.js App Router, SSR, and Static Site Generation for instant load times and superior Core Web Vitals."
      },
      {
        title: "Dynamic Single Page Applications (SPA)",
        desc: "Complex interactive web applications with fluid state management, instant transitions, and rich client-side interactivity."
      },
      {
        title: "Progressive Web Apps (PWA)",
        desc: "Offline-capable web apps with background sync, push notifications, and app-like installation on iOS and Android devices."
      },
      {
        title: "SEO & Conversion Architecture",
        desc: "Semantic HTML5, automated schema markup, dynamic OpenGraph previews, and edge rendering that search engines love."
      },
      {
        title: "Headless CMS & Content Hubs",
        desc: "Flexible content management setups using Strapi, Contentful, Sanity, or WordPress APIs, empowering marketing teams."
      },
      {
        title: "Accessibility & WCAG 2.1 Compliance",
        desc: "Inclusive user interfaces designed for assistive technologies, keyboard navigation, and rigorous contrast standards."
      }
    ],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Angular", "Vue", "Node.js", "GraphQL", "Vercel", "AWS CloudFront"],
    deliverables: [
      "Production-Ready Next.js / React Application",
      "Pixel-Perfect Responsive Layouts across all viewports",
      "Optimized Asset Pipeline & SEO Schema Setup",
      "Full API Integration & Analytics Dashboards",
      "Automated CI/CD Deployment via GitHub Actions / Vercel"
    ],
    process: [
      { step: "01", title: "Information Architecture", desc: "User flows, content hierarchy, SEO keyword mapping, and technical feasibility scoping." },
      { step: "02", title: "Figma UI/UX & Design System", desc: "Designing accessible typography tokens, component libraries, and interactive high-fidelity mocks." },
      { step: "03", title: "Component-Driven Engineering", desc: "Building modular, reusable React/Next.js components with clean TypeScript types." },
      { step: "04", title: "Performance & SEO Optimization", desc: "Image optimization, code-splitting, Core Web Vitals profiling, and cross-browser testing." },
      { step: "05", title: "Launch & Edge Hosting", desc: "Zero-downtime deployment, SSL configuration, CDN caching setup, and post-launch monitoring." }
    ],
    faqs: [
      {
        question: "Can you help migrate our legacy website to Next.js or React?",
        answer: "Yes, we specialize in seamless migrations from older frameworks (WordPress, PHP, legacy Angular, jQuery) to Next.js, boosting speed by up to 300% without losing SEO rankings."
      },
      {
        question: "How do you ensure our web application is fast?",
        answer: "We employ server-side rendering, incremental static regeneration, modern image compression (WebP/AVIF), edge CDN caching, tree-shaking, and lazy-loading to consistently achieve 95+ Google Lighthouse scores."
      }
    ]
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android that deliver silky smooth 60fps performance and intuitive UI.",
    heroHeadline: "Engaging iOS & Android Apps Users Love To Tap Every Day",
    heroSubheadline: "Harness the power of React Native, Flutter, Swift, and Kotlin to launch high-performance mobile applications with unified codebases.",
    iconName: "Smartphone",
    badge: "Cross-Platform & Native",
    metrics: [
      { value: "60 FPS", label: "Silky Smooth Rendering" },
      { value: "50%", label: "Code Sharing Savings" },
      { value: "4.8★", label: "Average App Store Rating" },
      { value: "100%", label: "App Store & Play Store Approval" }
    ],
    features: [
      {
        title: "React Native & Flutter Solutions",
        desc: "Single codebase, dual native builds: cut development costs and time-to-market in half without sacrificing native touch and feel."
      },
      {
        title: "Native iOS (Swift) & Android (Kotlin)",
        desc: "Deep hardware integrations, ARKit, CoreBluetooth, biometric security, and ultra-high-speed native computations."
      },
      {
        title: "Offline-First Data Synchronization",
        desc: "Local SQLite/WatermelonDB caching that lets users browse and work offline, syncing seamlessly when connectivity returns."
      },
      {
        title: "Real-Time Push Notifications & Live Activities",
        desc: "Personalized FCM & APNs push strategies, background updates, in-app messaging, and Dynamic Island integrations."
      },
      {
        title: "In-App Purchases & Subscriptions",
        desc: "Secure Stripe, RevenueCat, Apple Pay, and Google Pay integrations with server-side receipt validation."
      },
      {
        title: "End-to-End App Store Launch Support",
        desc: "We manage metadata, screenshot generation, privacy compliance, App Store review guidelines, and Google Play policies."
      }
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Firebase", "RevenueCat", "Fastlane", "SQLite", "GraphQL"],
    deliverables: [
      "Published iOS (.ipa) & Android (.aab) Apps",
      "Full Cross-Platform Source Code & Configs",
      "App Store & Google Play Store Assets & Listings",
      "Push Notification & Analytics Dashboard Integration",
      "Crashlytics & Performance Telemetry Setup"
    ],
    process: [
      { step: "01", title: "Mobile Strategy & UX Scoping", desc: "Defining mobile-first gestures, thumb zones, offline requirements, and permissions." },
      { step: "02", title: "Figma Mobile Prototypes", desc: "Interactive mobile UI kits following Apple Human Interface Guidelines and Material Design 3." },
      { step: "03", title: "Hybrid or Native Development", desc: "Sprint-based mobile engineering with test builds delivered via TestFlight and Firebase App Distribution." },
      { step: "04", title: "Device Matrix Testing", desc: "Rigorous testing across screen sizes, Android OEM variants, iOS versions, and network speeds." },
      { step: "05", title: "Store Submission & Launch", desc: "Complete handling of app store approval processes and launch monitoring." }
    ],
    faqs: [
      {
        question: "Should we build with React Native/Flutter or pure Native?",
        answer: "For 90% of business, marketplace, and SaaS apps, React Native or Flutter is the superior choice because it shares 80-90% of code between iOS and Android, dramatically reducing initial cost and ongoing maintenance. We only recommend pure native when you need low-level hardware or AR gaming features."
      },
      {
        question: "Do you assist with getting our app approved in the App Store?",
        answer: "Yes, our team handles all provisioning profiles, certificates, privacy manifests, compliance checklists, and communication with Apple and Google reviewers until your app is live."
      }
    ]
  },
  {
    id: "ai-ml-solutions",
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    shortDesc: "Automate complex workflows, deploy private LLM agents, and unlock predictive insights tailored to your business data.",
    heroHeadline: "Harness Generative AI & Predictive Models For Competitive Dominance",
    heroSubheadline: "Transform unstructured documents, customer interactions, and business data into high-value autonomous AI agents and predictive pipelines.",
    iconName: "BrainCircuit",
    badge: "Intelligent Systems",
    metrics: [
      { value: "10x", label: "Workflow Automation Speed" },
      { value: "94%+", label: "NLP & Extraction Accuracy" },
      { value: "<200ms", label: "Vector Search Query Latency" },
      { value: "100%", label: "Data Privacy & Compliance" }
    ],
    features: [
      {
        title: "Enterprise LLM & RAG Architectures",
        desc: "Retrieval-Augmented Generation (RAG) connecting OpenAI, Claude, Llama 3, or Mistral with your proprietary internal docs and databases."
      },
      {
        title: "Autonomous Agentic Workflows",
        desc: "Multi-agent systems that autonomously reason, parse inputs, trigger API tools, write reports, and resolve complex customer requests."
      },
      {
        title: "Intelligent Document Processing (IDP)",
        desc: "Automated OCR extraction and parsing of invoices, medical records, legal contracts, and financial receipts with zero human error."
      },
      {
        title: "Predictive Analytics & Forecasting",
        desc: "Custom regression and classification models predicting churn, inventory demand, dynamic pricing, and risk assessment."
      },
      {
        title: "Computer Vision & Visual QA",
        desc: "Object detection, facial recognition, defect inspection, and video analysis powered by PyTorch, YOLO, and OpenCV."
      },
      {
        title: "Secure On-Prem & Private AI Deployment",
        desc: "Host open-source LLMs inside your own AWS VPC or private servers so your sensitive enterprise data never leaves your perimeter."
      }
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "OpenAI API", "Hugging Face", "Pinecone", "Qdrant", "FastAPI", "Docker"],
    deliverables: [
      "Custom Fine-Tuned or RAG AI Service",
      "Vector Database Setup & Ingestion Pipeline",
      "Interactive AI Chat or Copilot User Interface",
      "Model Evaluation Metrics & Hallucination Guardrails",
      "Complete FastAPI Backend & Secure Auth Endpoints"
    ],
    process: [
      { step: "01", title: "Feasibility & Data Audit", desc: "Evaluating your business data quality, model selection (cloud vs open-source), and latency targets." },
      { step: "02", title: "Pipeline & Vector Architecture", desc: "Building chunking, embedding, vector database indexing, and retrieval rankers." },
      { step: "03", title: "Model Fine-Tuning & Prompt Engineering", desc: "Iterative testing with domain prompts, few-shot examples, and safety guardrails." },
      { step: "04", title: "System Integration", desc: "Connecting the AI engine into your web dashboard, mobile app, Slack, or CRM via high-speed APIs." },
      { step: "05", title: "Telemetry & Continuous Learning", desc: "Logging user queries, monitoring hallucinations, and setting up feedback loops for model fine-tuning." }
    ],
    faqs: [
      {
        question: "Will our proprietary business data be safe and kept private?",
        answer: "Absolutely. We enforce zero data-retention contracts when using commercial APIs (like OpenAI enterprise) or deploy open-source models (like Llama 3 or Mistral) completely inside your own private AWS/GCP cloud where no external entity has access."
      },
      {
        question: "What is RAG and why does my business need it?",
        answer: "RAG (Retrieval-Augmented Generation) connects an AI language model to your internal databases, PDFs, and knowledge base. Instead of guessing, the AI retrieves factual documents before answering, eliminating hallucinations and ensuring 100% accuracy."
      }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Development",
    shortDesc: "End-to-end multi-tenant cloud software with subscription billing, enterprise RBAC, and automated onboarding.",
    heroHeadline: "Scalable Multi-Tenant SaaS Built To Grow From 10 To 1,000,000 Users",
    heroSubheadline: "We architect multi-tenant SaaS products with recurring billing, organization hierarchies, usage metering, and high-availability cloud infrastructure.",
    iconName: "Cloud",
    badge: "Cloud-Native",
    metrics: [
      { value: "99.99%", label: "Platform Uptime SLA" },
      { value: "5x", label: "Developer Team Velocity" },
      { value: "100k+", label: "Concurrent User Ready" },
      { value: "PCI-DSS", label: "Compliant Billing Stack" }
    ],
    features: [
      {
        title: "Multi-Tenant Database Architectures",
        desc: "Isolated schemas or row-level tenant separation ensuring complete data segregation, speed, and simple tenant backup management."
      },
      {
        title: "Subscription Billing & Metering",
        desc: "Seamless Stripe, Lemon Squeezy, or Paddle billing with usage-based metering, coupon codes, invoice generation, and tier upgrades."
      },
      {
        title: "Organization & Role-Based Access Control",
        desc: "Team invites, granular permissions, SSO (Okta, Google Workspace, Azure AD), and audit logging out of the box."
      },
      {
        title: "Real-Time Telemetry & Admin Dashboards",
        desc: "Super-admin views for MRR tracking, user cohort analysis, churn metrics, feature flag toggles, and tenant impersonation."
      },
      {
        title: "Self-Serve Onboarding & Product Tours",
        desc: "Frictionless signup flows, automated welcome emails, interactive tooltips, and sample data population for high activation rates."
      },
      {
        title: "Microservices & Serverless Scalability",
        desc: "Distributed task queues (BullMQ, Celery, AWS SQS) offloading heavy background workloads for instant user response."
      }
    ],
    technologies: ["Next.js", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Stripe", "Auth0", "Docker", "AWS ECS", "Terraform"],
    deliverables: [
      "Complete Multi-Tenant SaaS Codebase",
      "Integrated Stripe Billing & Webhook Handlers",
      "Super-Admin Portal & Tenant Metrics Dashboard",
      "Authentication System with SSO & 2FA",
      "Cloud Infrastructure as Code (Terraform / CDK)"
    ],
    process: [
      { step: "01", title: "Product Blueprint & Pricing Model", desc: "Defining tier structures, usage limits, tenant isolation strategies, and core loops." },
      { step: "02", title: "Architecture & Data Modeling", desc: "Setting up tenant schemas, caching tiers, and asynchronous worker queues." },
      { step: "03", title: "Core MVP Development", desc: "Rapid sprint delivery focusing on onboarding, primary user value creation, and billing." },
      { step: "04", title: "Enterprise Readiness", desc: "Adding audit logs, SSO/SAML, compliance checklists, and webhooks." },
      { step: "05", title: "Cloud Launch & Auto-Scaling", desc: "Deploying to multi-AZ cloud clusters with autoscaling and 24/7 uptime monitoring." }
    ],
    faqs: [
      {
        question: "How do you handle multi-tenancy securely?",
        answer: "We support both schema-per-tenant and shared-database with Row-Level Security (RLS) in PostgreSQL. We enforce automated tenant IDs across all database queries and middleware so cross-tenant leakage is mathematically impossible."
      },
      {
        question: "Can you help us build an MVP in under 8 weeks?",
        answer: "Yes, our pre-architected SaaS boilerplates and modular components allow us to launch production-grade SaaS MVPs in 6 to 8 weeks, helping you validate with real paying customers fast."
      }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API Integration & Microservices",
    shortDesc: "Connect disparate enterprise systems, CRM, ERP, and payment gateways with high-throughput microservices and webhooks.",
    heroHeadline: "Unified System Connectivity With Resilient Microservices",
    heroSubheadline: "Break down data silos, modernize legacy backends, and build high-throughput API gateways capable of millions of transactions.",
    iconName: "Cpu",
    badge: "Microservices & APIs",
    metrics: [
      { value: "10M+", label: "Daily API Calls Handled" },
      { value: "<45ms", label: "Median Response Time" },
      { value: "99.99%", label: "Uptime with Rate Limiting" },
      { value: "100%", label: "OpenAPI Documentation" }
    ],
    features: [
      {
        title: "Microservices Architecture Modernization",
        desc: "Deconstruct sluggish monolithic applications into decoupled, independently deployable services communicating via gRPC or Kafka."
      },
      {
        title: "Third-Party SaaS & Enterprise Integrations",
        desc: "Seamless two-way sync with Salesforce, HubSpot, SAP, NetSuite, QuickBooks, Stripe, Twilio, and customized ERP systems."
      },
      {
        title: "High-Performance API Gateways",
        desc: "Centralized routing, JWT authentication, token bucket rate-limiting, request caching, and automated throttling."
      },
      {
        title: "Event-Driven Messaging & Webhooks",
        desc: "Resilient asynchronous pub/sub messaging with RabbitMQ, Apache Kafka, or AWS EventBridge with exponential backoff retries."
      },
      {
        title: "GraphQL & Federation",
        desc: "Unified data graphs enabling clients to request exactly what they need in a single query, preventing over-fetching."
      },
      {
        title: "API Security & Compliance",
        desc: "OAuth2, OpenID Connect, mTLS encryption, payload sanitization, and OWASP API Top 10 hardening."
      }
    ],
    technologies: ["Node.js", "NestJS", "Go", "Python", "GraphQL", "Apache Kafka", "RabbitMQ", "Redis", "Kong", "Postman", "AWS Lambda"],
    deliverables: [
      "Microservices Codebase & Container Definitions",
      "Interactive Swagger / Postman API Collections",
      "Event Bus Architecture & Message Broker Configs",
      "API Gateway Configuration with Auth & Rate Limiting",
      "Datadog / Prometheus Monitoring Dashboards"
    ],
    process: [
      { step: "01", title: "API Audit & Schema Mapping", desc: "Analyzing existing endpoints, data dependencies, and throughput requirements." },
      { step: "02", title: "Contract-First Design", desc: "Drafting OpenAPI specs and GraphQL schemas before writing a single line of backend logic." },
      { step: "03", title: "Microservice Implementation", desc: "Building modular services with localized databases and event-driven communication." },
      { step: "04", title: "Stress & Load Testing", desc: "Simulating heavy traffic spikes with k6 and Artillery to benchmark throughput and latency." },
      { step: "05", title: "Deployment & Telemetry", desc: "Zero-downtime rolling updates on Kubernetes with distributed tracing via OpenTelemetry." }
    ],
    faqs: [
      {
        question: "How do you ensure zero data loss during third-party API downtime?",
        answer: "We implement idempotent webhooks, dead-letter queues (DLQ), and exponential backoff retry policies. Even if a downstream partner goes offline, our message broker buffers events and replays them automatically once service resumes."
      }
    ]
  },
  {
    id: "qa-testing",
    slug: "qa-testing",
    title: "QA & Testing",
    shortDesc: "Comprehensive automated and manual QA services to guarantee zero critical bugs, peak performance, and airtight security.",
    heroHeadline: "Bulletproof Quality Assurance & Automated Testing Services",
    heroSubheadline: "Ship with 100% confidence. We execute automated end-to-end testing, load benchmarking, API security checks, and cross-device testing.",
    iconName: "ShieldAlert",
    badge: "Zero-Defect Standard",
    metrics: [
      { value: "99.4%", label: "Defect Detection Pre-Release" },
      { value: "85%+", label: "Automated Test Coverage" },
      { value: "10,000+", label: "Virtual Concurrent Users Tested" },
      { value: "4x", label: "Faster Release Cycles" }
    ],
    features: [
      {
        title: "Automated E2E Testing (Cypress / Playwright)",
        desc: "Simulate complex user journeys across browsers, verifying checkout flows, authentication, and dynamic state transitions."
      },
      {
        title: "Unit & Integration Test Suites",
        desc: "Robust test suites using Jest, Vitest, and PyTest baked into GitHub Actions CI, preventing regression bugs on every pull request."
      },
      {
        title: "Performance & Stress Benchmarking",
        desc: "Simulate thousands of concurrent active users with k6 and JMeter to discover database deadlocks and server limits before launch."
      },
      {
        title: "API & Security Vulnerability Auditing",
        desc: "Automated OWASP Top 10 vulnerability scans, SQL injection prevention, broken auth checks, and CORS misconfiguration tests."
      },
      {
        title: "Manual Exploratory & Usability Testing",
        desc: "Expert human testers scrutinize edge cases, UI glitches, localized formatting, and real-world edge scenarios."
      },
      {
        title: "Cross-Browser & Multi-Device Testing",
        desc: "Testing on real physical iOS, Android, macOS, and Windows hardware to ensure identical visual excellence everywhere."
      }
    ],
    technologies: ["Playwright", "Cypress", "Selenium", "Jest", "k6", "JMeter", "Postman", "SonarQube", "Appium", "BrowserStack"],
    deliverables: [
      "Automated Test Suite Repository",
      "CI/CD Pipeline Integration with Quality Gates",
      "Detailed Defect Logs with Video Recordings",
      "Load & Scalability Performance Benchmark Reports",
      "Security & Vulnerability Assessment Audit"
    ],
    process: [
      { step: "01", title: "Test Strategy & Matrix Definition", desc: "Identifying critical user paths, regression risks, and performance SLAs." },
      { step: "02", title: "Automated Framework Setup", desc: "Writing maintainable Playwright/Cypress test suites and test fixtures." },
      { step: "03", title: "Sprint QA Integration", desc: "Testing user stories concurrently with feature development in every sprint." },
      { step: "04", title: "Stress & Security Scans", desc: "Running automated vulnerability scans and high-load traffic simulations." },
      { step: "05", title: "Quality Gate Sign-Off", desc: "Providing actionable reports and production release certification." }
    ],
    faqs: [
      {
        question: "Can we hire your QA team as an independent audit team for our existing app?",
        answer: "Yes, we regularly perform independent QA audits, test automation implementation, and performance profiling for applications developed by internal or third-party teams."
      }
    ]
  },
  {
    id: "hire-developers",
    slug: "hire-developers",
    title: "Hire Dedicated Developers",
    shortDesc: "Vetted top 3% senior software engineers, full-stack architects, and UI/UX designers ready to integrate with your squad in 48 hours.",
    heroHeadline: "Scale Your Engineering Team On-Demand With Top 3% Tech Talent",
    heroSubheadline: "Eliminate lengthy hiring cycles. Hire pre-vetted full-stack developers, mobile specialists, and AI engineers with flexible engagement models.",
    iconName: "UserCheck",
    badge: "Immediate Onboarding",
    metrics: [
      { value: "48 Hrs", label: "Average Talent Match Time" },
      { value: "Top 3%", label: "Strict Technical Vetting" },
      { value: "60%", label: "Cost Savings vs US/EU Local Hiring" },
      { value: "100%", label: "Timezone Overlap Guarantee" }
    ],
    features: [
      {
        title: "Vetted Senior Engineers",
        desc: "Every Opash engineer undergoes rigorous multi-stage coding assessments, system architecture challenges, and English fluency evaluations."
      },
      {
        title: "Flexible Engagement Models",
        desc: "Hire dedicated full-time talent, part-time squad augmentation, or milestone-based fixed capacity that scales up or down as needed."
      },
      {
        title: "Seamless Team Integration",
        desc: "Our developers work inside your Slack, Jira, GitHub, and daily standups, functioning just like your in-house engineers."
      },
      {
        title: "4+ Hours Daily Timezone Overlap",
        desc: "Synchronous daily overlap with North America (PST/EST), Europe (GMT/CET), and Australia (AEST) time zones."
      },
      {
        title: "Zero Overhead & Recruitment Hassle",
        desc: "We handle payroll, benefits, high-end hardware, continuous training, and retention so you can focus purely on product delivery."
      },
      {
        title: "2-Week Risk-Free Trial",
        desc: "Work with your assigned developer for two weeks. If you are not 100% satisfied, you pay nothing and we assign a replacement immediately."
      }
    ],
    technologies: ["React / Next.js", "Angular", "Node.js", "Python / Django", "React Native", "Flutter", "DevOps / AWS", "AI / LLM Engineers"],
    deliverables: [
      "Direct Developer Access & Dedicated Workstation",
      "Integration into your GitHub & Project Management Tools",
      "Daily Work Logs & Bi-Weekly Sprint Reports",
      "Signed Non-Disclosure Agreements (NDA) & IP Assignment",
      "Dedicated Technical Account Manager"
    ],
    process: [
      { step: "01", title: "Share Your Tech Requirements", desc: "Tell us the tech stack, seniority level, project domain, and team dynamics you need." },
      { step: "02", title: "Review Pre-Screened Profiles", desc: "Within 48 hours, we present hand-picked senior developer profiles matched to your project." },
      { step: "03", title: "Conduct 1-on-1 Interviews", desc: "Interview candidates directly, review past code samples, or conduct live technical evaluations." },
      { step: "04", title: "Kick Off with 2-Week Trial", desc: "Onboard your chosen engineer and start building with zero upfront risk." }
    ],
    faqs: [
      {
        question: "How fast can an Opash developer start on our project?",
        answer: "We maintain bench capacity of senior pre-vetted engineers who can be onboarded into your repos and communication channels within 48 to 72 hours."
      },
      {
        question: "What happens if a developer is not a good culture or skill fit?",
        answer: "With our 2-week risk-free trial, if any developer doesn't meet your expectations, we swap them out immediately at no extra cost or refund the trial period."
      }
    ]
  }
];
