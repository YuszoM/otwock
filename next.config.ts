import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@phosphor-icons/react"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/o-nas", permanent: true },
      { source: "/team", destination: "/zespol", permanent: true },
      { source: "/services", destination: "/uslugi", permanent: true },
      { source: "/pricing", destination: "/cennik", permanent: true },
      { source: "/news", destination: "/aktualnosci", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
      { source: "/booking", destination: "/rezerwacja", permanent: true },
      { source: "/careers", destination: "/kariera", permanent: true },
    ];
  },
};

export default nextConfig;
