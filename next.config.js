/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'s3.amazonaws.com', 
      },
      {
        protocol: 'https',
        hostname:'i0.wp.com', 
      },
    ],
  },
}

module.exports = nextConfig
