/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "instrument.ru",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
