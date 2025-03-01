/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
      return [
          {
              source: '/:path*',
              has: [
                  {
                      type: 'host',
                      value: 'exiftuner.zytact.in',
                  },
              ],
              destination: 'https://exiftuner.zytact.com/:path*',
              permanent: true, // This sets up a 301 redirect
          },
      ];
  },
};

export default nextConfig;
