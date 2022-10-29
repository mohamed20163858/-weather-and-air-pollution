// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCityGeocoding } from '../redux/cities/cities';
import CityInfo from './cityInfo';
import altImg from './images/not_available.jpg';
import './city.css';

const City = () => {
  const infoState = useSelector((state) => state.savedStoreInfo);
  const dispatch = useDispatch();
  const site = window.location.href.split('/');
  const countryISO2 = site[site.length - 2].replaceAll('%20', ' ');
  const city = site[site.length - 1].replaceAll('%20', ' ');
  useEffect(() => {
    dispatch(fetchCityGeocoding([city.toLowerCase(), countryISO2.toLowerCase()]));
  });
  let data;
  if (infoState[0]) {
    window.localStorage.cityData = JSON.stringify(infoState[0]);
  }
  if (window.localStorage.cityData) {
    const savedData = JSON.parse(window.localStorage.cityData);
    if (savedData.cityISO2 === countryISO2 && savedData.cityName === city) {
      data = savedData;
    } else {
      data = { ...infoState[0] };
    }
  }
  const allFlagsInfo = useSelector((store) => store.allFlagsInfo);
  const flagInfo = allFlagsInfo.filter(
    (element) => element.name.trim().startsWith(data.countryName),
  ).map((element) => element.flag);
  let [imgSrc] = flagInfo;
  if (data !== undefined && data.countryName === 'Afghanistan') {
    imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_Afghanistan_%282004%E2%80%932021%29.svg';
  }
  if (imgSrc === undefined) {
    imgSrc = altImg;
  }
  return (
    <div className="city-info">
      <div className="flag">
        <h1>Country Flag</h1>
        <img src={imgSrc} alt="flag" width="40" />
      </div>
      <CityInfo country={data !== undefined ? data.countryName : ''} city={data !== undefined ? data.cityName : ''} />
    </div>
  );
};

export default City;
