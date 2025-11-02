export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: GameCategory;
  tags: string[];
  thumbnailUrl: string;
  gameUrl: string;
  featured: boolean;
  playCount: number;
  rating: number;
  controls: string[];
  tips: GameTip[];
  faqs: FAQ[];
  metaKeywords: string[];
  publishedAt: string;
  updatedAt: string;
}

export interface GameTip {
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'indigo';
}

export interface FAQ {
  question: string;
  answer: string;
}

export type GameCategory = 
  | 'action'
  | 'puzzle'
  | 'casual'
  | 'arcade'
  | 'adventure'
  | 'strategy'
  | 'multiplayer'
  | 'survival';

export interface CategoryInfo {
  id: GameCategory;
  name: string;
  description: string;
  icon: string;
}

