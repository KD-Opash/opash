import React from "react";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Mobile App Dev | Opash Software",
  description:
    "We build powerful, user-centric mobile applications tailored to meet your business needs and engage your target audience. Native iOS/Android and Flutter/React Native solutions.",
  alternates: {
    canonical: "https://www.opashsoftware.com/mobile-development/",
  },
  openGraph: {
    title: "Mobile App Dev | Opash Software",
    description: "Empowering You With Innovation & Technology - Opash Software Mobile App Development Services",
    url: "https://www.opashsoftware.com/mobile-development/",
    siteName: "Opash Software",
    type: "website",
  },
  keywords: [
    "mobile app development",
    "iOS development",
    "Android development",
    "React Native",
    "Flutter",
    "cross-platform apps",
    "native mobile apps",
    "Opash Software",
  ],
};

export default function MobileDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "mobile-development")!;
  return <ServiceDetailTemplate service={service} />;
}
