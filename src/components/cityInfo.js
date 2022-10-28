import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCityWeather, fetchCityAirPollution } from '../redux/cities/cities';
import WeatherInfo from './weatherInfo';

const CityInfo = () => {
  const cityGeocoding = useSelector((state) => state.cityGeocodingInfo);
  const lat = cityGeocoding[0] ? cityGeocoding[0].lat : '';
  const lon = cityGeocoding[0] ? cityGeocoding[0].lon : '';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCityWeather([lat, lon]));
    dispatch(fetchCityAirPollution([lat, lon]));
  });

  return (
    <>
      <p>{lat}</p>
      <p>{lon}</p>
      <WeatherInfo />
    </>
  );
};

export default CityInfo;
