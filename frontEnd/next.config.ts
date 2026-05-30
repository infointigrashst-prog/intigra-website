
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optional: If you want to set the NEXT_PUBLIC_SITE_URL environment variable here
  // env: {
  //   NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' 
  //     ? 'https://your-production-domain.com' 
  //     : 'http://localhost:9002',
  // },
};

export default nextConfig;
