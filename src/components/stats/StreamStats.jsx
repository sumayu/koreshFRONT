import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "../ui/card";
import { TrendingUp, Users, Calendar, MapPin, Trophy, Zap } from "lucide-react";

export default function StreamStats() {
  const [animatedStats, setAnimatedStats] = useState({
    twitch: 0,
    youtube: 0,
    years: 0
  });

  useEffect(() => {
    const targets = { twitch: 2200000, youtube: 360000, years: 7 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animate = (key, target) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    };

    setTimeout(() => {
      animate('twitch', targets.twitch);
      animate('youtube', targets.youtube);
      animate('years', targets.years);
    }, 500);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  const stats = [
    {
      icon: Users,
      label: "Twitch фолловеров",
      value: formatNumber(animatedStats.twitch),
      color: "text-purple-400",
      description: "Самая активная аудитория",
      trend: "+12% за месяц"
    },
    {
      icon: TrendingUp,
      label: "YouTube подписчиков", 
      value: formatNumber(animatedStats.youtube),
      color: "text-red-400",
      description: "Растёт каждый день",
      trend: "+8% за месяц"
    },
    {
      icon: Calendar,
      label: "Лет стримит",
      value: `${animatedStats.years}+`,
      color: "text-green-400",
      description: "Опыт не пропьёшь",
      trend: "С 2018 года"
    },
    {
      icon: MapPin,
      label: "Локация",
      value: "Москва",
      color: "text-blue-400",
      description: "Центр столицы",
      trend: "Квартира 2025"
    },
    {
      icon: Trophy,
      label: "Статус",
      value: "Легенда",
      color: "text-yellow-400",
      description: "Твич-партнёр",
      trend: "Заслужил"
    },
    {
      icon: Zap,
      label: "Энергия",
      value: "∞",
      color: "text-pink-400", 
      description: "Безграничная",
      trend: "Всегда на максимум"
    }
  ];

  const achievements = [
    { title: "Первый миллион", date: "2022", emoji: "🥇" },
    { title: "Переезд в Москву", date: "2023", emoji: "🏙️" },
    { title: "Квартира в центре", date: "2024", emoji: "🏠" },
    { title: "2+ млн фолловеров", date: "2025", emoji: "🚀" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Стрим-факты
          </h2>
          <p className="text-xl text-zinc-400">
            Цифры, которые говорят сами за себя
          </p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-zinc-800 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {stat.trend}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className={`text-3xl font-bold text-white`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold">{stat.label}</div>
                  <div className="text-zinc-400 text-sm">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements timeline */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Ключевые достижения
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-105 transition-transform duration-300">
                  {achievement.emoji}
                </div>
                <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-zinc-400 text-sm">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun fact */}
        <div className="text-center mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <p className="text-lg text-zinc-300">
            <span className="text-green-400 font-bold">Факт:</span> Кореш читает ВСЕ донаты! 
            Даже самые маленькие ценит как большие ❤️
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            Вот такой он человечный наш стример 🔥
          </p>
        </div>
      </div>
    </section>
  );
}