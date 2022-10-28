import { useSelector } from 'react-redux';

const WeatherInfo = () => {
  const cityWeatherInfo = useSelector((state) => state.cityWeatherInfo);
  const cityAirPollutionInfo = useSelector((state) => state.cityAirPollutionInfo);
  let description;
  let humidity;
  let temp;
  let feelsLike;
  let cloudness;
  let windSpeed;
  let windDegree;
  let windGustSpeed;
  let pollutionLevel;
  let pollutionIndex;
  let co;
  let no;
  let no2;
  let o3;
  let so2;
  let pm2half;
  let pm10;
  let nh3;
  const calculateLevel = (index) => {
    let result;
    if (index === 1) {
      result = 'Very Low';
    } else if (index === 2) {
      result = 'Low';
    } else if (index === 3) {
      result = 'Moderate';
    } else if (index === 4) {
      result = 'High';
    } else if (index === 5) {
      result = 'Very High';
    } else {
      result = 'Undefined';
    }
    return result;
  };
  if (cityWeatherInfo.length !== 0 && +cityWeatherInfo.cod === 200) {
    description = cityWeatherInfo.weather[0].description;
    humidity = cityWeatherInfo.main.humidity;
    temp = cityWeatherInfo.main.temp;
    feelsLike = cityWeatherInfo.main.feels_like;
    cloudness = cityWeatherInfo.clouds.all;
    windSpeed = cityWeatherInfo.wind.speed;
    windDegree = cityWeatherInfo.wind.deg;
    windGustSpeed = cityWeatherInfo.wind.gust;
  }
  if (cityAirPollutionInfo.length !== 0 && +cityAirPollutionInfo.cod !== 400) {
    pollutionIndex = cityAirPollutionInfo.list[0].main.aqi;
    pollutionLevel = calculateLevel(pollutionIndex);
    co = cityAirPollutionInfo.list[0].components.co;
    no = cityAirPollutionInfo.list[0].components.no;
    no2 = cityAirPollutionInfo.list[0].components.no2;
    o3 = cityAirPollutionInfo.list[0].components.o3;
    so2 = cityAirPollutionInfo.list[0].components.so2;
    nh3 = cityAirPollutionInfo.list[0].components.nh3;
    pm2half = cityAirPollutionInfo.list[0].components.pm2_5;
    pm10 = cityAirPollutionInfo.list[0].components.pm10;
  }
  return (
    <>
      <div className="weather-analytics">
        <h2>Current Weather Analytics</h2>
        <p>{`Domaint weather condition: ${description}`}</p>
        <p>{`Humidity: ${humidity} %`}</p>
        <p>
          {`Temperature: ${temp}`}
          <sup>o</sup>
          C
        </p>
        <p>
          {`Feels like: ${feelsLike}`}
          <sup>o</sup>
          C
        </p>
        <p>{`Cloudness: ${cloudness} %`}</p>
        <p>{`Wind speed: ${windSpeed} m/s`}</p>
        <p>
          {`Wind degree: ${windDegree}`}
          <sup>o</sup>
        </p>
        <p>{`Wind gust speed: ${windGustSpeed} m/s`}</p>
      </div>
      <div className="air-pollution-analytics">
        <h2>Current Air Pollution Analytics</h2>
        <p>{`Pollution level: ${pollutionLevel}`}</p>
        <p>{`Pollution index: ${pollutionIndex}`}</p>
        <h3>Concentartions</h3>
        <p>{`Carbon monoxide (CO): ${co} ug/m3`}</p>
        <p>{`Nitrogen monoxide (NO): ${no} ug/m3`}</p>
        <p>{`Nitrogen dioxide (NO2): ${no2} ug/m3`}</p>
        <p>{`Ozone (O3): ${o3} ug/m3`}</p>
        <p>{`Sulphur dioxide (SO2): ${so2} ug/m3`}</p>
        <p>{`Ammonia (NH3): ${nh3} ug/m3`}</p>
        <p>{`Airbrone particles (PM2.5): ${pm2half} ug/m3`}</p>
        <p>{`Airbrone particles (PM10): ${pm10} ug/m3`}</p>
      </div>
    </>
  );
};
export default WeatherInfo;
