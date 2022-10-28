// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCityGeocoding } from '../redux/cities/cities';
import CityInfo from './cityInfo';

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
  const [imgSrc] = flagInfo;
  return (
    <div className="city-info">
      <div className="flag">
        <p>Country Flag</p>
        <img src={imgSrc} alt="flag" width="40" />
      </div>
      <div className="city-postitons-details">
        <p>{data ? data.countryName : ''}</p>
        <p>{data ? data.cityName : ''}</p>
        <p>{data ? data.cityISO2 : ''}</p>
        <p>{data ? data.cityISO3 : ''}</p>
      </div>
      <CityInfo />
    </div>
  );
};

export default City;
