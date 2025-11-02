import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { games } from '@/data/games';

export const metadata: Metadata = {
  title: '所有游戏 - 免费在线游戏',
  description: '浏览我们收集的所有免费在线游戏。无需下载，即刻开始！',
  keywords: ['在线游戏', '免费游戏', '游戏大全', '网页游戏'],
  alternates: {
    canonical: 'https://gameonline.com/games',
  },
};

export default function GamesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Header */}
        <section className="gradient-bg text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              所有游戏
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              浏览我们收集的所有精彩游戏
            </p>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-gray-600">
                共 <span className="font-bold text-purple-600">{games.length}</span> 款游戏
              </p>
              
              {/* 可以添加排序、筛选功能 */}
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors">
                  最新
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  最热
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  评分
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>

            {/* 如果游戏很多，可以添加分页 */}
            {games.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">暂无游戏</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

