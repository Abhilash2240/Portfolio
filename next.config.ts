import type { NextConfig } from 'next'

const repoName = '/Portfolio'

const nextConfig: NextConfig = {
  // Export as static site for GitHub Pages
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName,
  // Ensure pages are emitted as folders with index.html
  trailingSlash: true,

  // Image handling: disable optimization for static export
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  // Static compression
  compress: true,

  // Strict mode for React
  reactStrictMode: true,

  // Allow importing from tokens directory
  experimental: {},
}

export default nextConfig
