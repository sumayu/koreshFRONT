import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Camera, User, Twitch, Youtube, Instagram, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";

// Utility functions
function createPageUrl(pageName) {
  // Fix: Removed toLowerCase() to match page file names (e.g., /Gallery, not /gallery)
  const formattedName = pageName;
  return `/${formattedName}`;
}

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { title: "Главная", url: createPageUrl("Home"), icon: Home },
    { title: "Галерея", url: createPageUrl("Gallery"), icon: Camera },
  ];

  const socialLinks = [
    { icon: Twitch, url: "https://twitch.tv/koreshzy", color: "text-purple-400", label: "Twitch" },
    { icon: Youtube, url: "https://youtube.com/@koreshzy", color: "text-red-400", label: "YouTube" },
    { icon: Instagram, url: "https://instagram.com/koreshzy", color: "text-pink-400", label: "Instagram" },
    { icon: MessageCircle, url: "https://t.me/koreshzy", color: "text-blue-400", label: "Telegram" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-xl font-bold text-black transform group-hover:scale-105 transition-all duration-200">
                К
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white">Koreshzy</h1>
                <p className="text-sm text-zinc-400">Твич-легенда</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.url 
                      ? 'text-white bg-zinc-800' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="hidden lg:flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all duration-200 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-zinc-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    location.pathname === item.url 
                      ? 'text-white bg-zinc-800' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex space-x-2 px-4 pt-4 border-t border-zinc-800">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-200 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900/50 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg font-bold text-black">
                  К
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Koreshzy</h3>
                  <p className="text-sm text-zinc-400">Твич-легенда</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm">
                Один из самых популярных стримеров СНГ с уникальным чувством юмора и преданной аудиторией.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Навигация</h4>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="block text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Соцсети</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all duration-200"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
            <p>&copy; Koreshzy. Все права женщин защищены</p>
            <Link 
              to={createPageUrl("Developer")} 
              className="mt-2 md:mt-0 text-zinc-500 hover:text-zinc-300 transition-colors duration-200 text-xs"
            >
              О разработчике сайта
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}