/** next.config.js
 * 
 *  This file contains the Next.js configuration for the website.
 *  Next.js uses this file to customize the default configurations to suit the needs of the project.
 *
 *  @type {import('next').NextConfig} - TypeScript type declaration for the Next.js configuration object.
 *  
 *  @const nextConfig - An object that holds the configuration settings for the Next.js application.
 *    @property {boolean} reactStrictMode - Enables React's Strict Mode. It's a good practice to enable it for catching potential problems in the app during the development phase.
 *    @property {string} basePath - The base path for the website. This is useful when deploying the site to a subfolder on a domain.
 *    @property {string} assetPrefix - Sets the prefix for assets (like images) if hosted on a CDN or different domain.
 *    @property {boolean} trailingSlash - Whether to add a trailing slash to the path of URLs or not. When true, the path of every URL will end with a slash.
 * 
 *  @exports nextConfig - The Next.js configuration settings are exported to be used by the Next.js application.
 */

const nextConfig = {
  reactStrictMode: true,
  basePath: '/website-demo',
  assetPrefix: '/',
  trailingSlash: true,
};

module.exports = nextConfig;



