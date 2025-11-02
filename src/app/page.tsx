import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { games, featuredGames } from '@/data/games';
import { categories } from '@/data/categories';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="gradient-bg text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              🎮 免费在线游戏平台
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto mb-8">
              无需下载，即刻开始！畅玩数百款精彩游戏
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/games"
                className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                浏览所有游戏
              </Link>
              <Link
                href="#featured"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-purple-600 transition-colors"
              >
                查看精选游戏
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Games */}
        <section id="featured" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ⭐ 精选游戏
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                我们为你精选了最受欢迎、最好玩的游戏
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/games"
                className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
              >
                查看更多游戏 →
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🎯 游戏分类
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                探索不同类型的游戏，找到你最喜欢的
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="feature-card bg-white p-6 rounded-2xl shadow-md text-center group"
                >
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ✨ 为什么选择我们
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">即刻开始</h3>
                <p className="text-gray-600">无需下载安装，点击即可畅玩</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">完全免费</h3>
                <p className="text-gray-600">所有游戏完全免费，无需付费</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">多端支持</h3>
                <p className="text-gray-600">支持电脑、手机、平板等设备</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              准备好开始游戏了吗？
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              立即开始探索我们精彩的游戏世界！
            </p>
            <Link
              href="/games"
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              立即开始游戏
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

