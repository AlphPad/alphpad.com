/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  images: {
    unoptimized: true
  },
  env: {
  },
  publicRuntimeConfig: {
  },

}

module.exports = nextConfig
