export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroParagraph2?: string;
  whyTitle?: string;
  whyParagraphs?: string[];
  iconName: string;
  badge: string;
  features: { title: string; desc: string; badge?: string }[];
  technologies: string[];
  techCategories?: { category: string; skills: string[] }[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  processSla?: string;
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
    heroParagraph2: "Our development process is designed to align with your business goals, offering flexibility, transparency, and high performance at every stage.",
    whyTitle: "Why Custom Software Development?",
    whyParagraphs: [
      "Off-the-shelf software rarely fits every business need. Custom software gives you full control over features, integrations, and user experience, helping you stay ahead of the competition.",
      "With custom solutions, you can streamline business processes, eliminate unnecessary tools, and build scalable systems that grow with your company."
    ],
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
    processSla: "We follow Agile methodologies with dedicated 2-week sprints, transparent Jira/Slack tracking, bi-weekly demos, and strict code review SLAs to guarantee on-time enterprise delivery.",
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
    shortDesc: "End-to-end web development services that turn your ideas into high-performing, secure, and scalable web solutions.",
    heroHeadline: "End-to-End Web Development Services",
    heroSubheadline: "Whether you’re launching a marketing website, a custom business portal, or a full-fledged web application, our team focuses on building intuitive, visually compelling, and highly functional websites tailored to your business goals.",
    heroParagraph2: "From frontend design to backend architecture, our web solutions are built using modern frameworks, responsive design principles, and clean code to ensure top-notch performance across all devices.",
    whyTitle: "Why Web Development Matters for Your Business?",
    whyParagraphs: [
      "Your website is often the first impression a customer has of your brand. A professionally developed, fast-loading, and mobile-friendly site builds trust, enhances user engagement, and drives conversions.",
      "Custom web development gives you the power to create a digital experience uniquely aligned with your operations, offering seamless integrations with payment gateways, CRMs, APIs, and analytics."
    ],
    iconName: "Globe2",
    badge: "Fast & Scalable",
    metrics: [
      { value: "8+ Years", label: "Industry Expertise" },
      { value: "100%", label: "Mobile-Responsive" },
      { value: "<1.2s", label: "Average Page Load Time" },
      { value: "SEO", label: "Optimized From Day 1" }
    ],
    features: [
      {
        title: "Frontend Development",
        desc: "We build intuitive, responsive, and visually appealing interfaces that ensure smooth user experiences across devices and browsers."
      },
      {
        title: "Backend Development",
        desc: "We create robust, secure, and scalable server logic, database connections, and API layers that power your web application."
      },
      {
        title: "Full-Stack Development",
        desc: "Interactive, dynamic platforms like dashboards, CRMs, e-commerce sites, and portals."
      },
      {
        title: "CMS Development",
        desc: "Headless CMS (Strapi, Sanity), or custom solutions for easy content management."
      },
      {
        title: "Third-party Integrations",
        desc: "APIs, payment gateways, analytics tools, social media, and CRM systems."
      },
      {
        title: "SEO Optimization & Performance Tuning",
        desc: "On-page SEO, loading speed optimization, and accessibility improvements."
      }
    ],
    technologies: [
      "React", "Next", "Angular", "HTML", "CSS", "TailwindCSS", "Bootstrap",
      "Node", "Express", "Django", "Python",
      "PostgreSQL", "MS SQL", "MongoDB", "Firebase", "Supabase",
      "Strapi", "Sanity", "Contentful",
      "aws", "googleCloud", "microsoft-azure", "Netlify", "Vercel", "Docker", "Git", "GitLab"
    ],
    deliverables: [
      "Intuitive, Mobile-Responsive Frontend Interfaces",
      "Robust, Scalable Backend Architecture & APIs",
      "Interactive Dynamic Platforms (Dashboards, CRMs, Portals)",
      "Headless CMS Integration (Strapi, Sanity, Contentful)",
      "Third-Party Payment & API Ecosystem Integrations",
      "On-Page SEO Optimization & Core Web Vitals Tuning"
    ],
    process: [
      { step: "01", title: "Discovery & Planning", desc: "Thorough discovery and planning to understand your business goals, target users, and content needs." },
      { step: "02", title: "Sitemap & UI/UX Design", desc: "Creating a sitemap, wireframes, and high-fidelity UI/UX designs that bring clarity to user journeys and functionality." },
      { step: "03", title: "Agile Sprint Development", desc: "Building frontend and backend features in agile sprints with real-time feedback and transparency." },
      { step: "04", title: "Cross-Device Testing & QA", desc: "Comprehensive testing across devices and browsers to guarantee security, speed, and performance." },
      { step: "05", title: "Cloud Deployment", desc: "Deploying the website on your preferred cloud or hosting platform (Vercel, Netlify, AWS, Azure, GCP)." },
      { step: "06", title: "Maintenance & Enhancement", desc: "Post-launch continuous monitoring, maintenance, and performance enhancements to ensure long-term value." }
    ],
    processSla: "We follow Agile development cycles with bi-weekly sprint deliverables, automated regression testing, and 99.9% uptime deployment readiness.",
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
    shortDesc: "We build powerful, user-centric mobile applications tailored to meet your business needs and engage your target audience.",
    heroHeadline: "Mobile App Development",
    heroSubheadline: "We build powerful, user-centric mobile applications tailored to meet your business needs and engage your target audience. From concept to deployment, our mobile app solutions are crafted to offer seamless performance, intuitive user experiences, and robust functionality.",
    heroParagraph2: "Whether you need a native iOS/Android app or a cross-platform solution, our team combines cutting-edge technology with thoughtful design to create apps that not only function flawlessly but also deliver value to your business and users. Our development approach ensures that the mobile apps we build are secure, scalable, and optimized for performance. We align each project with your brand identity and user expectations while ensuring smooth integrations with third-party tools, APIs, or enterprise systems.",
    whyTitle: "Benefits of Investing in Mobile App Development",
    whyParagraphs: [
      "Mobile apps offer unmatched convenience, personalization, and direct access to customers. With billions of active smartphone users globally, mobile platforms are no longer optional—they're essential. A well-built app enhances customer engagement, increases brand loyalty, and provides real-time value through features like push notifications, location-based services, and offline capabilities.",
      "Unlike mobile websites, apps offer superior performance, better user experience, and the ability to utilize device features such as cameras, GPS, and biometric authentication. Businesses that invest in mobile apps can also leverage data analytics to understand user behavior and make smarter business decisions, ultimately improving ROI and competitive advantage."
    ],
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
        title: "Native App Development",
        desc: "High-performance apps built specifically for iOS (Swift) and Android (Kotlin) platforms."
      },
      {
        title: "Cross-Platform App Development",
        desc: "Unified codebase using frameworks like Flutter or React Native for faster deployment and reduced cost."
      },
      {
        title: "UI/UX Design",
        desc: "Intuitive, modern, and responsive interfaces that provide a frictionless user experience."
      },
      {
        title: "API Integration",
        desc: "Seamless connection with backend systems, third-party services, and cloud databases."
      },
      {
        title: "App Store Deployment",
        desc: "Full support for publishing on Apple App Store and Google Play Store, including compliance and optimization."
      },
      {
        title: "Post-launch Support",
        desc: "Regular updates, feature enhancements, performance monitoring, and user support."
      }
    ],
    technologies: [
      "React Native", "Flutter", "IOS", "Android", "Node", "Express", "Django", "Firebase", "Git", "GitLab", "BitBucket"
    ],
    deliverables: [
      "Native iOS (Swift) & Android (Kotlin) Builds",
      "Unified Flutter / React Native Codebase",
      "Figma Mobile UI/UX Design System & Assets",
      "Apple App Store & Google Play Store Submission",
      "Push Notification & Deep Linking Infrastructure",
      "Crashlytics & SLA Post-Launch Support"
    ],
    process: [
      { step: "01", title: "Requirement Analysis & Scoping", desc: "Our mobile app development process begins with in-depth requirement analysis, where we define your app’s goals, user personas, and functionality." },
      { step: "02", title: "UI/UX Wireframing & Prototyping", desc: "Creating intuitive, responsive wireframes and interactive prototypes that ensure frictionless user navigation and brand alignment." },
      { step: "03", title: "Agile Iterative Development", desc: "Building native or cross-platform codebases in iterative Agile sprints with continuous client feedback loops." },
      { step: "04", title: "Rigorous QA & Device Matrix Testing", desc: "Conducting rigorous functional, automated, and regression tests across a matrix of real iOS and Android devices." },
      { step: "05", title: "App Store & Google Play Deployment", desc: "Full publishing support including compliance checks, metadata optimization, and app store guideline approval." },
      { step: "06", title: "Ongoing Maintenance & Feature Updates", desc: "Continuous performance monitoring, OS compatibility updates, and feature upgrades to keep your app secure and competitive." }
    ],
    processSla: "Once the design is finalized, we enter the agile development cycle, building the app in iterative sprints with regular feedback loops. After that, rigorous testing is conducted to ensure bug-free performance and smooth functionality across various devices. The app is then deployed to app stores, and our work doesn’t stop there—we provide ongoing maintenance and updates to keep your app secure, relevant, and competitive.",
    faqs: [
      {
        question: "Should we build with React Native/Flutter or pure Native?",
        answer: "For most business, marketplace, and SaaS apps, React Native or Flutter is the superior choice because it shares 80-90% of code between iOS and Android, dramatically reducing initial cost and time-to-market. We recommend pure native (Swift / Kotlin) when you need low-level hardware or intensive compute tasks."
      },
      {
        question: "Do you handle the Apple App Store and Google Play Store submission?",
        answer: "Yes, our team handles all provisioning profiles, certificates, privacy manifests, compliance checklists, and communication with Apple and Google reviewers until your app is approved and live."
      }
    ]
  },
  {
    id: "ai-ml-solutions",
    slug: "ai-ml-solutions",
    title: "AI/ML Solution Development",
    shortDesc: "We provide end-to-end AI & Machine Learning development services that empower businesses to unlock insights, automate decisions, and drive innovation.",
    heroHeadline: "AI/ML Solution Development",
    heroSubheadline: "We provide end-to-end AI & Machine Learning development services that empower businesses to unlock insights, automate decisions, and drive innovation. Whether you're starting with raw data or looking to scale an existing model, our team of data scientists, ML engineers, and software developers will design intelligent systems tailored to your goals.",
    heroParagraph2: "From predictive analytics and intelligent automation to recommendation engines and computer vision, our AI/ML solutions are designed to be scalable, efficient, and easy to integrate into your digital ecosystem—be it a web app, mobile platform, or enterprise system.",
    whyTitle: "Why AI/ML Solution Development?",
    whyParagraphs: [
      "AI and ML technologies are revolutionizing industries by enabling systems to learn, adapt, and make data-driven decisions—without explicit programming. This leads to increased accuracy, automation, and competitive edge. Businesses that adopt AI/ML can better predict trends, personalize user experiences, optimize processes, and uncover hidden patterns in data.",
      "Whether you want to automate customer support, detect fraud, forecast demand, or analyze user behavior, AI/ML can help you move from reactive to proactive decision-making. Custom model development ensures that the solution fits your unique data, objectives, and industry needs."
    ],
    iconName: "BrainCircuit",
    badge: "Intelligent Systems",
    metrics: [
      { value: "10x", label: "Workflow Automation Speed" },
      { value: "94%+", label: "Model Prediction Accuracy" },
      { value: "<150ms", label: "Inference Query Latency" },
      { value: "100%", label: "Data Privacy & Compliance" }
    ],
    features: [
      {
        title: "Data Strategy & Engineering",
        desc: "Collection, cleaning, transformation, and pipeline setup."
      },
      {
        title: "Model Development & Training",
        desc: "Classification, regression, clustering, and deep learning models."
      },
      {
        title: "Natural Language Processing (NLP)",
        desc: "Chatbots, summarization, sentiment analysis, translation."
      },
      {
        title: "Predictive & Prescriptive Analytics",
        desc: "Sales forecasting, churn prediction, recommendations."
      },
      {
        title: "AI-Powered Automation",
        desc: "Intelligent process automation, robotic process automation (RPA)."
      },
      {
        title: "Model Deployment & Integration",
        desc: "Serving models in web/mobile apps, APIs, or cloud systems."
      }
    ],
    technologies: [
      "Python", "TensorFlow", "Keras", "Django", "Docker", "Flask", "FastAPI",
      "Kubernetes", "Amazon SageMaker", "Google Vertex AI", "Azure ML", "Databricks",
      "PostgreSQL", "MongoDB", "Snowflake", "BigQuery", "S3", "Firebase"
    ],
    deliverables: [
      "Production-Grade Trained AI/ML Model Weights & Pipelines",
      "High-Performance RESTful / gRPC Model Inference API",
      "Data Cleaning, ETL, and Feature Engineering Scripts",
      "Model Accuracy, Precision, Recall & F1-Score Validation Report",
      "Real-Time Telemetry, Hallucination Guardrails & Retraining Pipeline"
    ],
    process: [
      { step: "01", title: "Problem & Goal Definition", desc: "The AI/ML development process begins with Problem & Goal Definition, where we work closely with you to understand the use case, available data, and key performance indicators (KPIs) that define success." },
      { step: "02", title: "Data Collection & Preprocessing", desc: "Raw data is cleaned, transformed, and enriched to prepare it for machine learning pipelines." },
      { step: "03", title: "Model Design & Training", desc: "We select the most suitable algorithms—such as decision trees, random forests, or deep neural networks—and iteratively train models for optimal performance." },
      { step: "04", title: "Validation & Testing", desc: "We rigorously evaluate model accuracy, precision, recall, F1-score, and other metrics to ensure reliability." },
      { step: "05", title: "Deployment & Integration", desc: "Once validated, models are deployed using APIs, cloud-based platforms, or embedded directly into web or mobile applications for real-time usage." },
      { step: "06", title: "Monitoring & Retraining", desc: "Post-deployment, we track model performance, address drift, and continuously improve the models as new data becomes available—ensuring long-term accuracy and business value." }
    ],
    processSla: "Post-deployment, we offer Monitoring & Retraining to track model performance, address drift, and continuously improve the models as new data becomes available—ensuring long-term accuracy and business value.",
    faqs: [
      {
        question: "How do you protect our proprietary business data during AI training?",
        answer: "We ensure 100% data confidentiality. We sign strict NDAs and deploy open-source models inside your own virtual private cloud (VPC) on AWS or Azure so your data never leaves your enterprise perimeter."
      },
      {
        question: "Can your AI solutions integrate with our existing ERP or web applications?",
        answer: "Yes, our team packages models into containerized FastAPI microservices that connect seamlessly with your web platforms, mobile apps, databases, or third-party enterprise tools via REST and WebSockets."
      }
    ]
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Development Services",
    shortDesc: "We specialize in end-to-end SaaS product development, helping you build cloud-based software that is scalable, secure, and ready to serve thousands of users.",
    heroHeadline: "SaaS Development Services",
    heroSubheadline: "We specialize in end-to-end SaaS product development, helping you build cloud-based software that is scalable, secure, and ready to serve thousands of users. Whether you're launching a new product, modernizing a legacy system, or creating a multi-tenant SaaS platform, our team guides you from idea to launch—and beyond.",
    heroParagraph2: "From MVP to enterprise-grade systems, we focus on building subscription-based applications that support your business model, integrate smoothly with third-party tools, and deliver seamless user experiences across web and mobile platforms.",
    whyTitle: "Why SaaS Development?",
    whyParagraphs: [
      "The SaaS model offers unbeatable flexibility and value—users can access your software anytime, anywhere, without the hassle of installations or updates. For businesses, SaaS means recurring revenue, easier deployment, lower infrastructure costs, and better customer analytics.",
      "By choosing SaaS, you enable your customers to adopt your solution quickly and scale as they grow. With centralized hosting, automated billing, and role-based access, SaaS platforms are ideal for B2B, B2C, and internal enterprise tools. Whether it's a CRM, project management system, LMS, or fintech tool—SaaS is the future of software delivery."
    ],
    iconName: "Cloud",
    badge: "Cloud-Native SaaS",
    metrics: [
      { value: "99.99%", label: "Platform Uptime SLA" },
      { value: "5x", label: "Developer Team Velocity" },
      { value: "100k+", label: "Concurrent User Ready" },
      { value: "PCI-DSS", label: "Compliant Billing Stack" }
    ],
    features: [
      {
        title: "Product Architecture & MVP Design",
        desc: "Building core features with future scaling in mind."
      },
      {
        title: "Multi-Tenant Architecture & Cloud Scaling",
        desc: "Isolated tenant schemas, high-availability clusters, and automated load balancing."
      },
      {
        title: "Subscription Billing & Tier Management",
        desc: "Recurring payments, automated invoicing, coupon systems, and PCI-DSS compliance."
      },
      {
        title: "Real-Time Features",
        desc: "Live chat, notifications, collaboration tools."
      },
      {
        title: "API & Third-Party Integrations",
        desc: "Webhooks, REST/GraphQL endpoints, CRM/ERP bridges, and external service connectors."
      },
      {
        title: "Analytics & Admin Dashboard",
        desc: "Reporting tools for both users and internal monitoring."
      }
    ],
    technologies: [
      "React", "Next", "TailwindCSS", "Redux", "Material UI",
      "Node", "Nest.js", "Django", "Python",
      "PostgreSQL", "MongoDB", "MS SQL", "Redis", "Firebase",
      "aws", "googleCloud", "microsoft-azure", "Vercel", "Heroku",
      "Docker", "GitHub Actions", "Jenkins", "Kubernetes", "Terraform", "GitLab",
      "Google Analytics", "Mixpanel"
    ],
    deliverables: [
      "Multi-Tenant SaaS Architecture & Database Isolation",
      "Complete Frontend Web Portal & Super-Admin Dashboard",
      "Stripe / Lemon Squeezy Automated Subscription Engine",
      "Enterprise RBAC, SSO & Audit Logging Configuration",
      "Cloud Infrastructure as Code (Terraform / Docker / Kubernetes)"
    ],
    process: [
      { step: "01", title: "Product Blueprint & Pricing Model", desc: "Defining tier structures, usage limits, tenant isolation strategies, and core MVP loops." },
      { step: "02", title: "Architecture & Data Modeling", desc: "Setting up tenant schemas, caching tiers, and asynchronous worker queues." },
      { step: "03", title: "Agile Sprint Development", desc: "We use Agile methodology to speed up time-to-market and prioritize features based on user needs and business value. Development is divided into sprints, with clear milestones, regular demos, and client feedback loops." },
      { step: "04", title: "Security & Role-Based Access", desc: "Adding audit logs, SSO/SAML, compliance checklists, automated billing, and webhooks." },
      { step: "05", title: "Multi-Cloud Launch & Auto-Scaling", desc: "Deploying to multi-AZ cloud clusters with autoscaling, CDN edge caching, and 24/7 uptime monitoring." },
      { step: "06", title: "Analytics & Continuous Evolution", desc: "Tracking user activation, MRR, churn metrics, and continuous feature enhancements based on live feedback." }
    ],
    processSla: "We use Agile methodology to speed up time-to-market and prioritize features based on user needs and business value. Development is divided into sprints, with clear milestones, regular demos, and client feedback loops. This makes the product more adaptable, reduces rework, and ensures a user-driven evolution of your SaaS platform.",
    faqs: [
      {
        question: "How do you handle multi-tenancy securely?",
        answer: "We support both schema-per-tenant and shared database with Row-Level Security (RLS) in PostgreSQL. We enforce automated tenant IDs across all database queries and middleware so cross-tenant leakage is strictly prevented."
      },
      {
        question: "Can you help us build an MVP in under 8 weeks?",
        answer: "Yes, our modular architecture and reusable enterprise modules allow us to launch production-grade SaaS MVPs in 6 to 8 weeks, helping you validate with real paying customers rapidly."
      }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API Integration Services",
    shortDesc: "We offer robust and secure API Integration services that help you connect different software systems, automate workflows, and enhance operational efficiency.",
    heroHeadline: "API Integration Services",
    heroSubheadline: "We offer robust and secure API Integration services that help you connect different software systems, automate workflows, and enhance operational efficiency. Whether you need to integrate third-party platforms, build custom APIs, or connect legacy systems with modern cloud applications, we ensure seamless data exchange and high-level security.",
    heroParagraph2: "Our team specializes in developing, testing, and managing APIs that enable your business to scale without technological bottlenecks. From payment gateways to CRM systems, we bridge the gap between tools to create a unified digital ecosystem.",
    whyTitle: "Why API Integration?",
    whyParagraphs: [
      "Modern businesses rely on multiple tools, platforms, and services—API integration allows them to talk to each other in real-time. Instead of building everything from scratch, APIs let you leverage proven, scalable functionality—from secure payments to location tracking, AI tools, or shipping systems.",
      "With the right integrations, you can automate data exchange, reduce errors, personalize user experiences, and scale your operations efficiently. API integration also ensures modularity—so as your business evolves, you can easily plug in new services without disrupting your entire system."
    ],
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
        title: "Third-party API Integration",
        desc: "Stripe, PayPal, Google APIs, Twilio, SendGrid, Razorpay, Zoom, etc."
      },
      {
        title: "CRM & ERP Integration",
        desc: "Salesforce, Zoho, HubSpot, SAP, Odoo."
      },
      {
        title: "Cloud Services Integration",
        desc: "AWS, Google Cloud, Firebase, Azure APIs."
      },
      {
        title: "Social Media & Marketing",
        desc: "Facebook Graph API, Instagram, LinkedIn, Mailchimp, Google Ads."
      },
      {
        title: "Custom API Development",
        desc: "REST/GraphQL APIs built for your internal or public use."
      },
      {
        title: "Authentication, Security & Webhook Setup",
        desc: "Real-time notifications and data sync across platforms, OAuth 2.0, API key management, rate limiting, encryption."
      }
    ],
    technologies: [
      "Postman", "Swagger (OpenAPI)", "Insomnia", "RapidAPI", "FastAPI", "Restful API", "GraphQL", "OAuth 2.0", "Webhooks"
    ],
    deliverables: [
      "Production-Ready Custom RESTful & GraphQL APIs",
      "Interactive Swagger / OpenAPI Documentation & Postman Collections",
      "OAuth 2.0 / JWT Secure Authentication Middleware",
      "Automated Webhook Handlers with Retry Queues",
      "Comprehensive Integration Logging & Telemetry Dashboard"
    ],
    process: [
      { step: "01", title: "Requirement Analysis & Scope Mapping", desc: "Our integration process starts with requirement analysis, where we define what systems need to communicate and what data needs to be shared." },
      { step: "02", title: "API Evaluation & Compatibility Testing", desc: "We then evaluate and test APIs (yours or third-party) for compatibility, documentation quality, and performance." },
      { step: "03", title: "Endpoint Development & Configuration", desc: "Next, we develop or configure the API endpoints, set up authentication, and implement the required data mapping, error handling, and security layers." },
      { step: "04", title: "Security, Rate Limiting & Webhooks", desc: "Implementing OAuth 2.0, API key rotation, request throttling, payload validation, and reliable webhook listeners." },
      { step: "05", title: "Rigorous End-to-End Sandbox Testing", desc: "Validating data integrity, payload schemas, error edge cases, and high-load traffic simulation." },
      { step: "06", title: "Deployment, Monitoring & Maintenance", desc: "After thorough testing, we deploy the integration and provide monitoring, logging, and future-proof support to ensure it continues to function reliably as your system evolves." }
    ],
    processSla: "Our integration process starts with requirement analysis, where we define what systems need to communicate and what data needs to be shared. We then evaluate and test APIs (yours or third-party) for compatibility, documentation quality, and performance. Next, we develop or configure the API endpoints, set up authentication, and implement the required data mapping, error handling, and security layers. After thorough testing, we deploy the integration and provide monitoring, logging, and future-proof support to ensure it continues to function reliably as your system evolves.",
    faqs: [
      {
        question: "How do you ensure zero data loss during third-party API downtime?",
        answer: "We implement idempotent webhooks, dead-letter queues (DLQ), and exponential backoff retry policies. Even if a downstream partner goes offline, our message broker buffers events and replays them automatically once service resumes."
      },
      {
        question: "Do you supply complete documentation for developers?",
        answer: "Yes, every custom API is delivered with interactive Swagger / OpenAPI documentation, Postman collections, payload samples, and automated SDK generators."
      }
    ]
  },
  {
    id: "qa-testing",
    slug: "qa-testing",
    title: "Quality Assurance (QA) & Testing Services",
    shortDesc: "At Opash Software, we provide comprehensive Quality Assurance (QA) and software testing services to ensure your application works exactly as intended—securely, smoothly, and at scale.",
    heroHeadline: "Quality Assurance (QA) & Testing Services",
    heroSubheadline: "Delivering a flawless product experience is just as important as building the right features. At Opash Software, we provide comprehensive Quality Assurance (QA) and software testing services to ensure your application works exactly as intended—securely, smoothly, and at scale.",
    heroParagraph2: "From early-stage unit tests to final release verification, our QA experts are embedded across every phase of your development lifecycle. Whether you're launching a web platform, mobile app, or enterprise SaaS product, we ensure end-to-end quality through a blend of manual testing, automated scripts, performance benchmarks, and usability assessments—all tailored to your technology stack and user expectations.",
    whyTitle: "Why Quality Assurance Matters",
    whyParagraphs: [
      "In today’s fast-moving digital space, bugs, performance lags, or crashes can make or break your user experience—and your brand reputation. Quality Assurance isn’t just a checkpoint before deployment; it's an integral part of modern software development. A strong QA strategy reduces rework, speeds up time-to-market, and improves customer satisfaction, while saving significant long-term costs.",
      "With proactive QA, you can confidently release features, adopt CI/CD practices, and ensure that new updates don’t break old functionalities. It allows your business to scale with confidence, deliver a consistent experience across devices, and maintain compliance with industry security and performance standards."
    ],
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
        title: "Manual Testing",
        desc: "Functional, regression, exploratory, and UI testing for pixel-perfect experiences."
      },
      {
        title: "Automated Testing",
        desc: "Selenium, Cypress, and CI/CD-based test suites for repeatable, scalable QA."
      },
      {
        title: "Performance Testing",
        desc: "Load, stress, and scalability tests using tools like JMeter and Gatling."
      },
      {
        title: "Security Testing",
        desc: "Vulnerability scanning, data validation, and compliance with OWASP standards."
      },
      {
        title: "Cross-browser & Device Testing",
        desc: "Ensure flawless performance across major browsers and mobile platforms."
      },
      {
        title: "API Testing",
        desc: "REST and GraphQL endpoint validation using Postman and automated scripts."
      }
    ],
    technologies: [
      "Jest", "Mocha", "JUnit", "PyTest", "Selenium", "Cypress", "Playwright", "Postman", "JMeter", "GitHub Actions", "Docker"
    ],
    deliverables: [
      "Automated End-to-End Test Suite Repository",
      "CI/CD Pipeline Integration with Quality Gates",
      "Detailed Defect Logs & Performance Profiling Reports",
      "OWASP Security Vulnerability Audit Documentation",
      "Comprehensive Production Release Certification"
    ],
    process: [
      { step: "01", title: "Requirement Analysis & Scope Scoping", desc: "Our QA process ensures your software is thoroughly tested from start to finish. We begin with requirement analysis to identify goals, scope, and potential risks." },
      { step: "02", title: "Test Planning & Test Case Design", desc: "Test planning and test case design for UI, business logic, and comprehensive API coverage." },
      { step: "03", title: "Test Environment Setup", desc: "After setting up the test environment, configuring staging mirrors and mock service datasets." },
      { step: "04", title: "Manual & Automated Execution", desc: "We execute both manual and automated tests across all platforms. Any bugs are logged, prioritized, and communicated clearly to developers." },
      { step: "05", title: "Regression Testing & Bug Verification", desc: "We then conduct regression testing to verify fixes and prevent new issues." },
      { step: "06", title: "Final Sign-off & Post-Launch Monitoring", desc: "Before release, we perform a final QA sign-off with smoke and performance tests, and provide post-launch monitoring to catch real-world issues and ensure ongoing quality." }
    ],
    processSla: "Our QA process ensures your software is thoroughly tested from start to finish. We begin with requirement analysis to identify goals, scope, and potential risks, followed by test planning and test case design for UI, logic, and API coverage. After setting up the test environment, we execute both manual and automated tests across all platforms. Any bugs are logged, prioritized, and communicated clearly to developers. We then conduct regression testing to verify fixes and prevent new issues. Before release, we perform a final QA sign-off with smoke and performance tests, and provide post-launch monitoring to catch real-world issues and ensure ongoing quality.",
    faqs: [
      {
        question: "Can we hire your QA team as an independent audit team for our existing app?",
        answer: "Yes, we regularly perform independent QA audits, test automation implementation, and performance profiling for applications developed by internal or third-party teams."
      },
      {
        question: "What test automation frameworks do you specialize in?",
        answer: "We have deep expertise in Cypress, Playwright, Selenium, Jest, PyTest, and Postman, easily integrated into your existing CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)."
      }
    ]
  },
  {
    id: "hire-developers",
    slug: "hire-developers",
    title: "Hire a Dedicated Developer / Team",
    shortDesc: "Need reliable tech talent to accelerate your project? At Opash Software, we offer flexible engagement models to help you hire dedicated developers or entire teams that work exclusively on your project—just like an in-house team, but without the overhead.",
    heroHeadline: "Hire a Dedicated Developer / Team",
    heroSubheadline: "Need reliable tech talent to accelerate your project? At Opash Software, we offer flexible engagement models to help you hire dedicated developers or entire teams that work exclusively on your project—just like an in-house team, but without the overhead.",
    heroParagraph2: "Whether you're a startup scaling fast or an enterprise needing extra development power, our vetted professionals are ready to plug into your workflow. With full transparency, time-zone alignment, and direct communication, our developers become an extension of your team—committed to your product vision, deadlines, and long-term success.",
    whyTitle: "Why Hire a Dedicated Developer / Team?",
    whyParagraphs: [
      "Hiring a dedicated resource offers maximum control, flexibility, and cost-efficiency. Unlike traditional outsourcing, this model allows you to manage daily tasks, prioritize features, and collaborate in real-time—while we handle recruitment, onboarding, infrastructure, and HR.",
      "You get access to top-tier developers, QA engineers, designers, and DevOps experts who are aligned with your tech stack and culture. It’s ideal for long-term projects, evolving product requirements, or companies without in-house engineering teams. Scale up or down anytime based on project needs—without compromising quality or speed."
    ],
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
        title: "Frontend Developers",
        desc: "Angular, React, Next, Svelte, JavaScript, HTML, CSS, TailwindCSS, Bootstrap."
      },
      {
        title: "Backend Developers",
        desc: "Node, Express, Python, Django, FastAPI."
      },
      {
        title: "Full Stack Developers",
        desc: "MERN Stack, MEAN stack, Next.js full-stack."
      },
      {
        title: "Mobile App Developers",
        desc: "Flutter, React Native, Swift, Kotlin."
      },
      {
        title: "DevOps Engineers",
        desc: "AWS, Azure, CI/CD, Docker, Kubernetes."
      },
      {
        title: "QA Engineers",
        desc: "Manual/Automation Testing, Selenium, Cypress."
      },
      {
        title: "AI/ML Engineers",
        desc: "Python, TensorFlow, model training, MLOps."
      }
    ],
    technologies: [
      "React", "Next", "Angular", "HTML", "TailwindCSS", "Bootstrap",
      "Node", "Express", "Django", "Python",
      "PostgreSQL", "MS SQL", "MongoDB", "Firebase", "Supabase",
      "Strapi", "Sanity", "Contentful",
      "googleCloud", "microsoft-azure", "Netlify", "Vercel", "Docker", "GitLab"
    ],
    deliverables: [
      "Direct Developer Access & Dedicated Workstation",
      "Integration into your GitHub & Project Management Tools",
      "Daily Work Logs & Bi-Weekly Sprint Reports",
      "Signed Non-Disclosure Agreements (NDA) & IP Assignment",
      "Dedicated Technical Account Manager"
    ],
    process: [
      { step: "01", title: "Requirement & Skill Profiling", desc: "We evaluate your project scope, technology stack, experience level needed, and preferred communication cadence." },
      { step: "02", title: "Candidate Shortlisting (Within 48h)", desc: "We shortlist vetted senior developers from our bench who match your technical criteria and timezone requirements." },
      { step: "03", title: "Direct Technical Interview", desc: "You interview candidates directly, conduct live coding challenges or architectural walkthroughs to ensure the perfect fit." },
      { step: "04", title: "Smooth Onboarding & Tooling", desc: "We handle NDA signing, device provisioning, GitHub/Jira access, and sprint setup for instant productivity." },
      { step: "05", title: "Dedicated Sprint Execution", desc: "Your dedicated team works exclusively on your roadmap with daily standups, weekly demos, and complete transparency." },
      { step: "06", title: "Elastic Scaling & Dedicated HR Support", desc: "Easily scale team size up or down with flexible models (Hourly, Part Time, Full Time) and zero administrative hassle." }
    ],
    processSla: "With flexible engagement models (Hourly, Part-Time, or Full-Time), dedicated project management, and direct developer communication, we ensure fast onboarding within 48 hours and 100% intellectual property ownership from day one.",
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

