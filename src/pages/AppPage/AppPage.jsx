
import { useState } from 'react';
import CatalunyaMap from './Map/CatalunyaMap';
import useApi from '../../services/useApi'; 
import DataComponent from './DataComponent/DataComponent';
import CurrentDate from './CurrentDate/CurrentDate';
import "./appPage.css"

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
      <section>
        <CurrentDate />
        <div className="map">
          <CatalunyaMap onSelectCity={handleCitySelect} />
        </div>
      </section>
      <section className="data-section">
        {loading && <p className='loader'>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div className='data-wrapper'>
            <DataComponent index={data.pollutionIndex} text={selectedCity} className="capital-name"/>
            <DataComponent index={data.pm25Value} text="pm 2.5"/>
            <DataComponent index={data.pm10Value} text="pm 10"/>
            <DataComponent index={data.o3Value} text="o3"/>
          </div>
        )}
      </section>
      <section className="desease-section"></section>
    </div>
  );
};

export default AppPage;
