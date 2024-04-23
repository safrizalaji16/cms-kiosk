/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    baseUrlAPI: "https://kiosk-server.apidev.lol/api",
    baseUrlAdmin: "https://kiosk-server.apidev.lol/api",
  },
};

export default nextConfig;
