import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudiesData, CaseStudy } from "@/data/case-studies";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  Clock,
  Globe,
  Quote
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

async function fetchProject(slug: string): Promise<CaseStudy | undefined> {
  const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || process.env.HRMS_API_URL;
  if (apiUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      const res = await fetch(`${apiUrl}/api/portfolio/public/${slug}`, {
        signal: controller.signal,
        next: { revalidate: 30 },
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          return json.data;
        }
      }
    } catch {
      // Admin backend offline - fallback to local case study
    }
  }

  return caseStudiesData.find((p) => p.slug === slug || p.id === slug);
}

export async function generateStaticParams() {
  return caseStudiesData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    return {
      title: "Portfolio Case Study | Opash Software",
      description: "Explore enterprise architectures engineered by Opash Software.",
    };
  }

  return {
    title: `${project.client} Case Study | ${project.headline} | Opash Software`,
    description: project.summary,
    openGraph: {
      title: `${project.client} - ${project.headline}`,
      description: project.summary,
      url: `https://opashsoftware.com/portfolio/${project.slug}`,
      siteName: "Opash Software",
    },
  };
}

function PortfolioLoadingFallback() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-main, #020712)",
        color: "var(--text-primary, #f8fafc)",
        paddingTop: "7.5rem",
        paddingBottom: "5rem",
      }}
    >
      <div className="container-custom" style={{ maxWidth: "1200px" }}>
        <div style={{ height: "24px", width: "160px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "8px", marginBottom: "2rem" }} />
        <div style={{ height: "48px", width: "70%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "12px", marginBottom: "1.5rem" }} />
        <div style={{ height: "20px", width: "45%", background: "rgba(255, 255, 255, 0.06)", borderRadius: "6px", marginBottom: "3rem" }} />
        <div style={{ height: "360px", width: "100%", background: "rgba(255, 255, 255, 0.04)", borderRadius: "16px" }} />
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ params }: Props) {
  return (
    <React.Suspense fallback={<PortfolioLoadingFallback />}>
      <ProjectDetailContent params={params} />
    </React.Suspense>
  );
}

async function ProjectDetailContent({ params }: Props) {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = caseStudiesData.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-main, #020712)",
        color: "var(--text-primary, #f8fafc)",
        overflowX: "clip",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(0, 168, 143, 0.22) 0%, rgba(45, 212, 191, 0.08) 50%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <article style={{ position: "relative", zIndex: 1, paddingTop: "7.5rem", paddingBottom: "6rem" }}>
        <div className="container-custom" style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          {/* Back Navigation Bar */}
          <div style={{ marginBottom: "2.5rem" }}>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#2dd4bf",
                textDecoration: "none",
                fontSize: "0.92rem",
                fontWeight: 700,
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                background: "rgba(45, 212, 191, 0.08)",
                border: "1px solid rgba(45, 212, 191, 0.2)",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Portfolio Projects</span>
            </Link>
          </div>

          {/* Hero Header */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span
                style={{
                  padding: "0.35rem 0.95rem",
                  borderRadius: "9999px",
                  background: "rgba(0, 187, 171, 0.16)",
                  color: "#2dd4bf",
                  fontSize: "0.84rem",
                  fontWeight: 750,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  border: "1px solid rgba(0, 187, 171, 0.25)",
                }}
              >
                {project.domain}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.85rem",
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} color="#2dd4bf" />
                <span>Production Verified Deliverable</span>
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
                fontSize: "clamp(1.85rem, 3.2vw, 39px)",
                fontWeight: 400,
                lineHeight: 1.18,
                letterSpacing: "-0.015em",
                marginBottom: "1.25rem",
              }}
            >
              {project.headline}
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1.25rem",
                padding: "1.25rem 0",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>
                  Client Partner
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginTop: "2px" }}>
                  {project.client}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.65rem 1.35rem",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #008a75 0%, #00a88f 100%)",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      boxShadow: "0 4px 18px rgba(0, 168, 143, 0.35)",
                    }}
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Results Telemetry Matrix */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              marginBottom: "3.5rem",
            }}
          >
            {project.results.map((res, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.75rem 1.5rem",
                  borderRadius: "18px",
                  background: "rgba(10, 20, 36, 0.75)",
                  border: "1px solid rgba(45, 212, 191, 0.2)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #00a88f, #2dd4bf)" }} />
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#2dd4bf", lineHeight: 1.1, marginBottom: "0.4rem" }}>
                  {res.metric}
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 650, color: "#cbd5e1" }}>
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          {/* Executive Overview */}
          <div
            style={{
              padding: "2.25rem",
              borderRadius: "20px",
              background: "rgba(10, 20, 36, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              marginBottom: "3.5rem",
            }}
          >
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.85rem", color: "#ffffff" }}>
              Executive Summary & Business Context
            </h2>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.75, margin: 0 }}>
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Architecture Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "2rem",
              marginBottom: "3.5rem",
            }}
          >
            {/* The Challenge */}
            <div
              style={{
                padding: "2.25rem",
                borderRadius: "20px",
                background: "rgba(239, 68, 68, 0.05)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                borderLeft: "5px solid #ef4444",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", color: "#ef4444", letterSpacing: "0.05em" }}>
                  The Architectural Challenge
                </span>
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                {project.challenge}
              </p>
            </div>

            {/* The Engineered Solution */}
            <div
              style={{
                padding: "2.25rem",
                borderRadius: "20px",
                background: "rgba(0, 168, 143, 0.06)",
                border: "1px solid rgba(0, 168, 143, 0.25)",
                borderLeft: "5px solid #2dd4bf",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", color: "#2dd4bf", letterSpacing: "0.05em" }}>
                  The Opash Solution
                </span>
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div
            style={{
              padding: "2.25rem",
              borderRadius: "20px",
              background: "rgba(10, 20, 36, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              marginBottom: "3.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <Cpu size={20} color="#2dd4bf" />
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, margin: 0 }}>
                Technologies & Infrastructure Stack
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.55rem 1.15rem",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#f8fafc",
                    fontSize: "0.92rem",
                    fontWeight: 650,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial Box */}
          {project.testimonial && (
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "22px",
                background: "linear-gradient(145deg, rgba(14, 27, 45, 0.85) 0%, rgba(7, 16, 28, 0.95) 100%)",
                border: "1px solid rgba(45, 212, 191, 0.25)",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.4)",
                marginBottom: "4.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.3rem", color: "#f59e0b", marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" />
                ))}
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                  lineHeight: 1.7,
                  color: "#f1f5f9",
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#ffffff" }}>
                  {project.testimonial.author}
                </div>
                <div style={{ color: "#2dd4bf", fontSize: "0.88rem", fontWeight: 600 }}>
                  {project.testimonial.role} &bull; {project.testimonial.company}
                </div>
              </div>
            </div>
          )}

          {/* Related Projects */}
          {otherProjects.length > 0 && (
            <div style={{ marginBottom: "5rem" }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1.5rem" }}>
                Explore More Featured Platforms
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                {otherProjects.map((rel) => (
                  <div
                    key={rel.slug}
                    style={{
                      padding: "2rem",
                      borderRadius: "18px",
                      background: "rgba(10, 20, 36, 0.65)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#2dd4bf", textTransform: "uppercase" }}>
                        {rel.domain}
                      </span>
                      <h4 style={{ fontSize: "1.25rem", fontWeight: 800, margin: "0.5rem 0 0.75rem 0" }}>
                        {rel.client}
                      </h4>
                      <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                        {rel.headline}
                      </p>
                    </div>

                    <Link
                      href={`/portfolio/${rel.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        color: "#2dd4bf",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Estimator & Contact Box */}
          <div style={{ marginTop: "2rem" }}>
            <ContactForm />
          </div>

        </div>
      </article>
    </div>
  );
}
