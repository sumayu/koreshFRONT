import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { User, MessageSquare, ExternalLink } from "lucide-react";

export default function Developer() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden bg-zinc-800">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c05813c826707f8ff01885/95ef72654_image5.png"
              alt="Аватар"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white">Дмитрий</h1>
          <p className="text-zinc-400">16 лет · люблю аниме, код и стримы — делаю сайт просто потому что делать нехуй.</p>
        </div>

        {/* About card */}
        <Card className="bg-zinc-900/50 border-zinc-800 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-3">
              <User className="w-6 h-6" />
              Немного обо мне
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 leading-relaxed">Просто человек, который любит собирать маленькие личные проекты и делать их приятными для себя и друзей. Не продаю услуги — это фан-сайт, чтобы учиться и делиться интересным.</p>
          </CardContent>
        </Card>

        {/* Contacts */}
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-3">
              <MessageSquare className="w-6 h-6" />
              Контакты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-zinc-400">Пиши в Telegram, если хочешь что-то поменять тут</p>
              <a href="https://t.me/Sumaaar" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 gap-2">
                  <ExternalLink className="w-4 h-4" />
                  @Sumaaar
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-10 text-zinc-400 text-sm">Сайт хуйня :з</div>
      </div>
    </div>
  );
}
