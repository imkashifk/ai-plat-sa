/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: ['images.unsplash.com', 'flagcdn.com']
  },
  // Add webpack configuration to handle chunk loading
  webpack: (config, { isServer }) => {
    // Optimize chunks
    config.optimization.chunkIds = 'named';
    config.optimization.moduleIds = 'named';
    
    return config;
  },
  // Ensure environment variables are available
  env: {
    MONGODB_URI: process.env.MONGODB_URI
  },
  // Add proper CORS headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' }
        ]
      }
    ]
  }
}

module.exports = nextConfig