import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameEmbed from '@/components/GameEmbed';
import GameCard from '@/components/GameCard';
import { getGameBySlug, games } from '@/data/games';
import { Game } from '@/types/game';

interface GamePageProps {
  params: {
    slug: string;
  };
}

// 生成静态参数
export function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

// 生成动态元数据
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug);

  if (!game) {
    return {
      title: '游戏未找到',
    };
  }

  return {
    title: `${game.title} - 免费在线玩`,
    description: game.description,
    keywords: game.metaKeywords,
    openGraph: {
      title: `${game.title} - 免费在线玩`,
      description: game.description,
      type: 'website',
      url: `https://gameonline.com/games/${game.slug}`,
      images: [
        {
          url: game.thumbnailUrl || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - 免费在线玩`,
      description: game.description,
      images: [game.thumbnailUrl || '/og-image.jpg'],
    },
    alternates: {
      canonical: `https://gameonline.com/games/${game.slug}`,
    },
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  // 相关游戏（同类别）
  const relatedGames = games
    .filter((g) => g.category === game.category && g.id !== game.id)
    .slice(0, 3);

  return (
    <>
      <Header />

      <main>
        {/* Game Header */}
        <section className="gradient-bg text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                {game.title}
              </h1>
              <p className="text-lg md:text-xl font-light opacity-95">
                {game.description}
              </p>
              
              {/* Stats */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{game.rating} 评分</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{(game.playCount / 1000).toFixed(1)}k 次播放</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Embed */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <GameEmbed gameUrl={game.gameUrl} title={game.title} />
            
            {/* Controls Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🎮 游戏控制</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {game.controls.map((control, index) => (
                  <li key={index}>• {control}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Game Description */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                关于 {game.title}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{game.longDescription}</p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        {game.tips && game.tips.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  💡 游戏技巧
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {game.tips.map((tip, index) => (
                    <div
                      key={index}
                      className={`bg-${tip.color}-50 p-6 rounded-xl border-l-4 border-${tip.color}-600`}
                    >
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">
                        {tip.title}
                      </h3>
                      <p className="text-gray-700">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {game.faqs && game.faqs.length > 0 && (
          <section className="bg-gray-50 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  ❓ 常见问题
                </h2>
                <div className="space-y-6">
                  {game.faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  🎯 相关游戏
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedGames.map((relatedGame) => (
                    <GameCard key={relatedGame.id} game={relatedGame} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="gradient-bg text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              喜欢这个游戏吗？
            </h2>
            <p className="text-xl mb-8 opacity-95">
              探索更多精彩游戏！
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg mr-4"
            >
              返回顶部玩游戏
            </a>
            <a
              href="/games"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-purple-600 transition-colors"
            >
              浏览更多游戏
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoGame',
            name: game.title,
            url: `https://gameonline.com/games/${game.slug}`,
            description: game.longDescription,
            genre: game.tags,
            playMode: 'SinglePlayer',
            gamePlatform: 'Web Browser',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: game.rating,
              bestRating: 5,
              ratingCount: Math.floor(game.playCount / 10),
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </>
  );
}

