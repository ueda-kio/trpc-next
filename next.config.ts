import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: process.env.NODE_ENV === 'production',
  pageExtensions: ['page.tsx', 'api.ts'],
};

export default nextConfig;
