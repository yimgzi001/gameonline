import { CategoryInfo } from '@/types/game';

export const categories: CategoryInfo[] = [
  {
    id: 'action',
    name: '动作游戏',
    description: '快节奏的动作和战斗游戏',
    icon: '⚔️'
  },
  {
    id: 'survival',
    name: '生存游戏',
    description: '考验生存技能的挑战',
    icon: '🛡️'
  },
  {
    id: 'puzzle',
    name: '益智游戏',
    description: '动脑思考的智力游戏',
    icon: '🧩'
  },
  {
    id: 'casual',
    name: '休闲游戏',
    description: '轻松有趣的休闲娱乐',
    icon: '🎮'
  },
  {
    id: 'arcade',
    name: '街机游戏',
    description: '经典街机风格游戏',
    icon: '🕹️'
  },
  {
    id: 'adventure',
    name: '冒险游戏',
    description: '探索和冒险的旅程',
    icon: '🗺️'
  },
  {
    id: 'strategy',
    name: '策略游戏',
    description: '需要战略思维的游戏',
    icon: '♟️'
  },
  {
    id: 'multiplayer',
    name: '多人游戏',
    description: '与其他玩家一起游戏',
    icon: '👥'
  }
];

export const getCategoryById = (id: string) => {
  return categories.find(cat => cat.id === id);
};

