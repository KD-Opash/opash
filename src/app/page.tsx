"use client";

import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function StatCounter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });

  React.useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * value));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Star,
  Award,
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  Cpu,
  Zap,
  Users,
  Clock,
  Puzzle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Building2,
  Lock,
  Headphones,
  Check,
  X,
} from "lucide-react";
import { companyData } from "@/data/company";
import DigitalPillarHero from "@/components/DigitalPillarHero";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/case-studies";
import { industriesData } from "@/data/industries";
import { blogsData } from "@/data/blogs";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";
import { Boxes } from "@/components/ui/background-boxes";
import CinematicImpactSection from "@/components/CinematicImpactSection";
import { ClockServicesShowcase } from "@/components/ClockServicesShowcase";
import { InteractiveIndustriesBento } from "@/components/InteractiveIndustriesBento";
import { TechStackShowcase } from "@/components/TechStackShowcase";

export default function HomePage() {
  const serviceIcons = {
    "custom-software": Code2,
    "web-development": Globe,
    "mobile-development": Smartphone,
    "ai-ml-solutions": BrainCircuit,
    "saas-development": Cloud,
    "api-integration": Cpu,
    "qa-testing": ShieldCheck,
    "hire-developers": Users,
  };

  return (
    <div
      className="bg-grid-pattern"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background Ambient Orbs */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #476D9A 0%, transparent 70%)",
        }}
      />
      <div
        className="ambient-glow-orb"
        style={{
          top: "800px",
          right: "-100px",
          background: "radial-gradient(circle, #5EC098 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 1: 3D DIGITAL PILLAR HERO (Title, Buttons, 3D Earth) */}
      {/* ========================================================= */}
      <DigitalPillarHero />

      {/* ========================================================= */}
      {/* SECTION 2: CINEMATIC ANIMATED IMPACT & STATISTICS         */}
      {/* ========================================================= */}
      <CinematicImpactSection />

      {/* ========================================================= */}
      {/* SECTION 3: SERVICES SHOWCASE */}
      {/* ========================================================= */}
      <ClockServicesShowcase />

      {/* ========================================================= */}
      {/* SECTION 4: INDUSTRIES WE SPECIALIZE IN (3D BENTO GRID)    */}
      {/* ========================================================= */}
      <InteractiveIndustriesBento />

      {/* ========================================================= */}
      {/* SECTION 5: TECHNOLOGIES & PLATFORMS WE WORK WITH          */}
      {/* ========================================================= */}
      <TechStackShowcase />


      {/* ========================================================= */}
      {/* SECTION 5: VERIFIED CLIENT WORK & CASE STUDIES */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="flex justify-between items-end flex-wrap gap-4"
            style={{ marginBottom: "3.5rem" }}
          >
            <div>
              <h2 className="heading-section">
                Featured Client Success Stories
              </h2>
            </div>
            <Link href="/portfolio" className="btn-secondary">
              <span>View All Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {caseStudiesData.slice(0, 3).map((cs) => (
              <div
                key={cs.id}
                className="interactive-card flex flex-col justify-between">
                <div>
                  <div
                    className="flex justify-between items-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    <span
                      style={{
                        color: "var(--color-cyan)",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {cs.domain}
                    </span>
                    <a
                      href={cs.website}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--text-muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: "0.8rem",
                        textDecoration: "none",
                      }}
                    >
                      <span>{cs.client}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {cs.headline}
                  </h3>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {cs.summary}
                  </p>

                  {/* Metrics Row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                      backgroundColor: "var(--bg-elevated)",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: 800,
                          color: "var(--color-cyan)",
                        }}
                      >
                        {cs.results[0].metric}
                      </div>
                      <div
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.75rem",
                        }}
                      >
                        {cs.results[0].label}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: 800,
                          color: "#10b981",
                        }}
                      >
                        {cs.results[1].metric}
                      </div>
                      <div
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.75rem",
                        }}
                      >
                        {cs.results[1].label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      marginBottom: "0.75rem",
                    }}
                  >
                    &ldquo;{cs.testimonial.quote.slice(0, 110)}...&rdquo;
                  </p>
                  <div
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                    }}
                  >
                    — {cs.testimonial.author}, {cs.testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 7: WHY CHOOSE OPASH - COMPARISON MATRIX */}
      {/* ========================================================= */}
      <section
        className="section-alt"
        style={{
          padding: "5.5rem 0",
        }}
      >
        <div className="container-custom">
          <div
            style={{
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 4rem auto",
            }}
          >
            <h2 className="heading-section">Why Global Brands Choose Us</h2>
            <p className="subhead-lead" style={{ marginTop: "0.75rem" }}>
              How an Opash dedicated agile squad compares to traditional
              outsourcing agencies and fragmented freelance marketplaces.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{ overflowX: "auto", padding: "1.5rem" }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "680px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-medium)" }}>
                  <th
                    style={{
                      padding: "1.25rem",
                      textAlign: "left",
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Key Engineering Metric
                  </th>
                  <th
                    style={{
                      padding: "1.25rem",
                      textAlign: "center",
                      color: "var(--color-cyan)",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    ⚡ Opash Software Squad
                  </th>
                  <th
                    style={{
                      padding: "1.25rem",
                      textAlign: "center",
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Generic Outsourcing Agency
                  </th>
                  <th
                    style={{
                      padding: "1.25rem",
                      textAlign: "center",
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Freelance Portals
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    metric: "Code & IP Rights Ownership",
                    opash: "100% Yours from Day 1",
                    agency: "Often restricted or licensed",
                    freelancers: "Unclear ownership / disputed",
                  },
                  {
                    metric: "Seniority & Vetting Standard",
                    opash: "Top 3% Pre-Screened Senior Devs",
                    agency: "Junior developers with senior markups",
                    freelancers: "Inconsistent quality / ghosting risk",
                  },
                  {
                    metric: "Delivery Velocity",
                    opash: "2-Week Agile Sprints with Live Demos",
                    agency: "Monthly slow waterfall reviews",
                    freelancers: "Unpredictable hours & availability",
                  },
                  {
                    metric: "Post-Launch Warranty & SLA",
                    opash: "30-Day Free Warranty + 24/7 SLA",
                    agency: "High billable hourly support",
                    freelancers: "Zero post-project support",
                  },
                  {
                    metric: "Timezone Alignment",
                    opash: "4+ Hours Synchronous US/EU Overlap",
                    agency: "Rigid local hours only",
                    freelancers: "Disjointed & delayed replies",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: "1px solid var(--border-subtle)",
                      backgroundColor:
                        idx % 2 === 0 ? "var(--bg-elevated)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "1.2rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {row.metric}
                    </td>
                    <td
                      style={{
                        padding: "1.2rem",
                        textAlign: "center",
                        color: "#10b981",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        backgroundColor: "rgba(16, 185, 129, 0.06)",
                      }}
                    >
                      ✓ {row.opash}
                    </td>
                    <td
                      style={{
                        padding: "1.2rem",
                        textAlign: "center",
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                      }}
                    >
                      {row.agency}
                    </td>
                    <td
                      style={{
                        padding: "1.2rem",
                        textAlign: "center",
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                      }}
                    >
                      {row.freelancers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>



      {/* ========================================================= */}
      {/* SECTION 9: CLIENT TESTIMONIALS SLIDER */}
      {/* ========================================================= */}
      <section
        className="section-alt"
        style={{
          padding: "5.5rem 0",
        }}
      >
        <div className="container-custom">
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 3.5rem auto",
            }}
          >
            <h2 className="heading-section">
              Verified Feedback From Founders & CTOs
            </h2>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: LEADERSHIP & FOUNDER'S NOTE */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="glass-panel cta-banner-box"
            style={{
              padding: "3.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "3rem",
              }}
              className="founder-grid"
            >
              <div>
                <h2
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    marginTop: "0",
                    marginBottom: "0.5rem",
                  }}
                >
                  Meet Our Founder & CEO
                </h2>
                <div
                  style={{
                    color: "var(--color-cyan)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  {companyData.ceo.name} — {companyData.ceo.experience}
                </div>

                <blockquote
                  style={{
                    borderLeft: "3px solid var(--color-cyan)",
                    paddingLeft: "1.25rem",
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    marginBottom: "1.75rem",
                  }}
                >
                  &ldquo;{companyData.ceo.quote}&rdquo;
                </blockquote>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.75rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {companyData.ceo.bio}
                </p>

                <div
                  className="flex flex-wrap gap-2"
                  style={{ marginBottom: "2rem" }}
                >
                  {companyData.ceo.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.3rem 0.8rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--bg-elevated)",
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={`mailto:${companyData.ceo.email}`}
                    className="btn-primary"
                    style={{ padding: "0.85rem 1.75rem" }}
                  >
                    <span>Connect with Hiren</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={companyData.ceo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: "0.85rem 1.5rem" }}
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Founder Graphic Card */}
              <div
                className="founder-graphic-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "2.5rem",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                <div
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #476D9A, #5EC098)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    boxShadow: "0 0 35px rgba(71, 109, 154, 0.5)",
                  }}
                >
                  HD
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  {companyData.ceo.name}
                </h3>
                <div
                  style={{
                    color: "var(--color-cyan)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    marginTop: "0.25rem",
                  }}
                >
                  Founder & CEO
                </div>
                <div
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Opash Software • Surat, India
                </div>

                <div
                  style={{
                    marginTop: "1.75rem",
                    padding: "1rem",
                    width: "100%",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Direct Email: <br />
                  <strong style={{ color: "var(--text-primary)" }}>
                    {companyData.ceo.email}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: TECH INSIGHTS / BLOGS */}
      {/* ========================================================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            className="flex justify-between items-end flex-wrap gap-4"
            style={{ marginBottom: "3.5rem" }}
          >
            <div>
              <h2 className="heading-section">Tech Insights by Opash</h2>
            </div>
            <Link href="/blogs" className="btn-secondary">
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {blogsData.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                className="interactive-card flex flex-col justify-between"
              >
                <div>
                  <div
                    className="flex justify-between items-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-cyan)",
                        fontWeight: 700,
                        backgroundColor: "rgba(94, 192, 152, 0.12)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      lineHeight: 1.4,
                    }}
                  >
                    <Link
                      href={`/blogs/${post.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div
                  className="flex justify-between items-center"
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    By {post.author.name} • {post.date}
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    style={{
                      color: "var(--color-cyan)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <span>Read Full</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12: CONTACT & PROPOSAL HUB */}
      {/* ========================================================= */}
      <section
        id="contact-section"
        className="section-alt"
        style={{
          padding: "6rem 0",
        }}
      >
        <div className="container-custom">
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
