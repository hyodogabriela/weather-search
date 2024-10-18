import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Importando o App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Renderizando o componente principal App */}
  </React.StrictMode>
);

reportWebVitals();
