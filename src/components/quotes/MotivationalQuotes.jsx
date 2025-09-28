import React from 'react';
import { Card, CardContent } from "../ui/card";
import { MapPin, Video, Users, Home } from "lucide-react";

export default function BiographySection() {
  const timeline = [
    {
      period: "Детство",
      location: "Электросталь",
      icon: MapPin,
      description: "Вырос в Электростали, обычный парень с большими мечтами",
      color: "text-blue-400",
      facts: ["Любил видеоигры", "Мечтал о большой жизни", "Не знал, что ждёт впереди"]
    },
    {
      period: "Эра монтажа",
      location: "За компьютером",
      icon: Video,
      description: "Изучал монтаж, создавал первые видео, набирался опыта",
      color: "text-purple-400",
      facts: ["Монтировал ночами", "Изучал все программы", "Первые ютуб-ролики"]
    },
    {
      period: "Тёмные времена",
      location: "Борьба с депрессией",
      icon: Users,
      description: "Панические атаки, депрессия... Но не сдался!",
      color: "text-zinc-400",
      facts: ["Панические атаки", "Сложный период", "Но характер не сломался"]
    },
    {
      period: "Сквады и взлёт",
      location: "13 см → ХАЗЯЕВА",
      icon: Users,
      description: "Нашёл своих людей, создал легендарные сквады",
      color: "text-green-400",
      facts: ["Сквад 13 см", "Затем ХАЗЯЕВА", "Команда мечты"]
    },
    {
      period: "Московская легенда",
      location: "Москва, центр",
      icon: Home,
      description: "Переехал в Москву, квартира в центре, 2+ млн фолловеров",
      color: "text-yellow-400",
      facts: ["Квартира в центре", "2+ млн фолловеров", "Твич-легенда"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          История Кореша
        </h2>
        <p className="text-xl text-center text-zinc-400 mb-16">
          От Электростали до Москвы — путь длиною в жизнь
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-zinc-700 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <Card className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center ${item.color}`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.period}</h3>
                          <p className="text-zinc-400">{item.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-zinc-300 mb-4 text-base">{item.description}</p>
                      
                      <ul className="space-y-2">
                        {item.facts.map((fact, factIndex) => (
                          <li key={factIndex} className="flex items-center gap-2 text-sm text-zinc-400">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block w-4 h-4 bg-white rounded-full border-2 border-zinc-900 z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun fact box */}
        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-4 text-white">
            А знаете ли вы?
          </h3>
          <p className="text-center text-zinc-300 text-lg">
            Кореш прошёл путь от депрессии до 2+ миллионов фолловеров! 
            Теперь живёт в центре Москвы и вдохновляет тысячи людей каждый день 🔥
          </p>
        </div>
      </div>
    </section>
  );
}