import React, { useState, useEffect } from 'react';
import InfoBox from "./InfoBox";
import MapSVG from "./MapSVG";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const infoTextMap = {
  room1: "To jest sala nr 1",
  room2: "Tu znajdziesz wystawę malarstwa.",
  room3: "Pokój z instalacjami multimedialnymi.",
  hall1: "Główne wejście do galerii.",
  elevator: "Winda na piętro."
};

const GalleryMap = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [selectedRoomArtworks, setSelectedRoomArtworks] = useState([]);

  const handleRoomClick = async (roomId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/artworks/${roomId}`);
      const artworks = await response.json();
      setSelectedRoomArtworks(artworks);
    } catch (error) {
      console.error('Błąd podczas pobierania obrazów:', error);
    }
  };

useEffect(() => {
  const handleClick = (e) => {
    const id = e.target.id;
    if (infoTextMap[id]) {
      setHoveredLabel(infoTextMap[id]);
      setTimeout(() => {
        setHoveredLabel(null);
      }, 3000);
    }
  };

  const svg = document.getElementById("gallery-svg");
  if (svg) {
    svg.addEventListener("click", handleClick);
  }

  return () => {
    if (svg) {
      svg.removeEventListener("click", handleClick);
    }
  };
}, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={`animated-element ${hoveredLabel ? 'visible' : 'hidden'}`}>
        {hoveredLabel}
      </div>

      <TransformWrapper initialScale={1} minScale={1} maxScale={2} wheel={{ step: 0.5 }}>
        <TransformComponent>
          <MapSVG
            handleRoomClick={handleRoomClick}
            setHoveredLabel={setHoveredLabel}
            setInfoText={setInfoText}
            setInfoVisible={setInfoVisible}
          />
        </TransformComponent>
      </TransformWrapper>

      <InfoBox artworks={selectedRoomArtworks} />
    </div>
  );
};

export default GalleryMap;