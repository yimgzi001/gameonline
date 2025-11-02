'use client';

interface GameEmbedProps {
  gameUrl: string;
  title: string;
}

export default function GameEmbed({ gameUrl, title }: GameEmbedProps) {
  return (
    <div className="game-container bg-black">
      <iframe
        src={gameUrl}
        title={`玩 ${title} 在线游戏`}
        allowFullScreen
        loading="lazy"
        allow="accelerometer; gyroscope; fullscreen"
        className="w-full h-full"
      />
    </div>
  );
}

