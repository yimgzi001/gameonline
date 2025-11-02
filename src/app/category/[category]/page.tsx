import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { getGamesByCategory } from '@/data/games';
import { categories, getCategoryById } from '@/data/categories';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// 生成静态参数
export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

// 生成动态元数据
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryById(params.category);

  if (!category) {
    return {
      title: '分类未找到',
    };
  }

  return {
    title: `${category.name} - 免费在线游戏`,
    description: `${category.description}。浏览所有${category.name}类型的免费在线游戏。`,
    keywords: [category.name, '在线游戏', '免费游戏', category.description],
    alternates: {
      canonical: `https://gameonline.com/category/${category.id}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.category);

  if (!category) {
    notFound();
  }

  const categoryGames = getGamesByCategory(params.category);

  return (
    <>
      <Header />

      <main>
        {/* Header */}
        <section className="gradient-bg text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <p className="text-gray-600">
                共 <span className="font-bold text-purple-600">{categoryGames.length}</span> 款{category.name}
              </p>
            </div>

            {categoryGames.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">😔</div>
                <p className="text-gray-500 text-lg mb-4">
                  该分类暂无游戏
                </p>
                <a
                  href="/games"
                  className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  浏览所有游戏
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Other Categories */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
              探索其他分类
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {categories
                .filter((cat) => cat.id !== params.category)
                .map((cat) => (
                  <a
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="feature-card bg-white p-4 rounded-xl shadow-md text-center"
                  >
                    <div className="text-4xl mb-2">{cat.icon}</div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {cat.name}
                    </h3>
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

