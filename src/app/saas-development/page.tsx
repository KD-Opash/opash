import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Multi-Tenant SaaS Development Services | Opash Software",
  description: "End-to-end multi-tenant cloud software with subscription billing, enterprise RBAC, and automated onboarding.",
};

export default function SaasDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "saas-development")!;
  return <ServiceDetailTemplate service={service} />;
}
