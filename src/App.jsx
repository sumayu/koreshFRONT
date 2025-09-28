import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импорт вашего основного компонента Layout
import Layout from './Layout';

// Импорт всех ваших страниц
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Developer from './pages/Developer';

function App() {
  return (
    // BrowserRouter - необходим для маршрутизации в React
    <Router>
      {/* Layout оборачивает все страницы, чтобы применять общий дизайн (хедер, футер и т.д.) */}
      <Layout>
        {/* Routes определяет маршруты (URL-адреса) и компоненты, которые должны отображаться */}
        <Routes>
          {/* Путь "/" ведет на домашнюю страницу (Home) */}
          <Route path="/" element={<Home />} />
          {/* Также обрабатываем "/Home" на случай, если кто-то наберет его напрямую */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Developer" element={<Developer />} />
          {/* Здесь можно добавить другие маршруты по мере создания новых страниц */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;