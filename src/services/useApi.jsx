
import { token, BASE_URL } from "../utils/urls";

const useApi = async (city) => {
  const url = `${BASE_URL}/feed/${city}/?token=${token}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();

    const pollutionIndex = result.data.aqi;
    const iaqi = result.data.iaqi;
    const pm25Value = iaqi.pm25 ? iaqi.pm25.v : 'N/A';
    const pm10Value = iaqi.pm10 ? iaqi.pm10.v : 'N/A';
    const o3Value = iaqi.o3 ? iaqi.o3.v : 'N/A';

    const data = { pollutionIndex, pm25Value, pm10Value, o3Value };
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default useApi;
