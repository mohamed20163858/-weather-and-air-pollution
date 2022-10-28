import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchCityWeather, fetchCityAirPollution } from '../redux/cities/cities';
import WeatherInfo from './weatherInfo';

const CityInfo = (props) => {
  const { country, city } = props;
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
      <div className="city-postitons-details">
        <p>{`Country: ${country}`}</p>
        <p>{`City: ${city}`}</p>
        <p>
          {`Latitude: ${lat}`}
          <sup>o</sup>
        </p>
        <p>
          {`Longitude: ${lon}`}
          <sup>o</sup>
        </p>
      </div>
      <WeatherInfo />
    </>
  );
};
CityInfo.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
export default CityInfo;
