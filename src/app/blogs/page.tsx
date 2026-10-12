"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import { Sparkles, ArrowRight, Search, Clock, Calendar, User } from "lucide-react";

export default function BlogsIndexPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogsData.map((b) => b.category)))];

  const filteredPosts = blogsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-grid-pattern" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background Glow */}
      <div
        className="ambient-glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #0e50d7 0%, transparent 70%)",
        }}
      />

      {/* Hero */}
      <section
        style={{
          paddingTop: "6rem",
          paddingBottom: "5rem",
          position: "relative",
          zIndex: 1,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container-custom" style={{ textAlign: "center" }}>
          <div className="flex items-center justify-center gap-2" style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "var(--color-cyan)" }}>Tech Insights</span>
          </div>

          <span className="badge-glow" style={{ marginBottom: "1rem" }}>
            Engineering Knowledge Hub
          </span>

          <h1 className="heading-display" style={{ maxWidth: "880px", margin: "0.75rem auto 1.5rem auto", color: "#ffffff" }}>
            Architectural Insights & <span className="gradient-text">Engineering Deep Dives</span>
          </h1>

          <p className="subhead-lead" style={{ maxWidth: "720px", margin: "0 auto 3rem auto" }}>
            From modern microservices and AI/RAG agent patterns to DevOps automation and enterprise software valuation — we share what’s next in technology.
          </p>

          {/* Search Bar & Category Filters */}
          <div style={{ maxWidth: "600px", margin: "0 auto 2.5rem auto", position: "relative" }}>
            <Search
              size={20}
              color="var(--text-muted)"
              style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              placeholder="Search architecture articles, AI, microservices..."
              className="input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: "3rem" }}
            />
          </div>

          <div className="flex justify-center items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "0.55rem 1.25rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: selectedCategory === cat ? "1px solid var(--color-cyan)" : "1px solid rgba(255, 255, 255, 0.08)",
                  background: selectedCategory === cat ? "linear-gradient(135deg, rgba(14, 80, 215, 0.4), rgba(0, 210, 255, 0.2))" : "rgba(255, 255, 255, 0.03)",
                  color: selectedCategory === cat ? "#ffffff" : "var(--text-secondary)",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-secondary)" }}>
              No articles found matching &ldquo;{searchTerm}&rdquo;. Try another search term.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "2rem",
              }}
            >
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="interactive-card flex flex-col justify-between"
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center" style={{ marginBottom: "1rem" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-cyan)",
                          fontWeight: 700,
                          backgroundColor: "rgba(0, 210, 255, 0.1)",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "999px",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        <Clock size={13} />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem", lineHeight: 1.4 }}>
                      <Link
                        href={`/blogs/${post.slug}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2" style={{ marginBottom: "1.5rem" }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.75rem",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "var(--radius-sm)",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            color: "var(--text-muted)",
                            border: "1px solid rgba(255, 255, 255, 0.06)",
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="flex justify-between items-center"
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: "1rem",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #0e50d7, #00d2ff)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#ffffff",
                        }}
                      >
                        {post.author.avatar}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                        <div>{post.author.name}</div>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.7rem" }}>{post.date}</div>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="flex items-center gap-1"
                      style={{ color: "var(--color-cyan)", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
                    >
                      <span>Read</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
