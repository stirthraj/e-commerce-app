/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
