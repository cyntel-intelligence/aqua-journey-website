import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // WordPress admin URLs
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login',
        destination: '/',
        permanent: true,
      },
      // WordPress content URLs
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
      // WordPress blog/post URLs
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/post/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/about',
        permanent: true,
      },
      // WordPress feeds
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/rss',
        destination: '/',
        permanent: true,
      },
      // WordPress XML-RPC and other common files
      {
        source: '/xmlrpc.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-json/:path*',
        destination: '/',
        permanent: true,
      },
      // Common WordPress pages
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/:path*',
        destination: '/',
        permanent: true,
      },
      // WordPress search
      {
        source: '/search/:path*',
        destination: '/',
        permanent: true,
      },
      // WordPress archives
      {
        source: '/archives/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:path*',
        destination: '/',
        permanent: true,
      },
      // Common WordPress plugin URLs
      {
        source: '/wp-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      // WooCommerce/eCommerce URLs
      {
        source: '/checkout',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/checkout/:path*',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/cart/:path*',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/shop/:path*',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/product/:path*',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/my-account',
        destination: '/',
        permanent: true,
      },
      {
        source: '/my-account/:path*',
        destination: '/',
        permanent: true,
      },
      // Old WordPress page URLs
      {
        source: '/adults-ages-18',
        destination: '/classes',
        permanent: true,
      },
      {
        source: '/blog-home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/choosing-a-class',
        destination: '/classes',
        permanent: true,
      },
      {
        source: '/colibri-19459',
        destination: '/',
        permanent: true,
      },
      {
        source: '/colibri-19481',
        destination: '/',
        permanent: true,
      },
      {
        source: '/colibri-19567',
        destination: '/',
        permanent: true,
      },
      {
        source: '/colibri-:id(\\d+)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/groups',
        destination: '/classes',
        permanent: true,
      },
      {
        source: '/holiday-specials-2',
        destination: '/gift-cards',
        permanent: true,
      },
      {
        source: '/home-1-yogalicious',
        destination: '/',
        permanent: true,
      },
      {
        source: '/swim-float-swim',
        destination: '/classes',
        permanent: true,
      },
      {
        source: '/test',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
