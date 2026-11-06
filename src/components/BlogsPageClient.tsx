'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, blogsData } from '@/data/blogs';
import { 
  ArrowRight, 
  Search, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  BookOpen, 
  Terminal, 
  CheckCircle2, 
  Share2, 
  Bookmark, 
  MessageSquare,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  Filter,
  X
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import BlogsCreativeBackdrop from './BlogsCreativeBackdrop';
import OuiWillHeadline, { OuiWillWord, OuiWillDot } from './OuiWillHeadline';

export default function BlogsPageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  // Dynamic blogs from NextHRMS API
  const [blogs, setBlogs] = useState<BlogPost[]>(blogsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/blogs/public');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            const mapped = json.data.map((item: any) => ({
              slug: item.slug,
              title: item.title,
              excerpt: item.excerpt,
              category: item.category || 'Full-Stack Architecture',
              readTime: item.readTime || '5 min read',
              date: item.publishedAt
                ? new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                : 'Recent',
              author: {
                name: item.author?.name || 'Hiren Danecha',
                role: item.author?.role || 'CEO & Tech Strategist',
                avatar: item.author?.avatar || '/images/image.webp',
              },
              tags: item.tags && item.tags.length > 0 ? item.tags : ['Engineering', 'Architecture'],
              content: item.content || [],
            }));
            setBlogs(mapped);
          }
        }
      } catch (err) {
        console.warn('NextHRMS blogs API offline, using fallback blogsData:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Compute categories with counts
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = { All: blogs.length };
    blogs.forEach((b) => {
      counts[b.category] = (counts[b.category] || 0) + 1;
    });
    return counts;
  }, [blogs]);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(blogs.map((b) => b.category)))];
  }, [blogs]);

  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some((t) => t.toLowerCase().includes(term));
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchTerm, selectedCategory]);

  // Featured article is the top architecture article
  const featuredArticle = blogs[0];

  const getCategoryColor = (_category?: string) => {
    return '#00bbab';
  };

  return (
    <div
      style={{
        backgroundColor: isLight ? '#f8fafc' : '#020712',
        color: isLight ? '#0f172a' : '#f8fafc',
        minHeight: '100vh',
      }}
    >
      {/* ===================================================================== */}
      {/* 1. CINEMATIC HERO SECTION: CREATIVE ARCHITECTURE TELEMETRY NEXUS      */}
      {/* ===================================================================== */}
      <section
        id="insights-hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '7rem 1.5rem 4rem 1.5rem',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Bespoke 0% GPU Native Gradient Ambient Backdrop */}
        <BlogsCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          {/* Headline with Oui Will Kinetic Typographic Animation */}
          <OuiWillHeadline
            style={{
              fontFamily: "var(--font-acthirey), 'Acthirey', 'Playfair Display', serif",
              fontSize: "clamp(1.85rem, 4.5vw, 60px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              marginBottom: '1.5rem',
              display: 'block',
            }}
          >
            <OuiWillWord index={1}>Architectural</OuiWillWord>
            <OuiWillWord index={2}>Insights</OuiWillWord>
            <OuiWillWord index={3}>&amp;</OuiWillWord>
            <OuiWillDot />
            <span style={{ display: 'block', width: '100%', marginTop: '0.35rem' }}>
              <OuiWillWord index={4} isGradient>
                Engineering Telemetry.
              </OuiWillWord>
            </span>
          </OuiWillHeadline>

          {/* Narrative */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              lineHeight: 1.65,
              color: isLight ? '#475569' : '#94a3b8',
              maxWidth: '780px',
              margin: '0 auto',
            }}
          >
            First-principles deep dives on distributed microservices resilience, multi-tenant database models, agentic AI systems, and modern full-stack performance authored by Opash&apos;s senior engineering squad.
          </p>
        </div>

        {/* Animated "Scroll to Explore" Indicator (Identical to Portfolio) */}
        <a
          href="#insights-articles"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("insights-articles");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hero-scroll-indicator"
          style={{
            position: 'absolute',
            bottom: 'clamp(3.25rem, 6vh, 4.25rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.55rem',
            textDecoration: 'none',
            zIndex: 3,
            cursor: 'pointer',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
          }}
        >
          {/* Minimalist mouse pill with animated green glowing dot */}
          <div
            style={{
              width: '22px',
              height: '36px',
              borderRadius: '9999px',
              border: `1.5px solid ${isLight ? 'rgba(0, 138, 117, 0.45)' : 'rgba(0, 255, 209, 0.45)'}`,
              background: isLight ? 'rgba(255, 255, 255, 0.65)' : 'rgba(10, 20, 36, 0.65)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
              boxShadow: isLight
                ? '0 4px 14px rgba(0, 168, 143, 0.15)'
                : '0 4px 18px rgba(0, 255, 209, 0.2)',
            }}
          >
            <span
              className="hero-scroll-dot"
              style={{
                width: '4px',
                height: '7px',
                borderRadius: '9999px',
                background: isLight ? '#008a75' : '#00ffd1',
                boxShadow: isLight ? '0 0 8px #008a75' : '0 0 10px #00ffd1',
              }}
            />
          </div>

          {/* Subtle helper text with animated bouncing arrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isLight ? '#008a75' : '#2dd4bf',
            }}
          >
            <span>Scroll to explore articles</span>
            <span className="hero-scroll-arrow">&darr;</span>
          </div>
        </a>
      </section>

      {/* ===================================================================== */}
      {/* 2. ARCHITECTURAL WHITEPAPERS & ARTICLES (Unified Content Section)    */}
      {/* ===================================================================== */}
      <section
        id="insights-articles"
        style={{
          padding: 'clamp(2.5rem, 5vw, 4.25rem) 0',
          position: 'relative',
          width: '100%',
          overflow: 'visible',
        }}
      >
        <div style={{ width: '100%', margin: '0 auto' }}>
          {/* Category Filter Bar in Single Clean Line (Identical to Portfolio Filter) */}
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto 3rem auto',
              padding: '0 1.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="case-studies-filter-scroll"
              style={{
                display: 'inline-flex',
                gap: '0.6rem',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                padding: '0.35rem 0.5rem',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = categoryStats[cat] || 0;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.55rem 1.15rem',
                      borderRadius: '9999px',
                      background: isSelected
                        ? isLight ? '#008a75' : '#2dd4bf'
                        : isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.6)',
                      color: isSelected
                        ? isLight ? '#ffffff' : '#020712'
                        : isLight ? '#475569' : '#94a3b8',
                      border: isSelected
                        ? 'none'
                        : isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.08)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected
                        ? isLight ? '0 4px 15px rgba(0, 168, 143, 0.25)' : '0 4px 15px rgba(45, 212, 191, 0.25)'
                        : 'none',
                    }}
                  >
                    <span>{cat}</span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        padding: '0.1rem 0.45rem',
                        borderRadius: '9999px',
                        background: isSelected
                          ? isLight ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)'
                          : isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#ffffff' : isLight ? '#64748b' : '#94a3b8',
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Architecture Whitepaper Spotlight (when All is selected) */}
          {selectedCategory === 'All' && (
            <div
              style={{
                maxWidth: '1240px',
                margin: '0 auto 3.5rem auto',
                width: 'calc(100% - 3rem)',
                borderRadius: '24px',
                background: isLight
                  ? 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)'
                  : 'linear-gradient(135deg, rgba(14, 28, 48, 0.95) 0%, rgba(8, 18, 34, 0.95) 100%)',
                border: isLight ? '1px solid #ccfbf1' : '1px solid rgba(45, 212, 191, 0.3)',
                boxShadow: isLight
                  ? '0 20px 50px rgba(0, 168, 143, 0.08)'
                  : '0 25px 60px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
                padding: '2.5rem',
              }}
            >
              {/* Top Highlight Strip */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #00bbab 0%, #38bdf8 50%, #818cf8 100%)',
                }}
              />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                }}
              >
                {/* Left: Article Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        padding: '0.3rem 0.85rem',
                        borderRadius: '9999px',
                        background: isLight ? 'rgba(0, 168, 143, 0.12)' : 'rgba(45, 212, 191, 0.18)',
                        border: isLight ? '1px solid rgba(0, 168, 143, 0.3)' : '1px solid rgba(45, 212, 191, 0.4)',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: isLight ? '#008a75' : '#2dd4bf',
                      }}
                    >
                      ★ FEATURED ARCHITECTURE WHITEPAPER
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: isLight ? '#64748b' : '#94a3b8',
                      }}
                    >
                      <Clock size={14} />
                      <span>{featuredArticle.readTime}</span>
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: isLight ? '#64748b' : '#94a3b8',
                      }}
                    >
                      <Calendar size={14} />
                      <span>{featuredArticle.date}</span>
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
                      fontWeight: 800,
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      marginBottom: '1rem',
                      color: isLight ? '#0f172a' : '#ffffff',
                    }}
                  >
                    <Link
                      href={`/blogs/${featuredArticle.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p
                    style={{
                      fontSize: '1.02rem',
                      lineHeight: 1.65,
                      color: isLight ? '#475569' : '#94a3b8',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {featuredArticle.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    {featuredArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'monospace',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          background: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.06)',
                          border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: isLight ? '#008a75' : '#2dd4bf',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          position: 'relative',
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          background: 'linear-gradient(135deg, #00bbab 0%, #0284c7 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          boxShadow: '0 0 12px rgba(0, 187, 171, 0.4)',
                          flexShrink: 0,
                        }}
                      >
                        {featuredArticle.author.avatar.startsWith('/') ? (
                          <Image
                            src={featuredArticle.author.avatar}
                            alt={featuredArticle.author.name}
                            fill
                            sizes="44px"
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                          />
                        ) : (
                          featuredArticle.author.avatar
                        )}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: isLight ? '#0f172a' : '#f8fafc' }}>
                          {featuredArticle.author.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                          {featuredArticle.author.role}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${featuredArticle.slug}`}
                      className="opash-roll-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.8rem 1.6rem',
                        borderRadius: '12px',
                        background: isLight
                          ? 'linear-gradient(135deg, #008a75 0%, #00a88f 100%)'
                          : 'linear-gradient(135deg, #00a88f 0%, #2dd4bf 100%)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        textDecoration: 'none',
                        boxShadow: '0 8px 20px rgba(0, 168, 143, 0.3)',
                      }}
                    >
                      <span className="opash-roll-track">
                        <span className="opash-roll-item">
                          <span>Read Full Whitepaper</span>
                          <ArrowRight size={16} />
                        </span>
                        <span className="opash-roll-item" aria-hidden="true">
                          <span>Read Full Whitepaper</span>
                          <ArrowRight size={16} />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right: Technical Spec Terminal Preview Card */}
                <div
                  style={{
                    borderRadius: '18px',
                    background: isLight ? '#0f172a' : '#030816',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Terminal Header */}
                  <div
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                    </div>
                    <span style={{ fontSize: '0.74rem', fontFamily: 'monospace', color: '#94a3b8' }}>
                      architecture.spec.ts
                    </span>
                  </div>

                  {/* Code Snippet */}
                  <div style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.65, color: '#e2e8f0' }}>
                    <div style={{ color: '#64748b' }}>// Opash Microservice Edge Contract</div>
                    <div>
                      <span style={{ color: '#38bdf8' }}>export interface</span>{' '}
                      <span style={{ color: '#2dd4bf' }}>ProductionCluster</span> {'{'}
                    </div>
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <span>pipeline:</span> <span style={{ color: '#f59e0b' }}>&quot;Next.js App Router&quot;</span>;
                    </div>
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <span>backend:</span> <span style={{ color: '#f59e0b' }}>&quot;FastAPI + Nest.js Pods&quot;</span>;
                    </div>
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <span>dbModel:</span> <span style={{ color: '#f59e0b' }}>&quot;PostgreSQL Multi-Tenant RLS&quot;</span>;
                    </div>
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <span>slaTarget:</span> <span style={{ color: '#10b981' }}>99.99</span>;
                    </div>
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <span>ciCdAutomated:</span> <span style={{ color: '#818cf8' }}>true</span>;
                    </div>
                    <div>{'}'}</div>
                    <div style={{ marginTop: '0.85rem', color: '#10b981' }}>
                      ✓ 100% Type-Safe &bull; Zero Regressions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Summary Bar */}
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto 2rem auto',
              padding: '0 1.5rem 1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f8fafc' }}>
              Showing {filteredPosts.length} Architectural Whitepaper{filteredPosts.length === 1 ? '' : 's'}
              {selectedCategory !== 'All' && <span> in <span style={{ color: getCategoryColor(selectedCategory) }}>{selectedCategory}</span></span>}
            </div>

            {selectedCategory !== 'All' && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: isLight ? '#008a75' : '#2dd4bf',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span>Reset filter</span>
                <X size={14} />
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                textAlign: 'center',
                padding: '5rem 2rem',
                borderRadius: '20px',
                background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.5)',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: isLight ? 'rgba(0, 168, 143, 0.1)' : 'rgba(0, 187, 171, 0.15)',
                  color: isLight ? '#008a75' : '#2dd4bf',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                }}
              >
                <BookOpen size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                No Architectural Articles Found
              </h3>
              <p style={{ color: isLight ? '#64748b' : '#94a3b8', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
                No articles found in this category. Try selecting another category or view all articles.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                }}
                className="opash-roll-btn"
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '10px',
                  background: isLight ? '#008a75' : '#00a88f',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span className="opash-roll-track">
                  <span className="opash-roll-item">
                    <span>View All Articles</span>
                  </span>
                  <span className="opash-roll-item" aria-hidden="true">
                    <span>View All Articles</span>
                  </span>
                </span>
              </button>
            </div>
          ) : filteredPosts.length === 1 ? (
            /* Single Card Centered */
            <div style={{ maxWidth: '440px', margin: '2rem auto' }}>
              {filteredPosts.map((post) => {
                const catColor = getCategoryColor(post.category);
                return (
                  <article
                    key={post.slug}
                    style={{
                      borderRadius: '22px',
                      background: isLight ? '#ffffff' : 'rgba(10, 20, 36, 0.85)',
                      border: `1.5px solid ${isLight ? '#cbd5e1' : 'rgba(255, 255, 255, 0.12)'}`,
                      boxShadow: isLight ? '0 12px 35px rgba(0,0,0,0.06)' : '0 16px 45px rgba(0,0,0,0.5)',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: catColor }} />
                    <div style={{ padding: '2rem 1.75rem 1.5rem 1.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: catColor, background: `${catColor}14`, padding: '0.3rem 0.75rem', borderRadius: '9999px', border: `1px solid ${catColor}33` }}>
                          {post.category}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: isLight ? '#64748b' : '#94a3b8', fontFamily: 'monospace' }}>
                          <Clock size={13} />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      <h2 style={{ fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '0.85rem', color: isLight ? '#0f172a' : '#f8fafc' }}>
                        <Link href={`/blogs/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {post.title}
                        </Link>
                      </h2>
                      <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: isLight ? '#475569' : '#94a3b8', marginBottom: '1.5rem' }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {post.tags.slice(0, 4).map((tag) => (
                          <span key={tag} style={{ fontSize: '0.72rem', fontFamily: 'monospace', padding: '0.2rem 0.55rem', borderRadius: '6px', background: isLight ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.04)', border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.07)', color: isLight ? '#64748b' : '#94a3b8' }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding: '1.15rem 1.75rem', borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.07)', background: isLight ? 'rgba(248, 250, 252, 0.6)' : 'rgba(5, 11, 22, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div style={{ position: 'relative', width: '34px', height: '34px', borderRadius: '50%', overflow: 'hidden', background: `linear-gradient(135deg, ${catColor} 0%, #0284c7 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.76rem', fontWeight: 800, color: '#ffffff', flexShrink: 0 }}>
                          {post.author.avatar.startsWith('/') ? <Image src={post.author.avatar} alt={post.author.name} fill sizes="34px" style={{ objectFit: 'cover', objectPosition: 'top' }} /> : post.author.avatar}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f8fafc' }}>{post.author.name}</div>
                          <div style={{ fontSize: '0.72rem', color: isLight ? '#64748b' : '#94a3b8' }}>{post.date}</div>
                        </div>
                      </div>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="opash-roll-btn"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          color: catColor,
                          textDecoration: 'none',
                        }}
                      >
                        <span className="opash-roll-track" style={{ height: '1.3rem', lineHeight: '1.3rem' }}>
                          <span className="opash-roll-item" style={{ height: '1.3rem', lineHeight: '1.3rem', gap: '0.4rem' }}>
                            <span>Read</span>
                            <ArrowRight size={14} />
                          </span>
                          <span className="opash-roll-item" aria-hidden="true" style={{ height: '1.3rem', lineHeight: '1.3rem', gap: '0.4rem' }}>
                            <span>Read</span>
                            <ArrowRight size={14} />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Option 3: Interactive 3D Overlapping Stacking Cards (Perspective Hover Fan) */
            <div
              className="insights-deck-container"
              style={{
                perspective: '1400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
                padding: '3rem 1.5rem 4.5rem 1.5rem',
                position: 'relative',
                width: '100%',
                overflowX: 'visible',
                overflowY: 'visible',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  padding: '3rem 5.5rem 4rem 5.5rem',
                  minWidth: 'max-content',
                  margin: '0 auto',
                }}
              >
                {filteredPosts.map((post, i) => {
                  const catColor = getCategoryColor(post.category);
                  const isHovered = hoveredCardIndex === i;
                  const isOtherHovered = hoveredCardIndex !== null && !isHovered;

                  // 3D Stacking Transform Calculation
                  let transform = 'translate3d(0, 0, 0)';
                  let zIndex = i + 1;
                  let opacity = 1;

                  if (isHovered) {
                    transform = 'translate3d(0, -32px, 70px) scale(1.05)';
                    zIndex = 40;
                    opacity = 1;
                  } else if (isOtherHovered) {
                    opacity = 0.62;
                    if (hoveredCardIndex !== null && i < hoveredCardIndex) {
                      transform = 'translate3d(-48px, 0, -25px) scale(0.96)';
                    } else if (hoveredCardIndex !== null && i > hoveredCardIndex) {
                      transform = 'translate3d(48px, 0, -25px) scale(0.96)';
                    }
                  } else {
                    // Resting state: subtle gentle fan rotation based on relative card index
                    const rotY = (i - (filteredPosts.length - 1) / 2) * -3;
                    const rotZ = (i - (filteredPosts.length - 1) / 2) * 1;
                    transform = `rotateY(${rotY}deg) rotateZ(${rotZ}deg) translate3d(0, 0, 0)`;
                  }

                  return (
                    <article
                      key={post.slug}
                      onMouseEnter={() => setHoveredCardIndex(i)}
                      onMouseLeave={() => setHoveredCardIndex(null)}
                      style={{
                        width: '345px',
                        flex: '0 0 345px',
                        marginLeft: i === 0 ? '0' : '-75px',
                        borderRadius: '22px',
                        background: isLight
                          ? (isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.94)')
                          : (isHovered ? 'rgba(13, 24, 46, 0.96)' : 'rgba(9, 18, 34, 0.88)'),
                        border: isHovered
                          ? `1.5px solid ${catColor}`
                          : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.1)'),
                        boxShadow: isHovered
                          ? (isLight
                              ? `0 30px 65px -10px ${catColor}45, 0 0 25px ${catColor}35`
                              : `0 35px 75px -10px ${catColor}55, 0 0 35px ${catColor}45`)
                          : (isLight
                              ? '0 10px 30px rgba(0, 0, 0, 0.06)'
                              : '0 14px 40px rgba(0, 0, 0, 0.5)'),
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                        position: 'relative',
                        transform: transform,
                        zIndex: zIndex,
                        opacity: opacity,
                        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease, opacity 0.35s ease, background 0.3s ease',
                        cursor: 'pointer',
                        willChange: 'transform, box-shadow, opacity',
                      }}
                    >
                      {/* Top Accent Color Bar */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: catColor,
                        }}
                      />

                      <div style={{ padding: '2rem 1.75rem 1.5rem 1.75rem' }}>
                        {/* Meta Header */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1.25rem',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: 800,
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                              color: catColor,
                              background: `${catColor}14`,
                              padding: '0.3rem 0.75rem',
                              borderRadius: '9999px',
                              border: `1px solid ${catColor}33`,
                            }}
                          >
                            {post.category}
                          </span>

                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.78rem',
                              color: isLight ? '#64748b' : '#94a3b8',
                              fontFamily: 'monospace',
                            }}
                          >
                            <Clock size={13} />
                            <span>{post.readTime}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h2
                          style={{
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            lineHeight: 1.35,
                            marginBottom: '0.85rem',
                            color: isLight ? '#0f172a' : '#f8fafc',
                          }}
                        >
                          <Link
                            href={`/blogs/${post.slug}`}
                            style={{ color: 'inherit', textDecoration: 'none' }}
                          >
                            {post.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p
                          style={{
                            fontSize: '0.92rem',
                            lineHeight: 1.6,
                            color: isLight ? '#475569' : '#94a3b8',
                            marginBottom: '1.5rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {post.excerpt}
                        </p>

                        {/* Tag Pills */}
                        <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: '0.72rem',
                                fontFamily: 'monospace',
                                padding: '0.2rem 0.55rem',
                                borderRadius: '6px',
                                background: isLight ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.04)',
                                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.07)',
                                color: isLight ? '#64748b' : '#94a3b8',
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer: Author & Read CTA */}
                      <div
                        style={{
                          padding: '1.15rem 1.75rem',
                          borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.07)',
                          background: isLight ? 'rgba(248, 250, 252, 0.6)' : 'rgba(5, 11, 22, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <div
                            style={{
                              position: 'relative',
                              width: '34px',
                              height: '34px',
                              borderRadius: '50%',
                              overflow: 'hidden',
                              background: `linear-gradient(135deg, ${catColor} 0%, #0284c7 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.76rem',
                              fontWeight: 800,
                              color: '#ffffff',
                              flexShrink: 0,
                            }}
                          >
                            {post.author.avatar.startsWith('/') ? (
                              <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                sizes="34px"
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                              />
                            ) : (
                              post.author.avatar
                            )}
                          </div>
                          <div>
                            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f8fafc' }}>
                              {post.author.name}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: isLight ? '#64748b' : '#94a3b8' }}>
                              {post.date}
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/blogs/${post.slug}`}
                          className="opash-roll-btn"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontSize: '0.86rem',
                            fontWeight: 700,
                            color: catColor,
                            textDecoration: 'none',
                          }}
                        >
                          <span className="opash-roll-track" style={{ height: '1.3rem', lineHeight: '1.3rem' }}>
                            <span className="opash-roll-item" style={{ height: '1.3rem', lineHeight: '1.3rem', gap: '0.4rem' }}>
                              <span>Read</span>
                              <ArrowRight size={14} />
                            </span>
                            <span className="opash-roll-item" aria-hidden="true" style={{ height: '1.3rem', lineHeight: '1.3rem', gap: '0.4rem' }}>
                              <span>Read</span>
                              <ArrowRight size={14} />
                            </span>
                          </span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. EXECUTIVE ARCHITECTURE TEARDOWN CTA (Laptop Frame)                */}
      {/* ===================================================================== */}
      <section style={{ padding: '0 clamp(1rem, 3vw, 1.5rem) clamp(2.5rem, 5vw, 4.25rem) clamp(1rem, 3vw, 1.5rem)' }}>
        <div className="container-custom" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* REALISTIC LAPTOP CHASSIS FRAME */}
          <div style={{ position: 'relative' }}>
            {/* Laptop Screen */}
            <div
              style={{
                borderRadius: '16px 16px 0 0',
                padding: 'clamp(10px, 1.5vw, 16px)',
                background: isLight
                  ? 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)'
                  : 'linear-gradient(145deg, #1e293b 0%, #050b17 100%)',
                borderTop: isLight
                  ? '2px solid #94a3b8'
                  : '2px solid rgba(255, 255, 255, 0.18)',
                borderLeft: isLight
                  ? '2px solid #94a3b8'
                  : '2px solid rgba(255, 255, 255, 0.18)',
                borderRight: isLight
                  ? '2px solid #94a3b8'
                  : '2px solid rgba(255, 255, 255, 0.18)',
                borderBottom: 'none',
                boxShadow: isLight
                  ? '0 0 0 1px rgba(0, 0, 0, 0.12), 0 -10px 40px -15px rgba(0, 0, 0, 0.15)'
                  : '0 0 0 1px rgba(0, 0, 0, 0.6), 0 -10px 40px -15px rgba(0, 0, 0, 0.5), 0 0 45px -10px rgba(0, 255, 209, 0.1)',
              }}
            >
              {/* Laptop Camera Dot */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#1a1a2e',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: 'inset 0 0 2px rgba(45, 212, 191, 0.4)',
                  }}
                />
              </div>

              {/* LAPTOP INNER DISPLAY SCREEN */}
              <div
                style={{
                  borderRadius: '8px',
                  background: isLight
                    ? 'linear-gradient(135deg, #008a75 0%, #0284c7 100%)'
                    : 'linear-gradient(135deg, #003830 0%, #041a3a 100%)',
                  padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem)',
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  alignItems: 'center',
                  textAlign: 'center' as const,
                  position: 'relative' as const,
                  overflow: 'hidden',
                }}
              >
                {/* Subtle Opash Portal Watermark */}
                <img
                  src="/images/opash-o-portal-dark.png"
                  alt=""
                  style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-10%',
                    width: '450px',
                    height: '450px',
                    opacity: 0.08,
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '1rem',
                    color: '#ffffff',
                  }}
                >
                  <Terminal size={16} />
                  <span>Have a System Design Bottleneck?</span>
                </div>

                <h2
                  className="heading-section"
                  style={{
                    marginBottom: '1rem',
                    maxWidth: '780px',
                    color: '#ffffff',
                  }}
                >
                  Request a 1-on-1 Architectural Teardown with Our Senior Engineers
                </h2>

                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    maxWidth: '680px',
                    opacity: 0.9,
                    marginBottom: '2.5rem',
                  }}
                >
                  Share your current tech stack, traffic benchmarks, or cloud infrastructure challenges. Our principal architects will review your setup and deliver actionable optimization advice.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link
                    href="/get-a-quote"
                    className="opash-roll-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.9rem 2rem',
                      borderRadius: '12px',
                      background: '#ffffff',
                      color: '#0f172a',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <span className="opash-roll-track">
                      <span className="opash-roll-item">
                        <span>Book Architecture Teardown</span>
                        <ArrowRight size={16} />
                      </span>
                      <span className="opash-roll-item" aria-hidden="true">
                        <span>Book Architecture Teardown</span>
                        <ArrowRight size={16} />
                      </span>
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="opash-roll-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.9rem 1.8rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <span className="opash-roll-track">
                      <span className="opash-roll-item">
                        <MessageSquare size={16} />
                        <span>Submit Technical Question</span>
                      </span>
                      <span className="opash-roll-item" aria-hidden="true">
                        <MessageSquare size={16} />
                        <span>Submit Technical Question</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Laptop Base / Keyboard Deck */}
            <div
              style={{
                position: 'relative',
                height: 'clamp(18px, 2.5vw, 28px)',
                background: isLight
                  ? 'linear-gradient(180deg, #334155 0%, #475569 100%)'
                  : 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                borderRadius: '0 0 10px 10px',
                border: isLight
                  ? '2px solid #94a3b8'
                  : '2px solid rgba(255, 255, 255, 0.18)',
                borderTop: isLight
                  ? '1px solid #64748b'
                  : '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Trackpad indicator */}
              <div
                style={{
                  width: 'clamp(60px, 10vw, 100px)',
                  height: '4px',
                  borderRadius: '9999px',
                  background: isLight ? 'rgba(148, 163, 184, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                }}
              />
            </div>

            {/* Laptop Stand Shadow */}
            <div
              style={{
                width: '110%',
                height: '8px',
                margin: '0 auto',
                marginLeft: '-5%',
                background: isLight
                  ? 'radial-gradient(ellipse, rgba(0, 0, 0, 0.1) 0%, transparent 70%)'
                  : 'radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
