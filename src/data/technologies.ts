export interface TechCategory {
  id: string;
  name: string;
  description: string;
  items: {
    name: string;
    description: string;
    badge: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    id: "frontend",
    name: "Front End",
    description: "Modern, responsive, and blazing-fast user interfaces designed with component-driven architectures.",
    items: [
      { name: "React", description: "Interactive Single Page Applications & custom component systems", badge: "Core" },
      { name: "Next.js", description: "SSR, Static generation, edge rendering & SEO perfection", badge: "Primary" },
      { name: "Angular", description: "Robust enterprise SPAs with TypeScript & RxJS state management", badge: "Enterprise" },
      { name: "TypeScript", description: "Strict typing, predictable codebases & bug prevention", badge: "Standard" },
      { name: "TailwindCSS", description: "Modern, scalable utility-first design systems & dark modes", badge: "UI/UX" },
      { name: "Svelte / Vue", description: "Lightweight reactive interfaces with minimal bundle size", badge: "Modern" },
      { name: "HTML5 / CSS3", description: "Semantic markup, CSS Grid, Flexbox & smooth keyframes", badge: "Foundation" }
    ]
  },
  {
    id: "backend",
    name: "Back End",
    description: "Resilient server-side architectures, microservices, and asynchronous event streams.",
    items: [
      { name: "Node.js", description: "High-concurrency asynchronous runtime for scalable web backends", badge: "Core" },
      { name: "Nest.js", description: "Enterprise TypeScript architecture following modular clean code", badge: "Enterprise" },
      { name: "Python", description: "High-speed scientific computing, AI orchestration & data pipelines", badge: "AI / Core" },
      { name: "Django / FastAPI", description: "Batteries-included web frameworks & lightning-fast REST APIs", badge: "Backend" },
      { name: "Go (Golang)", description: "Ultra-low-latency microservices with minimal memory footprints", badge: "High-Perf" },
      { name: "GraphQL", description: "Flexible data querying eliminating over-fetching and multiple calls", badge: "API" },
      { name: "RESTful APIs", description: "Standardized OpenAPI specifications with strict authentication", badge: "Standard" }
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    description: "Silky-smooth native and cross-platform apps for iOS and Android.",
    items: [
      { name: "React Native", description: "Cross-platform iOS and Android apps with 90% shared code", badge: "Primary" },
      { name: "Flutter", description: "Google's UI toolkit compiling to native ARM machine code", badge: "Cross-Platform" },
      { name: "Swift / iOS", description: "Native iOS apps taking full advantage of Apple silicon & hardware", badge: "Native" },
      { name: "Kotlin / Android", description: "Modern, concise native Android applications with Jetpack Compose", badge: "Native" },
      { name: "Firebase", description: "Realtime databases, crashlytics, and push notification infrastructure", badge: "Mobile Cloud" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Generative AI, Large Language Model orchestration, vector embeddings, and computer vision.",
    items: [
      { name: "OpenAI & Claude APIs", description: "Integration of GPT-4o and Claude 3.5 Sonnet into business workflows", badge: "GenAI" },
      { name: "LangChain & LlamaIndex", description: "Orchestration frameworks for intelligent RAG and autonomous agents", badge: "Agents" },
      { name: "PyTorch & TensorFlow", description: "Custom neural network training, classification, and fine-tuning", badge: "Deep Learning" },
      { name: "Pinecone / Qdrant", description: "High-speed vector databases for semantic document search", badge: "Vector DB" },
      { name: "Hugging Face & Llama 3", description: "Open-source LLM hosting in private clouds for total data privacy", badge: "Private AI" }
    ]
  },
  {
    id: "database",
    name: "Database & Cache",
    description: "Airtight relational databases, scalable NoSQL document stores, and in-memory caches.",
    items: [
      { name: "PostgreSQL", description: "ACID-compliant relational database with JSONB and Row-Level Security", badge: "Primary SQL" },
      { name: "MongoDB", description: "Flexible document database for high-velocity schemas", badge: "NoSQL" },
      { name: "Redis", description: "Sub-millisecond caching, rate-limiting counters & distributed queues", badge: "In-Memory" },
      { name: "MySQL / MS SQL", description: "Battle-tested relational engines for enterprise legacy stacks", badge: "Relational" },
      { name: "DynamoDB", description: "AWS serverless key-value store with infinite horizontal scale", badge: "Cloud DB" }
    ]
  },
  {
    id: "devops-cloud",
    name: "Cloud & DevOps",
    description: "Automated CI/CD pipelines, container orchestration, and multi-region cloud infrastructure.",
    items: [
      { name: "Amazon Web Services (AWS)", description: "ECS, Lambda, S3, RDS, CloudFront & VPC architectures", badge: "Cloud Leader" },
      { name: "Google Cloud (GCP)", description: "BigQuery, Cloud Run, Kubernetes Engine & Vertex AI", badge: "Cloud" },
      { name: "Docker", description: "Containerized application packaging ensuring identical environments", badge: "Containers" },
      { name: "Kubernetes (K8s)", description: "Automated scaling, self-healing, and declarative orchestration", badge: "Orchestration" },
      { name: "GitHub Actions & Jenkins", description: "Automated unit tests, linting, security scans & CD deployments", badge: "CI/CD" },
      { name: "Terraform", description: "Infrastructure as Code (IaC) version-controlled in Git", badge: "IaC" }
    ]
  },
  {
    id: "qa",
    name: "Testing & QA",
    description: "Zero-defect quality assurance, automated regression suites, and load benchmarks.",
    items: [
      { name: "Playwright & Cypress", description: "Fast, reliable end-to-end browser automation and visual regression", badge: "E2E" },
      { name: "Jest & Vitest", description: "Blazing fast unit test runners for React, Node, and TypeScript", badge: "Unit" },
      { name: "k6 & JMeter", description: "Load and stress testing simulating tens of thousands of users", badge: "Performance" },
      { name: "Postman", description: "Automated API contract testing and mock servers", badge: "API QA" },
      { name: "SonarQube", description: "Automated code quality, security vulnerabilities, and code smell analysis", badge: "Security" }
    ]
  }
];
