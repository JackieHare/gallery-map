// src/App.js
import React from 'react';
import './App.css';
import GalleryMap from './components/GalleryMap.jsx';

function App() {
  return (

      <div className="gallery-map">
        <div className="title">
          <h1>Galeria "Malowany Bukszpan"</h1>
          </div>
          <div className="gallery-map-container">           
       <GalleryMap />
       
    </div>
    <div id="info-box" class="info-box hidden"></div>
    </div>
    
  );
}

export default App;