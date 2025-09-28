import React, { useState, useEffect } from 'react';
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

export default function HeroSection() {
  const [koreshLikes, setKoreshLikes] = useState(2187);
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiPosition, setEmojiPosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const koreshImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c05813c826707f8ff01885/c9e45f62c_k1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c05813c826707f8ff01885/7cd7cffa9_k2.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c05813c826707f8ff01885/1d5c0008d_k3.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c05813c826707f8ff01885/336efbbaa_k4.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c05813c826707f8ff01885/ace443af0_k5.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c05813c826707f8ff01885/6bf345936_k6.jpg"
  ];

  const emojis = ['😂', '🔥', '💚', '⚡', '🎯', '✨', '🚀', '💯'];
  const [currentEmoji, setCurrentEmoji] = useState('💚');

  const handleKoreshLike = (e) => {
    setKoreshLikes(prev => prev + 1);
    setEmojiPosition({ x: e.clientX, y: e.clientY });
    setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    setShowEmoji(true);
    
    setTimeout(() => setShowEmoji(false), 1000);
  };

  const quotes = [
    "От Электростали до твич-легенды",
    "2+ миллиона фолловеров не врут а нагло пиздят",
    "Панические атаки? Поборол",
    "Москва, центр, квартира - заслужил (нихуя себе, поздравляю)",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  // Cycle through Koresh images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % koreshImages.length);
    }, 4000);
    return () => clearInterval(imageInterval);
  }, [koreshImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Photo with elegant transition */}
        <div className="relative mb-12">
          <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl">
            <img 
              key={currentImageIndex}
              src={koreshImages[currentImageIndex]}
              alt="Кореш стримит" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out transform"
            />
            {/* Elegant overlay for smooth transitions */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
          
          {/* Image indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {koreshImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-8' 
                    : 'bg-zinc-600 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
          KORESHZY
        </h1>
        
        <div className="text-xl md:text-2xl text-zinc-300 mb-8">
          <span className="text-white font-semibold">Алексей Деревяшкин</span> • Стример & Ютубер
        </div>

        {/* Animated quote */}
        <div className="h-16 mb-12 flex items-center justify-center">
          <p className="text-lg md:text-xl text-zinc-400 font-medium transition-all duration-500 max-w-2xl">
            {quotes[currentQuote]}
          </p>
        </div>

        {/* Clean Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { label: "Twitch", value: "2.2M", color: "text-purple-400" },
            { label: "YouTube", value: "360K", color: "text-red-400" },
            { label: "Лет стримит", value: "7+", color: "text-green-400" },
            { label: "Кореш-лайков", value: koreshLikes, color: "text-pink-400" }
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/50 transition-all duration-300">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-zinc-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Clean action button */}
        <div className="flex justify-center items-center mb-8">
          <Button
            onClick={handleKoreshLike}
            className="bg-white text-black hover:bg-zinc-200 px-8 py-3 text-lg rounded-xl font-medium transition-all duration-200 transform hover:scale-105 border-0"
          >
            <Heart className="w-5 h-5 mr-2" />
            Кореш-лайк
          </Button>
        </div>

        {/* Subtle footer */}
        <div className="text-zinc-500 text-sm">
          кореш лайк не сохраняется(я не хочу ради этой хуйни сервер арендовывать )
        </div>

        {/* Floating emoji */}
        {showEmoji && (
          <div
            className="fixed pointer-events-none z-50 text-4xl animate-ping"
            style={{
              left: emojiPosition.x,
              top: emojiPosition.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {currentEmoji}
          </div>
        )}
      </div>
    </section>
  );
}