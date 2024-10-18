import React from 'react';
import './App.css'; // Importando o CSS
import SearchEngine from './SearchEngine'; // Importando seu componente

const App = () => {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine /> {/* Renderizando o componente SearchEngine */}
    </div>
  );
};

export default App;