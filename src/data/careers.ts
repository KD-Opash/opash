export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const careersData = {
  headline: "Let Your Career Take Flight With Opash Software",
  subheadline: "Join a passionate collective of engineers, creators, and innovators engineering world-class software for global brands.",
  cultureHighlights: [
    { title: "Continuous Learning", desc: "Annual education budgets, conference stipends, and access to premium tech masterclasses." },
    { title: "Work-Life Harmony", desc: "Flexible hours, hybrid schedules, and a collaborative vibe that values productivity without burnout." },
    { title: "Global Client Exposure", desc: "Build enterprise software directly for clients across North America, Europe, UAE, and APAC." },
    { title: "Cutting-Edge Tech Stack", desc: "Work on Next.js, AI/ML, Cloud Kubernetes, Flutter, and distributed microservices daily." }
  ],
  perks: [
    { icon: "Laptop", title: "High-End Gear", desc: "Top-tier MacBook Pro or high-performance workstations with dual 4K monitors." },
    { icon: "TrendingUp", title: "Merit-Based Growth", desc: "Bi-annual performance evaluations with rapid promotional tracks for top performers." },
    { icon: "Coffee", title: "Vibrant Work Culture", desc: "Team outings, gaming tournaments, celebratory hackathons, and endless gourmet coffee." },
    { icon: "Shield", title: "Comprehensive Health", desc: "Comprehensive health insurance covering you and your immediate family members." },
    { icon: "Clock", title: "Paid Time Off", desc: "Generous vacation policies, festive holidays, sick leave, and parental leave." },
    { icon: "Award", title: "Recognition Bonuses", desc: "Spot awards and quarterly bonuses celebrating innovation, code quality, and peer mentorship." }
  ],
  openings: [
    {
      id: "sr-fullstack-dev",
      title: "Senior Full-Stack Engineer (React / Node.js)",
      department: "Engineering",
      location: "Surat, Gujarat (Hybrid / On-Site)",
      type: "Full-Time",
      experience: "4 - 7 Years",
      description: "We are looking for an experienced Senior Full-Stack Engineer to lead the architecture and implementation of scalable web platforms using Next.js, Node.js, and PostgreSQL.",
      responsibilities: [
        "Architect clean, maintainable microservice backends and responsive Next.js frontends.",
        "Mentor junior and mid-level engineers through detailed code reviews and architectural whiteboarding.",
        "Collaborate directly with global clients during sprint planning and technical design reviews.",
        "Implement automated CI/CD pipelines and unit/integration test suites."
      ],
      requirements: [
        "4+ years of professional experience with React/Next.js and Node.js/NestJS.",
        "Deep understanding of relational database design (PostgreSQL/MySQL) and caching (Redis).",
        "Proficiency in TypeScript, RESTful APIs, GraphQL, and Docker containers.",
        "Strong verbal and written English communication skills for international client interaction."
      ]
    },
    {
      id: "ai-ml-engineer",
      title: "AI / ML & LLM Solutions Engineer",
      department: "AI Innovation Lab",
      location: "Surat, Gujarat (Hybrid / On-Site)",
      type: "Full-Time",
      experience: "2 - 5 Years",
      description: "Join our emerging AI team to build production-grade Retrieval-Augmented Generation (RAG) pipelines, autonomous agent workflows, and private fine-tuned LLM services.",
      responsibilities: [
        "Design RAG architectures connecting vector databases (Pinecone, Qdrant) with enterprise data sources.",
        "Build autonomous multi-agent workflows using LangChain, LlamaIndex, and modern Python frameworks.",
        "Benchmark model latency, token costs, hallucination rates, and prompt performance.",
        "Expose secure, authenticated model inference endpoints using FastAPI and Docker."
      ],
      requirements: [
        "Hands-on experience with Python, PyTorch, OpenAI API, LangChain, and vector embeddings.",
        "Knowledge of open-source LLMs (Llama 3, Mistral) and quantization/fine-tuning techniques.",
        "Experience building high-throughput FastAPI or Flask backends.",
        "Strong algorithmic problem-solving ability."
      ]
    },
    {
      id: "mobile-dev-flutter",
      title: "Mobile App Developer (Flutter & React Native)",
      department: "Mobile Engineering",
      location: "Surat, Gujarat (Hybrid / On-Site)",
      type: "Full-Time",
      experience: "2 - 4 Years",
      description: "Build silky smooth 60fps cross-platform mobile apps for iOS and Android with clean state management, offline support, and native module bridges.",
      responsibilities: [
        "Develop high-performance Flutter and React Native mobile applications.",
        "Implement offline-first local storage, SQLite/Hive caches, and background sync.",
        "Integrate push notifications (FCM/APNs), in-app purchases, and payment gateways.",
        "Prepare App Store and Google Play Store build submissions and manage release tracks."
      ],
      requirements: [
        "2+ years of production experience in Flutter (Dart) and/or React Native (TypeScript).",
        "Deep familiarity with state management (BLoC, Riverpod, Redux, or Zustand).",
        "Understanding of iOS Human Interface Guidelines and Google Material Design.",
        "Experience publishing apps to Google Play Store and Apple App Store."
      ]
    },
    {
      id: "qa-automation-engineer",
      title: "QA Automation Engineer (Playwright / Cypress)",
      department: "Quality Assurance",
      location: "Surat, Gujarat (Hybrid / On-Site)",
      type: "Full-Time",
      experience: "2 - 4 Years",
      description: "Ensure zero-defect releases by architecting automated end-to-end regression test suites, load tests, and security scans for web and API platforms.",
      responsibilities: [
        "Write robust automated E2E test scripts using Playwright or Cypress in TypeScript.",
        "Integrate automated test runs into GitHub Actions pipelines as mandatory merge gates.",
        "Conduct load testing and stress benchmarking with k6 and JMeter.",
        "Collaborate with developers to diagnose and reproduce edge-case bugs."
      ],
      requirements: [
        "2+ years of automated testing experience with Playwright, Cypress, or Selenium.",
        "Solid foundation in JavaScript/TypeScript and API testing (Postman, REST Assured).",
        "Experience with CI/CD integration and test reporting dashboards.",
        "Meticulous attention to detail and proactive testing mindset."
      ]
    },
    {
      id: "software-engineer-intern",
      title: "Software Engineering Intern / Fresher",
      department: "Early Careers",
      location: "Surat, Gujarat (On-Site)",
      type: "Full-Time Internship",
      experience: "Fresher / 0 - 1 Year",
      description: "A fast-track 6-month intensive engineering internship with 1-on-1 senior mentorship, real-world project contributions, and full-time conversion opportunities.",
      responsibilities: [
        "Participate in daily agile standups and learn modern code standards.",
        "Build modular React and Node.js components under senior developer guidance.",
        "Write clean unit tests and learn Git workflows in production repositories."
      ],
      requirements: [
        "B.Tech / B.E. / BCA / MCA in Computer Science, IT, or related fields.",
        "Strong fundamentals in Data Structures, Algorithms, JavaScript, and HTML/CSS.",
        "High passion for learning, problem-solving, and building software that matters."
      ]
    }
  ] as JobOpening[]
};
