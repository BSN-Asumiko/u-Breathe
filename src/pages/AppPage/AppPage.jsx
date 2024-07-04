import { useState, useEffect } from "react";
import CatalunyaMap from "../../components/Map/CatalunyaMap";
import useApi from "../../services/useApi";
import DataComponent from "../../components/DataComponent/DataComponent";
import CurrentDate from "../../components/CurrentDate/CurrentDate";
import "./appPage.css";
import DiseasesSection from "../../components/DiseasesSection/DiseasesSection";

const AppPage = () => {
  const [selectedCity, setSelectedCity] = useState("Barcelona");
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

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const fetchedData = await useApi("Barcelona");
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  return (
    <div className="appPage-wrapper">
      <section>
        <CurrentDate />
        <div className="map">
          <CatalunyaMap onSelectCity={handleCitySelect} />
        </div>
      </section>
      <h3 className="data-title">Datos de contaminación:</h3>
      <section className="data-section">
        {loading && <p className="loader">Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div className="data-wrapper">
            <DataComponent
              index={data.pollutionIndex}
              text={selectedCity}
              className="capital-name"
            />
            <DataComponent index={data.pm25Value} text="pm 2.5" />
            <DataComponent index={data.pm10Value} text="pm 10" />
            <DataComponent index={data.o3Value} text="o3" />
          </div>
        )}
      </section>
      <DiseasesSection />
    </div>
  );
};

export default AppPage;
