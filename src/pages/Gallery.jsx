
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Heart, Eye, Calendar, ExternalLink, Music, Star, Smile, Zap, Users, Youtube, Twitch } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const getYoutubeThumbnail = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "/api/placeholder/300/200";
  };
  
  const allStreams = [
    // С ХАЗЯЕВАМИ
    { id: 1, title: "ПРЫЖКИ с ТРАМПЛИНА в БАССЕЙН под ДОЖДЕМ", url: "https://www.youtube.com/watch?v=IVHE1vUHuvA", viewers: "3.9M", type: 'collab', collab: "ХАЗЯЕВА" },
    { id: 2, title: "Кореш СОШЕЛ С УМА И НАКРИЧАЛ на ХОЗЯЕВ", url: "https://www.youtube.com/watch?v=stBFcAS9SXQ", viewers: "1.3M", type: 'collab', collab: "ХАЗЯЕВА" },
    { id: 3, title: "НЕЗНАКОМЫЕ ДЕВОЧКИ ПРОНИКЛИ в ДОМ", url: "https://www.youtube.com/watch?v=mfpOFKVR0z4", viewers: "1.7M", type: 'collab', collab: "ХАЗЯЕВА" },
    { id: 4, title: "ПЮРЕ и КОТЛЕТЫ ХУЖЕ ЧЕМ в СТОЛОВКЕ", url: "https://www.youtube.com/watch?v=y7goMqBxQuY", viewers: "1.4M", type: 'collab', collab: "ХАЗЯЕВА" },
    { id: 5, title: "ДОМ СУМАСШЕДШЕГО ДЕДА", url: "https://www.youtube.com/watch?v=XP4xSAmyiCE", viewers: "1.1M", type: 'collab', collab: "ХАЗЯЕВА" },
    
    // Музыка
    { id: 6, title: "Кореш - ТОЛПА (feat. treepside)", url: "https://www.youtube.com/watch?v=d8JjTCmcda8", viewers: "2.7M", type: 'music' },
    { id: 7, title: "Кореш - DIAMOND (feat. PINQ)", url: "https://www.youtube.com/watch?v=fJCugNbiV3w", viewers: "1.1M", type: 'music' },
    
    // Экстрим
    { id: 8, title: "ХОЗЯЕВА ПРЫГАЮТ в ВОДУ с БОЛЬШОЙ ВЫСОТЫ", url: "https://www.youtube.com/watch?v=_wUz2USAZRY", viewers: "1.1M", type: 'extreme' },
    { id: 9, title: "ПРЫЖКИ в БАССЕЙН с ТАРЗАНКИ", url: "https://www.youtube.com/watch?v=sdPoA4Vgyf4", viewers: "1.4M", type: 'extreme' },
    { id: 10, title: "САМАЯ ГРЯЗНАЯ КВАРТИРА в МИРЕ", url: "https://www.youtube.com/watch?v=XP4xSAmyiCE", viewers: "2.4M", type: 'extreme' },
    { id: 11, title: "СКИНУЛИ БАЙДАРКУ с ГОРНОЛОЖНОГО СКЛОНА", url: "https://www.youtube.com/watch?v=9nKobrcxKR8", viewers: "2.1M", type: 'extreme' },
    
    // Веселье
    { id: 12, title: "МАМА, Я БОЛЬШЕ НЕ НЕФОР - Кореш ПОБРИЛСЯ НАЛЫСО", url: "https://www.youtube.com/watch?v=Dwak8csXZXs", viewers: "1.4M", type: 'fun' },
    { id: 13, title: "ШОУ ПОДКАТЫ - ИНСТ РИНА", url: "https://www.youtube.com/watch?v=R8lbfyHv_h8", viewers: "1.7M", type: 'fun' },
    { id: 14, title: "САМАЯ СТРАШНАЯ НОЧЬ", url: "https://www.youtube.com/watch?v=ztW8FOcUf-0", viewers: "2.7M", type: 'fun' },
    { id: 15, title: "СМОТРИТЕ на это ВИДЕО, чтобы ПОДНЯТЬ НАСТРОЕНИЕ", url: "https://www.youtube.com/watch?v=BZ8AYs_APlM", viewers: "1.5M", type: 'fun' },
    
    // Другие видео (из старого списка)
    { id: 16, title: "Легендарный момент с командой", url: "https://www.youtube.com/watch?v=PATqEz7YB-4", viewers: "3.8M", type: 'collab', collab: "ХАЗЯЕВА" },
    { id: 17, title: "Эпичный контент от ХАЗЯЕВ", url: "https://www.youtube.com/watch?v=7Jau2CDBxWo", viewers: "3.5M", type: 'collab', collab: "ХАЗЯЕВА" },
    { id: 18, title: "ЭТО КОНЕЦ НАШИХ ОТНОШЕНИЙ?", url: "https://www.youtube.com/watch?v=qm7hgdGxX8o", viewers: "1.7M", type: 'other' },
    { id: 19, title: "НЕМНОГО ВЫПИЛИ и ТУТ ПОНЕСЛОСЬ", url: "https://www.youtube.com/watch?v=R8lbfyHv_h8", viewers: "1.5M", type: 'other' },
  ].map(stream => ({
    ...stream,
    thumbnail: getYoutubeThumbnail(stream.url),
    date: new Date(Date.now() - Math.random() * 3e10).toISOString().split('T')[0], // Random date in last year
    description: stream.title,
    // Ensure likes are initialized to a number, not a string with 'K'
    likes: Math.floor(parseFloat(stream.viewers) * (Math.random() * (30 - 15) + 15)) // Removed 'K' from here as it's a numeric value
  }));
  
  const filters = [
    { id: 'all', label: 'Все видео', icon: Star },
    { id: 'collab', label: 'С ХАЗЯЕВАМИ', icon: Users },
    { id: 'music', label: 'Музыка', icon: Music },
    { id: 'extreme', label: 'Экстрим', icon: Zap },
    { id: 'fun', label: 'Веселье', icon: Smile },
    { id: 'other', label: 'Другое', icon: Star }
  ];

  const filteredStreams = activeFilter === 'all' 
    ? allStreams 
    : allStreams.filter(stream => stream.type === activeFilter);
  
  const getCategoryCount = (type) => {
    return allStreams.filter(s => s.type === type).length;
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Лучшие моменты
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Самые популярные ролики Кореша и ХАЗЯЕВ
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const count = filter.id === 'all' ? allStreams.length : getCategoryCount(filter.id);
            if (count === 0 && filter.id !== 'all') return null; // Only hide if not 'all' and count is zero
            return (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "secondary" : "ghost"}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 group ${
                  activeFilter === filter.id
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                }`}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
                <span className="ml-2 text-sm opacity-70 bg-zinc-700/50 group-hover:bg-zinc-600/50 rounded-full px-2 py-0.5">
                  {count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Streams grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStreams.map((stream) => (
            <Card key={stream.id} className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play button overlay */}
                <a 
                  href={stream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Button size="icon" className="rounded-full bg-white text-black h-14 w-14">
                    <Play className="w-6 h-6 fill-black" />
                  </Button>
                </a>

                {/* Type badge */}
                {stream.collab && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      С {stream.collab}
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white h-12 line-clamp-2">
                  {stream.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-zinc-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    {stream.viewers} просмотров
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(stream.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <a 
                    href={stream.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Смотреть
                    </Button>
                  </a>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(stream.id)}
                    className="text-zinc-400 hover:text-red-500 gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    {likes[stream.id] || 0}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zinc-900/80 via-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-3xl p-8 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-red-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-3 bg-zinc-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-zinc-700/50">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 font-medium text-sm">LIVE контент каждый день</span>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Не пропусти новые видео!
              </h3>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                Подписывайся на каналы и будь в курсе всех эпичных моментов от Кореша и ХАЗЯЕВ
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* YouTube Button */}
                <a 
                  href="https://www.youtube.com/@%D0%9B%D1%91%D1%88%D0%B0%D0%9A%D0%BE%D1%80%D0%B5%D1%88-%D0%BF1%D1%82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <Button className="relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 text-lg font-semibold rounded-2xl border-0 transform group-hover:scale-105 transition-all duration-300 shadow-xl">
                    <Youtube className="w-6 h-6 mr-3" />
                    <div className="flex flex-col items-start">
                      <span>YouTube</span>
                      <span className="text-sm opacity-90">360K+ подписчиков</span>
                    </div>
                  </Button>
                </a>

                {/* Twitch Button */}
                <a 
                  href="https://www.twitch.tv/koreshzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <Button className="relative bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 text-lg font-semibold rounded-2xl border-0 transform group-hover:scale-105 transition-all duration-300 shadow-xl">
                    <Twitch className="w-6 h-6 mr-3" />
                    <div className="flex flex-col items-start">
                      <span>Twitch</span>
                      <span className="text-sm opacity-90">2.2M+ фолловеров</span>
                    </div>
                  </Button>
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-8 mt-8 pt-6 border-t border-zinc-700/50">
              </div>

              {/* Fun message */}
              <div className="mt-6 inline-flex items-center gap-2 bg-zinc-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-700/30">
                <span className="text-2xl">🔥</span>
                <span className="text-zinc-300 text-sm">
                  Самый честный стример СНГ - ладно это тоже пиздеж
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
