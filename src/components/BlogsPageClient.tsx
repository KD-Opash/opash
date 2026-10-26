'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, blogsData } from '@/data/blogs';
import { 
  Sparkles, 
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

export default function BlogsPageClient() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamic blogs from NextHRMS API
  const [blogs, setBlogs] = useState<BlogPost[]>(blogsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_HRMS_API_URL || 'http://localhost:3001';
        const res = await fetch(`${apiUrl}/api/blogs/public`);
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack Architecture':
        return '#00bbab';
      case 'SaaS Engineering':
        return '#38bdf8';
      case 'AI & Innovation':
        return '#818cf8';
      case 'Business & Strategy':
        return '#f59e0b';
      default:
        return '#00bbab';
    }
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
        style={{
          position: 'relative',
          padding: '7.5rem 1.5rem 4.5rem 1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Bespoke 0% GPU Native Gradient Ambient Backdrop */}
        <BlogsCreativeBackdrop isLightMode={isLight} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow Status */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontSize: '0.86rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isLight ? '#008a75' : '#2dd4bf',
              }}
            >
              <Sparkles size={16} />
              <span>Engineering Insights &bull; Technical Guides &bull; Production Architectures</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.14,
              letterSpacing: '-0.035em',
              marginBottom: '1.1rem',
            }}
          >
            Architectural Insights &{' '}
            <span className="opash-hero-gradient-text" style={{ display: 'block', marginTop: '0.35rem' }}>
              Engineering Telemetry.
            </span>
          </h1>

          {/* Narrative */}
          <p
            style={{
              fontSize: 'clamp(0.96rem, 1.25vw, 1.12rem)',
              lineHeight: 1.65,
              color: isLight ? '#475569' : '#94a3b8',
              maxWidth: '720px',
              margin: '0 auto 1.6rem auto',
            }}
          >
            First-principles deep dives on distributed microservices resilience, multi-tenant database models, agentic AI systems, and modern full-stack performance authored by Opash&apos;s senior engineering squad.
          </p>

          {/* Search Console */}
          <div
            style={{
              maxWidth: '620px',
              margin: '0 auto 1.25rem auto',
              padding: '0.42rem',
              borderRadius: '16px',
              background: isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.92)',
              border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(45, 212, 191, 0.28)',
              boxShadow: isLight
                ? '0 6px 25px rgba(0, 0, 0, 0.05)'
                : '0 10px 30px rgba(0, 0, 0, 0.45), 0 0 20px rgba(0, 187, 171, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.85rem', color: isLight ? '#008a75' : '#2dd4bf' }}>
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search microservices, AI agents, Next.js, multi-tenant databases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '0.94rem',
                color: isLight ? '#0f172a' : '#f8fafc',
                padding: '0.5rem 0',
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.35rem',
                  color: isLight ? '#94a3b8' : '#64748b',
                }}
                title="Clear search"
              >
                <X size={16} />
              </button>
            )}
            <div
              style={{
                padding: '0.3rem 0.65rem',
                borderRadius: '8px',
                backgroundColor: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.06)',
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                color: isLight ? '#64748b' : '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                marginRight: '0.35rem',
              }}
            >
              <span>⌘K</span>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.4rem' }}>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryStats[cat] || 0;
              const catColor = getCategoryColor(cat);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    border: isSelected
                      ? `1px solid ${catColor}`
                      : isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isSelected
                      ? isLight ? `${catColor}14` : `${catColor}25`
                      : isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.7)',
                    color: isSelected
                      ? isLight ? '#008a75' : '#2dd4bf'
                      : isLight ? '#64748b' : '#94a3b8',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
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
                        ? isLight ? '#008a75' : '#2dd4bf'
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

          {/* Engineering Methodology Trust Strip */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              fontSize: '0.8rem',
              color: isLight ? '#64748b' : '#94a3b8',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookOpen size={14} style={{ color: isLight ? '#008a75' : '#2dd4bf' }} />
              <span>Peer-Reviewed Whitepapers</span>
            </div>
            <span style={{ opacity: 0.35 }}>&bull;</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} style={{ color: '#38bdf8' }} />
              <span>First-Principles Deep Dives</span>
            </div>
            <span style={{ opacity: 0.35 }}>&bull;</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Terminal size={14} style={{ color: '#818cf8' }} />
              <span>Production Code Examples</span>
            </div>
            <span style={{ opacity: 0.35 }}>&bull;</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} style={{ color: '#10b981' }} />
              <span>Zero Vendor Fluff</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. FEATURED ARCHITECTURAL WHITEPAPER (Spotlight Hero Article)         */}
      {/* ===================================================================== */}
      {!searchTerm && selectedCategory === 'All' && (
        <section style={{ padding: '2rem 1.5rem 5rem 1.5rem' }}>
          <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div
              style={{
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
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
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                    >
                      <span>Read Full Whitepaper</span>
                      <ArrowRight size={16} />
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
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* 3. ARTICLES GRID (All Filtered Posts)                                 */}
      {/* ===================================================================== */}
      <section style={{ padding: '2rem 1.5rem 6rem 1.5rem' }}>
        <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Results Summary Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '1rem',
            }}
          >
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f8fafc' }}>
              Showing {filteredPosts.length} Architectural Whitepaper{filteredPosts.length === 1 ? '' : 's'}
              {selectedCategory !== 'All' && <span> in <span style={{ color: getCategoryColor(selectedCategory) }}>{selectedCategory}</span></span>}
              {searchTerm && <span> matching &quot;{searchTerm}&quot;</span>}
            </div>

            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
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
                <span>Reset all filters</span>
                <X size={14} />
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div
              style={{
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
                <Search size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                No Architectural Articles Found
              </h3>
              <p style={{ color: isLight ? '#64748b' : '#94a3b8', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
                We couldn&apos;t find any articles matching &ldquo;{searchTerm}&rdquo;. Try adjusting your search query or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
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
                View All Articles
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '1.75rem',
              }}
            >
              {filteredPosts.map((post) => {
                const catColor = getCategoryColor(post.category);

                return (
                  <article
                    key={post.slug}
                    style={{
                      borderRadius: '20px',
                      background: isLight ? '#ffffff' : 'rgba(10, 20, 36, 0.75)',
                      border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: isLight
                        ? '0 6px 24px rgba(0, 0, 0, 0.04)'
                        : '0 10px 30px rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = isLight
                        ? `0 16px 36px -6px ${catColor}30, 0 0 0 1px ${catColor}44`
                        : `0 20px 45px -8px ${catColor}35, 0 0 0 1px ${catColor}55`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = isLight
                        ? '0 6px 24px rgba(0, 0, 0, 0.04)'
                        : '0 10px 30px rgba(0, 0, 0, 0.3)';
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
                          fontSize: '1.35rem',
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
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Tag Pills */}
                      <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {post.tags.slice(0, 4).map((tag) => (
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
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          color: catColor,
                          textDecoration: 'none',
                        }}
                      >
                        <span>Read</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. EXECUTIVE ARCHITECTURE TEARDOWN CTA                                */}
      {/* ===================================================================== */}
      <section style={{ padding: '0 1.5rem 6rem 1.5rem' }}>
        <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              borderRadius: '24px',
              background: isLight
                ? 'linear-gradient(135deg, #008a75 0%, #0284c7 100%)'
                : 'linear-gradient(135deg, #003830 0%, #041a3a 100%)',
              border: isLight ? 'none' : '1px solid rgba(45, 212, 191, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              padding: '3.5rem 2.5rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
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
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
                maxWidth: '780px',
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
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 2rem',
                  borderRadius: '12px',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>Book Architecture Teardown</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 1.8rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'background 0.2s ease',
                }}
              >
                <MessageSquare size={16} />
                <span>Submit Technical Question</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
