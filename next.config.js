
/**
 * @type {import('next').NextConfig}
 */

 const path = require('path');
 
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: '@import "variables";',
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
