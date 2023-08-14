/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    accountSid: "",
    authToken: "",
    verifyServiceId: "",
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, PUT, POST",
  },
};

module.exports = nextConfig;
