/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com"],
  },
  experimental: { esmExternals: true },
};

export default nextConfig;
