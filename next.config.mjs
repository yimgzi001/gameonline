/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出（可选，用于 Cloudflare Pages）
  // output: 'export',
  
  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 性能优化
  swcMinify: true,
  
  // 压缩
  compress: true,
  
  // 严格模式
  reactStrictMode: true,
  
  // 自定义 headers（SEO 和安全）
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};

export default nextConfig;

