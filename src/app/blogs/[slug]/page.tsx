import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogsData, BlogPost } from "@/data/blogs";
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

async function fetchPost(slug: string): Promise<BlogPost | undefined> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || "http://localhost:3001";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);
    const res = await fetch(`${apiUrl}/api/blogs/public/${slug}`, {
      signal: controller.signal,
      next: { revalidate: 30 },
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const item = json.data;
        return {
          slug: item.slug,
          title: item.title,
          excerpt: item.excerpt,
          category: item.category || "Full-Stack Architecture",
          readTime: item.readTime || "5 min read",
          date: item.publishedAt
            ? new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
            : "Recent",
          author: {
            name: item.author?.name || "Hiren Danecha",
            role: item.author?.role || "CEO & Tech Strategist",
            avatar: item.author?.avatar || "/images/image.webp",
          },
          tags: Array.isArray(item.tags) ? item.tags : ["Engineering", "Technology"],
          content: Array.isArray(item.content) ? item.content : [],
          coverImage: item.coverImage || "",
        };
      }
    }
  } catch (err) {
    console.warn("NextHRMS blog detail fetch error, using fallback:", err);
  }
  return blogsData.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
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

function BlogLoadingFallback() {
  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      <article style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          <div style={{ height: "24px", width: "160px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "8px", marginBottom: "2rem" }} />
          <div style={{ height: "48px", width: "80%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "12px", marginBottom: "1.5rem" }} />
          <div style={{ height: "20px", width: "50%", background: "rgba(255, 255, 255, 0.06)", borderRadius: "6px", marginBottom: "3rem" }} />
          <div style={{ height: "300px", width: "100%", background: "rgba(255, 255, 255, 0.04)", borderRadius: "16px" }} />
        </div>
      </article>
    </div>
  );
}

export default function BlogPostPage({ params }: Props) {
  return (
    <React.Suspense fallback={<BlogLoadingFallback />}>
      <BlogPostContent params={params} />
    </React.Suspense>
  );
}

async function BlogPostContent({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData.filter((p) => p.slug !== slug).slice(0, 2);

  const resolveImageUrl = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("/uploads/")) {
      const hrmsBase = process.env.NEXT_PUBLIC_HRMS_API_URL || "http://localhost:3001";
      return `${hrmsBase}${url}`;
    }
    return url;
  };

  const parseInlineMarkup = (text: string) => {
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (part.startsWith("[") && part.includes("](")) {
        const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (match) {
          return (
            <a
              key={i}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-cyan)", textDecoration: "underline", fontWeight: 600 }}
            >
              {match[1]}
            </a>
          );
        }
      }
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        return <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
        return <em key={i} style={{ fontStyle: "italic" }}>{part.slice(1, -1)}</em>;
      }
      if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
        return (
          <code
            key={i}
            style={{
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              padding: "0.15rem 0.45rem",
              borderRadius: "4px",
              fontSize: "0.9em",
              color: "var(--color-cyan)",
              fontFamily: "monospace",
            }}
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

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
                    position: "relative",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #476D9A, #5EC098)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#ffffff",
                    flexShrink: 0,
                  }}
                >
                  {post.author.avatar.startsWith("/") ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      sizes="44px"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  ) : (
                    post.author.avatar
                  )}
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

          {/* Featured Cover Image if available */}
          {post.coverImage && (
            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "var(--radius-xl, 16px)",
                overflow: "hidden",
                marginBottom: "2.5rem",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                backgroundColor: "var(--bg-elevated)",
              }}
            >
              <img
                src={resolveImageUrl(post.coverImage)}
                alt={post.title}
                style={{
                  width: "100%",
                  maxHeight: "480px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          )}

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
            {post.content.map((paragraph, index) => {
              const trimmed = paragraph.trim();

              // Markdown Image
              const markdownImgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
              if (markdownImgMatch) {
                const alt = markdownImgMatch[1];
                const src = resolveImageUrl(markdownImgMatch[2]);
                return (
                  <figure key={index} style={{ margin: "2.5rem 0", textAlign: "center" }}>
                    <img
                      src={src}
                      alt={alt || "Article visual"}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "550px",
                        borderRadius: "14px",
                        border: "1px solid var(--border-subtle)",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                        margin: "0 auto",
                        display: "block",
                        objectFit: "contain",
                      }}
                    />
                    {alt && (
                      <figcaption style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.75rem", fontStyle: "italic" }}>
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              // Headings
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={index} style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "1rem", marginBottom: "0.25rem" }}>
                    {parseInlineMarkup(trimmed.substring(4))}
                  </h3>
                );
              }
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={index} style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", marginTop: "1.75rem", marginBottom: "0.5rem" }}>
                    {parseInlineMarkup(trimmed.substring(3))}
                  </h2>
                );
              }
              if (trimmed.startsWith("# ")) {
                return (
                  <h1 key={index} style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--text-primary)", marginTop: "2rem", marginBottom: "0.5rem" }}>
                    {parseInlineMarkup(trimmed.substring(2))}
                  </h1>
                );
              }

              // Horizontal Divider
              if (trimmed === "---" || trimmed === "***") {
                return <hr key={index} style={{ border: "none", borderTop: "1px solid var(--border-subtle)", margin: "2rem 0" }} />;
              }

              // Blockquote
              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote
                    key={index}
                    style={{
                      borderLeft: "4px solid var(--color-cyan)",
                      padding: "1rem 1.5rem",
                      margin: "1rem 0",
                      backgroundColor: "var(--bg-elevated)",
                      borderRadius: "0 8px 8px 0",
                      fontStyle: "italic",
                      color: "var(--text-primary)",
                    }}
                  >
                    {parseInlineMarkup(trimmed.substring(2))}
                  </blockquote>
                );
              }

              // Bullet List
              if (trimmed.split("\n").every((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "))) {
                return (
                  <ul key={index} style={{ paddingLeft: "1.5rem", margin: "0.5rem 0", listStyleType: "disc" }}>
                    {trimmed.split("\n").map((line, lIndex) => (
                      <li key={lIndex} style={{ marginBottom: "0.4rem" }}>
                        {parseInlineMarkup(line.trim().replace(/^[-*]\s+/, ""))}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Numbered List
              if (trimmed.split("\n").every((l) => /^\d+\.\s/.test(l.trim()))) {
                return (
                  <ol key={index} style={{ paddingLeft: "1.5rem", margin: "0.5rem 0", listStyleType: "decimal" }}>
                    {trimmed.split("\n").map((line, lIndex) => (
                      <li key={lIndex} style={{ marginBottom: "0.4rem" }}>
                        {parseInlineMarkup(line.trim().replace(/^\d+\.\s+/, ""))}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Code Block
              if (trimmed.startsWith("```")) {
                const codeContent = trimmed.replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "");
                return (
                  <pre
                    key={index}
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      border: "1px solid var(--border-subtle)",
                      padding: "1.25rem",
                      borderRadius: "10px",
                      overflowX: "auto",
                      fontFamily: "monospace",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "var(--color-cyan)",
                      margin: "1rem 0",
                    }}
                  >
                    <code>{codeContent}</code>
                  </pre>
                );
              }

              // Default Paragraph
              return <p key={index}>{parseInlineMarkup(paragraph)}</p>;
            })}
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
                  position: "relative",
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #476D9A, #5EC098)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  flexShrink: 0,
                }}
              >
                {post.author.avatar.startsWith("/") ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="54px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                ) : (
                  post.author.avatar
                )}
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
