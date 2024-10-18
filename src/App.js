import React from 'react';
import './App.css'; 
import SearchEngine from './SearchEngine'; 

const App = () => {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <footer>
        Open-sourced code by 
        <a href="https://github.com/hyodogabriela/weather-search" target="_blank" rel="noopener noreferrer"> Gabriela Hyodo</a> 
        and hosted on 
        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"> Netlify</a>.
      </footer>
    </div>
  );
};

export default App;