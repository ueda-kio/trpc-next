/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production',
  pageExtensions: ['page.tsx', 'api.ts'],
};

export default nextConfig;
