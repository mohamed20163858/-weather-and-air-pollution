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
      <p>{description}</p>
      <p>{humidity}</p>
      <p>{temp}</p>
      <p>{feelsLike}</p>
      <p>{cloudness}</p>
      <p>{windSpeed}</p>
      <p>{windDegree}</p>
      <p>{windGustSpeed}</p>

      <p>{pollutionLevel}</p>
      <p>{pollutionIndex}</p>
      <p>{co}</p>
      <p>{no}</p>
      <p>{no2}</p>
      <p>{o3}</p>
      <p>{so2}</p>
      <p>{nh3}</p>
      <p>{pm2half}</p>
      <p>{pm10}</p>
    </>
  );
};
export default WeatherInfo;
