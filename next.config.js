/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // is not configures error so we can use the addr as proxy and register here
  },
};

module.exports = nextConfig;

// whenever edit config file , restart server
