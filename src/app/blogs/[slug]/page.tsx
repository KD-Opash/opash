import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogsData } from "@/data/blogs";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Sparkles, 
  ArrowRight, 
  Share2, 
  CheckCircle2 
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Post | Opash Software" };

  return {
    title: `${post.title} | Opash Software Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background glow */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #476D9A 0%, transparent 70%)",
        }}
      />

      <article style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          {/* Back link */}
          <Link
            href="/blogs"
            className="flex items-center gap-2"
            style={{
              color: "var(--color-cyan)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              marginBottom: "2rem",
              display: "inline-flex",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>

          {/* Post Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="badge-glow" style={{ marginBottom: "1rem" }}>
              {post.category}
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2, marginTop: "0.75rem", marginBottom: "1.25rem" }}>
              {post.title}
            </h1>

            {/* Author info & date bar */}
            <div
              className="flex items-center justify-between flex-wrap gap-4"
              style={{
                borderTop: "1px solid var(--border-subtle)",
                borderBottom: "1px solid var(--border-subtle)",
                padding: "1rem 0",
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #476D9A, #5EC098)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  {post.author.avatar}
                </div>
                <div>
                  <div style={{ color: "var(--text-primary)", fontWeight: 600 }}>{post.author.name}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar size={15} color="var(--color-cyan)" />
                  <span>{post.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={15} color="var(--color-cyan)" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Article Excerpt Callout */}
          <div
            style={{
              padding: "1.5rem 2rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--bg-elevated)",
              borderLeft: "4px solid var(--color-cyan)",
              marginBottom: "3rem",
              fontSize: "1.1rem",
              color: "var(--text-primary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            {post.excerpt}
          </div>

          {/* Body Content */}
          <div
            style={{
              color: "var(--text-primary)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              marginBottom: "4rem",
            }}
          >
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem", marginBottom: "4rem" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.75rem", textTransform: "uppercase", fontWeight: 700 }}>
              Topics & Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--color-cyan)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio Box */}
          <div
            className="glass-panel"
            style={{
              padding: "2.5rem",
              marginBottom: "4rem",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div className="flex items-center gap-4" style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #476D9A, #5EC098)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                {post.author.avatar}
              </div>
              <div>
                <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.15rem" }}>
                  Written by {post.author.name}
                </div>
                <div style={{ color: "var(--color-cyan)", fontSize: "0.85rem" }}>
                  {post.author.role} • Opash Software
                </div>
              </div>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              At Opash Software, we lead engineering teams across modern web frameworks, AI agent workflows, and distributed cloud microservices. Have questions about implementing these architectural patterns in your product? Reach out to our engineering team directly.
            </p>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div style={{ marginBottom: "5rem" }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.75rem" }}>
                More Architecture Insights
              </h3>
              <div className="grid-cols-2" style={{ gap: "1.5rem" }}>
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.slug}
                    className="glass-panel"
                    style={{ padding: "1.75rem" }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "var(--color-cyan)", fontWeight: 700 }}>
                      {rel.category}
                    </span>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "0.4rem", marginBottom: "0.6rem" }}>
                      <Link href={`/blogs/${rel.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {rel.title}
                      </Link>
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                      {rel.excerpt.slice(0, 90)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Box */}
          <ContactForm />
        </div>
      </article>
    </div>
  );
}
