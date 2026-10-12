import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android | Opash Software",
  description: "Native and cross-platform mobile apps for iOS and Android that deliver silky smooth 60fps performance and intuitive UI.",
};

export default function MobileDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "mobile-development")!;
  return <ServiceDetailTemplate service={service} />;
}
