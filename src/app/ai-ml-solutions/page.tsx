import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "AI & ML Solutions | Generative AI & Autonomous Agents | Opash Software",
  description: "Automate complex workflows, deploy private LLM agents, and unlock predictive insights tailored to your business data.",
};

export default function AiMlSolutionsPage() {
  const service = servicesData.find((s) => s.slug === "ai-ml-solutions")!;
  return <ServiceDetailTemplate service={service} />;
}
