import React from "react";

const InfoBox = ({ artworks }) => {
  if (!artworks || artworks.length === 0) {
    return (
      <div className="info-box hidden">
        Brak dzieł sztuki do wyświetlenia
      </div>
    );
  }

  return (
    <div className="info-box visible">
      <h3>Dzieła sztuki w sali:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {artworks.map(({ id, title, description, image_path }) => (
          <li key={id} style={{ marginBottom: '1rem' }}>
           <img 
  src={`http://localhost:3001/uploads/${image_path}`} 
  alt={title} 
  style={{ maxWidth: '150px', display: 'block', marginBottom: '0.5rem' }} 
/>

            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoBox;