// next.config.ts
import { NextConfig } from 'next';

const config: NextConfig = {
  eslint: {
    // This will disable ESLint during production builds, allowing you to deploy without ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default config;
