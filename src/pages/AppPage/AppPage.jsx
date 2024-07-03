// AppPage.js

import React, { useState } from 'react';
import CatalunyaMap from './Map/CatalunyaMap';
import useApi from '../../services/useApi'; // Adjust path as per your project structure

const AppPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    setLoading(true);
    try {
      const fetchedData = await useApi(city);
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <section className="map-section">
        <p>Date</p>
        <div className="map">
          <CatalunyaMap onSelectCity={handleCitySelect} />
        </div>
      </section>
      <section className="data-section">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            <h2>Data for {selectedCity}</h2>
            <p>Pollution Index: {data.pollutionIndex}</p>
            <p>PM2.5: {data.pm25Value}</p>
            <p>PM10: {data.pm10Value}</p>
            <p>O3: {data.o3Value}</p>
          </div>
        )}
      </section>
      <section className="desease-section"></section>
    </div>
  );
};

export default AppPage;
