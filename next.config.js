
/**
 * @type {import('next').NextConfig}
 */

 const path = require('path');
 
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  basePath: '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: '@import "variables";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/s/:snapshotId',
        destination: '/api/sameorigin/:snapshotId',
      },
      { source: '/r/:snapshotId', destination: '/api/share/:snapshotId' },
    ];
  },
};
