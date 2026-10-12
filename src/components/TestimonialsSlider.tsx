"use client";

import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star, 
  ExternalLink, 
  ShieldCheck,
  Building,
  CheckCircle2
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  website: string;
  relationship: string;
  rating: number;
  quote: string;
  avatarText: string;
  metric: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "ucarehq",
    author: "Brad Jeffery",
    role: "Founder & Product Lead",
    company: "UCareHQ",
    website: "https://ucarehq.com/",
    relationship: "Custom Healthcare Platform",
    rating: 5,
    quote: "Opash Software delivered a seamless and intuitive platform for UCareHQ, combining modern design with robust functionality to enhance user experience and operational efficiency.",
    avatarText: "BJ",
    metric: "65% Faster Care Workflows"
  },
  {
    id: "iko",
    author: "Fred Bene",
    role: "Engineering Director",
    company: "IKO International",
    website: "https://next.ikointl.com/",
    relationship: "2-Year Full-Time Engagement",
    rating: 5,
    quote: "We worked with Hiren (Opash Software) for 2 years on a full-time basis as a full stack developer (MEAN) working mostly on the frontend in Angular. They are true professionals — communication was fantastic, and their level of commitment to the project was unmatched. We would love to be working with Opash Software again in the future, and wish them all the best.",
    avatarText: "FB",
    metric: "2 Years Retained Engagement"
  },
  {
    id: "esanad",
    author: "Anas M",
    role: "Co-Founder & CTO",
    company: "eSanad",
    website: "https://www.esanad.com/",
    relationship: "Digital Legal Verification Portal",
    rating: 5,
    quote: "We partnered with Opash Software to bring our vision for eSanad.com to life, and they delivered beyond expectations. From secure document verification to a seamless user interface, the platform is fast, intuitive, and scalable.",
    avatarText: "AM",
    metric: "250k+ Documents Verified"
  },
  {
    id: "taygo",
    author: "Sepi G.",
    role: "VP of Product",
    company: "Taygo",
    website: "https://www.taygo.com/",
    relationship: "FinTech & AWS Architecture",
    rating: 5,
    quote: "It was great working with Opash Software. They developed excellent products for me and provided the best support — great knowledge of AWS setup and API management. It is highly recommended to Hire.",
    avatarText: "SG",
    metric: "4x Lead Velocity"
  },
  {
    id: "opinionpoll",
    author: "Anthony F",
    role: "Founder",
    company: "OpinionPoll",
    website: "https://www.opinionpoll.org/",
    relationship: "High-Concurrency Polling Engine",
    rating: 5,
    quote: "Thank you Hiren, for your hard work and dedication! Your expertise has been invaluable, and we truly appreciate the effort you've put into delivering exceptional results. Looking forward to collaborating with you again in the future!",
    avatarText: "AF",
    metric: "50k+ Concurrent Voters"
  },
  {
    id: "stickyframe",
    author: "Austin Rogers",
    role: "Creative Director",
    company: "StickyFrame",
    website: "https://www.stickyframe.com/",
    relationship: "Creative Production Platform",
    rating: 5,
    quote: "It was great working with him and we are going to work on a next project again. Super responsive, proactive problem solving, and delivered ahead of deadline.",
    avatarText: "AR",
    metric: "100% On-Time Delivery"
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div style={{ position: "relative" }}>
      {/* Testimonial Active Display */}
      <div
        className="glass-panel"
        style={{
          padding: "3.5rem 3rem",
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(14, 80, 215, 0.1) 100%)",
          border: "1px solid rgba(14, 80, 215, 0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Quote
          size={120}
          style={{
            position: "absolute",
            top: "-20px",
            right: "20px",
            color: "rgba(14, 80, 215, 0.08)",
            pointerEvents: "none",
          }}
        />

        <div className="flex justify-between items-center flex-wrap gap-4" style={{ marginBottom: "2rem" }}>
          {/* Rating stars & verified badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                padding: "0.2rem 0.6rem",
                borderRadius: "var(--radius-full)",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={14} /> Verified Client Review
            </span>
          </div>

          {/* Metric Pill */}
          <div
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(0, 210, 255, 0.1)",
              border: "1px solid rgba(0, 210, 255, 0.3)",
              color: "var(--color-cyan)",
              fontSize: "0.85rem",
              fontWeight: 700,
            }}
          >
            Impact: {current.metric}
          </div>
        </div>

        {/* The Quote */}
        <p
          style={{
            fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
            lineHeight: 1.6,
            color: "#ffffff",
            fontWeight: 500,
            fontStyle: "italic",
            marginBottom: "2.5rem",
            minHeight: "90px",
          }}
        >
          &ldquo;{current.quote}&rdquo;
        </p>

        {/* Author Details & Verified Link */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0e50d7, #00d2ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "1.2rem",
                boxShadow: "0 0 15px rgba(14, 80, 215, 0.5)",
              }}
            >
              {current.avatarText}
            </div>
            <div>
              <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.15rem" }}>
                {current.author}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                {current.role} • <strong style={{ color: "var(--color-cyan)" }}>{current.company}</strong>
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                Project: {current.relationship}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={current.website}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem" }}
            >
              <span>Visit {current.company}</span>
              <ExternalLink size={14} />
            </a>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid var(--border-subtle)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  backgroundColor: "rgba(14, 80, 215, 0.4)",
                  border: "1px solid rgba(0, 210, 255, 0.4)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center items-center gap-2" style={{ marginTop: "1.5rem" }}>
        {testimonials.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: idx === currentIndex ? 28 : 8,
              height: 8,
              borderRadius: "4px",
              backgroundColor: idx === currentIndex ? "var(--color-cyan)" : "rgba(255, 255, 255, 0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
