import React, { useState } from 'react';
import './CatalunyaMap.css';
import useApi from '../../services/useApi';
import { cities } from '../../utils/cities';

const CatalunyaMap = ({ onSelectCity }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    onSelectCity(city); // Pass selected city to parent component
  };

  return (
    <div className="map-container">
      <img src="/assets/images/map-catalunya.svg" alt="Catalunya Map" className="map-image" />
      {Object.keys(cities).map((city) => (
        <div
          key={city}
          className={`city-point ${selectedCity === city ? 'selected' : ''}`}
          style={{ left: cities[city].x, top: cities[city].y }}
          onClick={() => handleCityClick(city)}
        >
          <p className='idCity'>{city}</p>
        </div>
      ))}
    </div>
  );
};

export default CatalunyaMap;