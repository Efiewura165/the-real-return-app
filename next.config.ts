import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The embedded Sanity Studio (app/studio) pulls in client-heavy internals
  // (swr, styled-components) that trip up Turbopack's RSC module tracing
  // when bundled directly — treat the package as an external instead.
  serverExternalPackages: ["sanity"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/academy", destination: "/journey-academy", permanent: true },
      { source: "/journey", destination: "/experiences", permanent: true },
      { source: "/connect", destination: "/reserve", permanent: true },
    ];
  },
};

export default nextConfig;
