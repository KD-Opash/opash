import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Web Development Services | Next.js & React Apps | Opash Software",
  description: "High-performance, responsive, and SEO-optimized web applications built with modern frontend and backend frameworks.",
};

export default function WebDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "web-development")!;
  return <ServiceDetailTemplate service={service} />;
}
