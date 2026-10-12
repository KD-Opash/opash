import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "API Integration & Microservices Architecture | Opash Software",
  description: "Connect disparate enterprise systems, CRM, ERP, and payment gateways with high-throughput microservices and webhooks.",
};

export default function ApiIntegrationPage() {
  const service = servicesData.find((s) => s.slug === "api-integration")!;
  return <ServiceDetailTemplate service={service} />;
}
