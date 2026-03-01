/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['leaflet', 'leaflet.markercluster'],
};

module.exports = nextConfig;
