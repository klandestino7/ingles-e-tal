/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RDSTATION_API_ENDPOINT: process.env.RDSTATION_API_ENDPOINT,
        RDSTATION_API_KEY: process.env.RDSTATION_API_KEY,
        RDSTATION_PUBLIC_TOKEN: process.env.RDSTATION_PUBLIC_TOKEN,
        RDSTATION_PRIVATE_TOKEN: process.env.RDSTATION_PRIVATE_TOKEN,
        NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    },
}

module.exports = nextConfig
