import { Game } from '@/types/game';

export const games: Game[] = [
  {
    id: '1',
    slug: 'monster-survivors',
    title: 'Monster Survivors',
    description: '在这个激动人心的生存动作游戏中对抗无尽的怪物潮！升级能力，尽可能长时间地生存下去。',
    longDescription: 'Monster Survivors 是一款令人上瘾的生存动作游戏，挑战你抵御无情的怪物浪潮。随着你的进步，你将收集经验宝石，升级角色，解锁强大的能力，帮助你生存更长时间。游戏结合了简单的控制和深度的策略玩法，易于学习但难以精通。',
    category: 'survival',
    tags: ['生存', '动作', 'Roguelike', '升级', '单人'],
    thumbnailUrl: '/images/games/monster-survivors.jpg',
    gameUrl: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
    featured: true,
    playCount: 15420,
    rating: 4.7,
    controls: [
      '使用方向键或 WASD 键移动角色',
      '自动攻击附近的敌人',
      '收集经验宝石以升级',
      '升级时选择强化能力'
    ],
    tips: [
      {
        title: '保持移动',
        description: '持续移动是生存的关键。不要站着不动，否则你会很快被包围。',
        color: 'blue'
      },
      {
        title: '平衡你的构建',
        description: '不要只专注于进攻。防御升级和区域控制能力可能救你一命。',
        color: 'purple'
      },
      {
        title: '学习敌人模式',
        description: '不同的怪物有不同的行为。了解它们可以帮助你有效地优先处理目标。',
        color: 'green'
      },
      {
        title: '掌握宝石收集时机',
        description: '有时最好把宝石留在地上，等到更安全的时候再收集。',
        color: 'red'
      }
    ],
    faqs: [
      {
        question: 'Monster Survivors 是免费游戏吗？',
        answer: '是的！Monster Survivors 完全免费在线玩。无需下载、安装或付费。'
      },
      {
        question: '我可以在移动设备上玩吗？',
        answer: '当然可以！游戏完全响应式，在桌面和移动设备上都能很好地运行。只需在移动浏览器中打开即可。'
      },
      {
        question: '我的进度会保存吗？',
        answer: '每次游戏会话都是全新的运行。目标是在每次游戏中尽可能长时间地生存，并打破你之前的记录。'
      },
      {
        question: '系统要求是什么？',
        answer: '你只需要一个启用了 JavaScript 的现代网络浏览器。游戏在大多数具有稳定互联网连接的设备上都能流畅运行。'
      }
    ],
    metaKeywords: [
      'Monster Survivors',
      '生存游戏',
      '在线游戏',
      '免费游戏',
      '动作游戏',
      '怪物战斗',
      '浏览器游戏',
      'Roguelike',
      'Vampire Survivors'
    ],
    publishedAt: '2025-01-15',
    updatedAt: '2025-11-02'
  },
  // 可以添加更多游戏...
];

export const featuredGames = games.filter(game => game.featured);

export const getGameBySlug = (slug: string): Game | undefined => {
  return games.find(game => game.slug === slug);
};

export const getGamesByCategory = (category: string): Game[] => {
  return games.filter(game => game.category === category);
};

