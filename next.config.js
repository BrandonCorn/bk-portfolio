/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    accountSid: 'AC4e5291dddcf44d59d36745b8440bf34c',
    authToken: 'e74cf603b0750ec84989d9187f95d89d',
    verifyServiceId: 'VA14fd414e0d7ebd16010d28717dbc88d1'
},
headers:{
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': "GET, DELETE, PUT, POST"
}
}

module.exports = nextConfig
