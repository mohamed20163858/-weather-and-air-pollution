// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const City = () => {
  const infoState = useSelector((state) => state.savedStoreInfo);
  const site = window.location.href.split('/');
  const country = site[site.length - 2].replaceAll('%20', ' ');
  const city = site[site.length - 1].replaceAll('%20', ' ');
  let data;
  if (infoState[0]) {
    window.localStorage.cityData = JSON.stringify(infoState[0]);
  }
  if (window.localStorage.cityData) {
    const savedData = JSON.parse(window.localStorage.cityData);
    if (savedData.countryName === country && savedData.cityName === city) {
      data = savedData;
    } else {
      data = { ...infoState[0] };
    }
  }
  return (
    <div className="city-info">
      <p>{data ? data.countryName : ''}</p>
      <p>{data ? data.cityName : ''}</p>
      <p>{data ? data.capitalISO2 : ''}</p>
      <p>{data ? data.capitalISO3 : ''}</p>
    </div>
  );
};

export default City;
