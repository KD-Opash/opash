import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/services/custom-software-development",
        destination: "/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/mobile-development",
        destination: "/mobile-development",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development",
        destination: "/mobile-development",
        permanent: true,
      },
      {
        source: "/services/ai-ml-solutions",
        destination: "/ai-ml-solutions",
        permanent: true,
      },
      {
        source: "/services/saas-development",
        destination: "/saas-development",
        permanent: true,
      },
      {
        source: "/services/api-integration",
        destination: "/api-integration",
        permanent: true,
      },
      {
        source: "/services/qa-testing",
        destination: "/qa-testing",
        permanent: true,
      },
      {
        source: "/services/hire-developers",
        destination: "/hire-developers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
