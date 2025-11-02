import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gameonline.com'),
  title: {
    default: '游戏在线 - 免费在线游戏平台',
    template: '%s | 游戏在线'
  },
  description: '最好的免费在线游戏平台，无需下载即可畅玩各种精彩游戏！包括动作、益智、休闲、生存等多种类型游戏。',
  keywords: ['在线游戏', '免费游戏', '网页游戏', '浏览器游戏', 'HTML5游戏', '无需下载'],
  authors: [{ name: '游戏在线' }],
  creator: '游戏在线',
  publisher: '游戏在线',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://gameonline.com',
    siteName: '游戏在线',
    title: '游戏在线 - 免费在线游戏平台',
    description: '最好的免费在线游戏平台，无需下载即可畅玩各种精彩游戏！',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '游戏在线',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '游戏在线 - 免费在线游戏平台',
    description: '最好的免费在线游戏平台，无需下载即可畅玩各种精彩游戏！',
    images: ['/og-image.jpg'],
  },
  verification: {
    // 添加你的验证码
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://gameonline.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 预连接到外部资源 */}
        <link rel="preconnect" href="https://cloud.onlinegames.io" />
        <link rel="dns-prefetch" href="https://cloud.onlinegames.io" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className="bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}

