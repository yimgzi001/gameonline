import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解游戏在线 - 最好的免费在线游戏平台。我们致力于为玩家提供最好的游戏体验。',
  alternates: {
    canonical: 'https://gameonline.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Header */}
        <section className="gradient-bg text-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              关于我们
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto">
              致力于为玩家提供最好的免费在线游戏体验
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Mission */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🎯 我们的使命
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  游戏在线致力于为全球玩家提供最优质的免费在线游戏平台。我们相信，优秀的游戏应该是免费的、易于访问的，并且能够为每个人带来快乐。无需下载、无需安装，只需打开浏览器，即刻开始游戏！
                </p>
              </div>

              {/* What We Offer */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ✨ 我们提供什么
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎮</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">精选游戏</h3>
                      <p className="text-gray-600">
                        我们精心挑选每一款游戏，确保为玩家提供最好的游戏体验。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🆓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">完全免费</h3>
                      <p className="text-gray-600">
                        所有游戏完全免费，无需付费，无隐藏收费。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">即刻开始</h3>
                      <p className="text-gray-600">
                        无需下载安装，点击即可开始游戏。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">多端支持</h3>
                      <p className="text-gray-600">
                        支持电脑、手机、平板等各种设备。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Values */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  💎 我们的价值观
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">玩家至上</h3>
                      <p className="text-gray-600">
                        我们始终将玩家的体验放在第一位，致力于提供最好的游戏服务。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">品质保证</h3>
                      <p className="text-gray-600">
                        每一款游戏都经过精心筛选和测试，确保质量上乘。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">持续创新</h3>
                      <p className="text-gray-600">
                        我们不断寻找和添加新的游戏，保持平台的新鲜感。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-4">联系我们</h2>
                <p className="mb-6 opacity-95">
                  有任何问题、建议或合作意向？我们很乐意听到你的声音！
                </p>
                <a
                  href="mailto:contact@gameonline.com"
                  className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  发送邮件
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

