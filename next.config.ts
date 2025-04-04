import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bundui-images.netlify.app',
            },
        ],
    },
};

export default nextConfig;
