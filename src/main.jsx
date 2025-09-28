import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Импортируем основной компонент вашего приложения
import './index.css';         // Импортируем глобальные стили (включая Tailwind CSS)

// Этот код запускает ваше React-приложение.
// Он ищет элемент с ID 'root' в вашем HTML-файле (обычно index.html)
// и рендерит в него ваш основной компонент <App />.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> помогает выявлять потенциальные проблемы в приложении
  // в режиме разработки, но не влияет на продакшн-сборку.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);