import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`}>
      <div className="game-card bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
          {game.thumbnailUrl ? (
            <Image
              src={game.thumbnailUrl}
              alt={game.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">🎮</span>
            </div>
          )}
          
          {/* Featured Badge */}
          {game.featured && (
            <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              ⭐ 精选
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {game.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {game.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              {/* Rating */}
              <div className="flex items-center text-yellow-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{game.rating}</span>
              </div>

              {/* Play Count */}
              <div className="flex items-center text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs">{(game.playCount / 1000).toFixed(1)}k</span>
              </div>
            </div>

            {/* Category Badge */}
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
              {game.category === 'action' && '动作'}
              {game.category === 'survival' && '生存'}
              {game.category === 'puzzle' && '益智'}
              {game.category === 'casual' && '休闲'}
              {game.category === 'arcade' && '街机'}
              {game.category === 'adventure' && '冒险'}
              {game.category === 'strategy' && '策略'}
              {game.category === 'multiplayer' && '多人'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

