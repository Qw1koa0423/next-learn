
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'liuhaoqi',
        mongodb_password: 'rf9zT267K9N9nkoT',
        mongodb_clustername: 'next-course',
        mongodb_database: 'blog-dev',
      }
    }
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'liuhaoqi',
      mongodb_password: 'rf9zT267K9N9nkoT',
      mongodb_clustername: 'next-course',
      mongodb_database: 'blog',
    }
  }
}

module.exports = nextConfig
