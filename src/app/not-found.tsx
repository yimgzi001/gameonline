import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <div className="text-9xl font-bold text-purple-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">页面未找到</h1>
          <p className="text-xl text-gray-600 mb-8">
            抱歉，你访问的页面不存在
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              返回首页
            </Link>
            <Link
              href="/games"
              className="inline-block bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              浏览游戏
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

