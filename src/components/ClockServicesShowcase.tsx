"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Service3DLiveIcon } from "@/components/Service3DLiveIcon";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  url: string;
  slug: string;
  badge: string;
  accent: string;
  accentRgb: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    desc: "Opash Software builds scalable custom software tailored to your business needs — from enterprise platforms to niche solutions. Our agile approach, combined with DevOps automation, ensures faster delivery and long-term performance.",
    url: "https://www.opashsoftware.com/custom-software-development/",
    slug: "custom-software-development",
    badge: "Enterprise Grade",
    accent: "#0ea5e9",
    accentRgb: "14, 165, 233",
    image: "/images/services/custom_software_3d.jpg",
  },
  {
    id: "web-development",
    title: "Web Development",
    desc: "Get modern, responsive, and SEO-friendly websites with Opash Software’s web development services. We build high-performance platforms using cutting-edge technologies for startups and enterprises.",
    url: "https://www.opashsoftware.com/web-development/",
    slug: "web-development",
    badge: "Lightning Fast",
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    image: "/images/services/web_dev_3d.jpg",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    desc: "We design and develop feature-rich mobile apps for iOS and Android that are fast, secure, and scalable. Opash Software helps you deliver exceptional user experiences with cross-platform and native apps.",
    url: "https://www.opashsoftware.com/mobile-development/",
    slug: "mobile-development",
    badge: "Cross-Platform",
    accent: "#3b82f6",
    accentRgb: "59, 130, 246",
    image: "/images/services/mobile_dev_3d.jpg",
  },
  {
    id: "ai-ml-solutions",
    title: "AI & ML Solutions",
    desc: "Leverage Artificial Intelligence and Machine Learning to automate workflows, enhance decision-making, and personalize user experiences. Opash Software delivers AI-driven solutions tailored to your business goals.",
    url: "https://www.opashsoftware.com/ai-ml-solutions/",
    slug: "ai-ml-solutions",
    badge: "AI Systems",
    accent: "#a855f7",
    accentRgb: "168, 85, 247",
    image: "/images/services/ai_ml_3d.jpg",
  },
  {
    id: "api-integration",
    title: "API Integration & Microservices",
    desc: "Enhance system efficiency with seamless API integration and microservices architecture. Opash Software enables rapid scalability, modular development, and faster time-to-market for your digital products.",
    url: "https://www.opashsoftware.com/api-integration/",
    slug: "api-integration",
    badge: "Microservices",
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    image: "/images/services/api_integ_3d.jpg",
  },
  {
    id: "hire-developers",
    title: "Hire Dedicated Developers",
    desc: "Hire vetted and skilled developers from Opash Software for your custom projects. Scale your tech team on-demand with flexible engagement models and domain expertise.",
    url: "https://www.opashsoftware.com/hire-developers/",
    slug: "hire-developers",
    badge: "Dedicated Team",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    image: "/images/services/hire_devs_3d.jpg",
  },
];

export function ClockServicesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll automatically: shifts by 1 card step every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const firstChild = el.firstElementChild as HTMLElement;
      if (!firstChild) return;

      const cardWidth = firstChild.getBoundingClientRect().width;
      const step = cardWidth + 20; // card width + gap
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScrollLeft - 15) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. CENTERED SECTION TITLE & PARAGRAPH */}
        <div
          className="text-center max-w-3xl mx-auto px-4 flex flex-col items-center justify-center"
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <h2
            className="heading-section"
            style={{ textAlign: "center", width: "100%", margin: "0 auto" }}
          >
            Our Services
          </h2>
          <p
            className="subhead-lead mt-3.5"
            style={{
              textAlign: "center",
              maxWidth: "780px",
              margin: "0.85rem auto 0 auto",
            }}
          >
            We create highly responsive applications with the remarkable
            aesthetics that deliver a spectrum of result oriented digital
            experience.
          </p>
        </div>

        {/* 2. 4 CARDS PER ROW - AUTO-SCROLLING TRACK */}
        <div className="relative pt-2">
          {/* Horizontally Scrollable Track: exactly 4 cards fit in 1 line on desktop */}
          <div ref={scrollRef} className="services-four-card-track">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="service-four-card-col shrink-0 snap-start flex"
              >
                {/* Clean, elegant card layout with 3D AI generated icon */}
                <Link
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-four-card-inner interactive-card flex flex-col justify-start items-center text-center w-full transition-all duration-300 relative group cursor-pointer"
                  style={{
                    padding: "2rem 1.4rem 2rem 1.4rem",
                    borderRadius: "1.75rem",
                    backgroundColor: "rgba(10, 18, 32, 0.92)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 14px 35px -10px rgba(0, 0, 0, 0.45)",
                    backdropFilter: "blur(20px)",
                    minHeight: "410px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  {/* 3D Animated Live Hologram Asset tailored to Card Title */}
                  <Service3DLiveIcon
                    id={service.id}
                    image={service.image}
                    title={service.title}
                    accent={service.accent}
                    accentRgb={service.accentRgb}
                  />

                  {/* Title */}
                  <h3
                    className="service-four-card-title text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 text-center min-h-[2.8rem] flex items-center justify-center"
                    style={{
                      lineHeight: 1.35,
                      color: "#ffffff",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Content / Description */}
                  <p
                    className="service-four-card-desc text-xs sm:text-[13px] leading-relaxed text-center line-clamp-4"
                    style={{
                      lineHeight: 1.68,
                      color: "rgba(255, 255, 255, 0.92)",
                    }}
                  >
                    {service.desc}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
