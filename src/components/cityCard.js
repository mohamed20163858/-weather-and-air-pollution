import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCaptialCity } from '../redux/cities/cities';

import './rocketCards.css';

const CityCard = (props) => {
  const {
    id, countryName, cityName, cityISO2, cityISO3,
  } = props;
  const allFlagsInfo = useSelector((store) => store.allFlagsInfo);
  const dispatch = useDispatch();
  const cityGeocoding = useSelector((store) => store.cityGeocodingInfo);
  const flagInfo = allFlagsInfo.filter(
    (element) => element.name.trim().startsWith(countryName),
  ).map((element) => element.flag);
  const [imgSrc] = flagInfo;
  const saveCardInfo = () => {
    dispatch(fetchFilteredCaptialCity([props]));
  };

  return (
    <NavLink className="city-card" onClick={saveCardInfo} to={`/${cityISO2}/${cityName}`}>
      <div id={id}>
        <img src={imgSrc} alt="flag" width="40" />
        <p>{countryName}</p>
        <p>{cityName}</p>
        <p>{cityISO2}</p>
        <p>{cityISO3}</p>
        <p>{cityGeocoding.lat}</p>
      </div>
    </NavLink>
  );
};

CityCard.propTypes = {
  id: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  cityISO2: PropTypes.string.isRequired,
  cityISO3: PropTypes.string.isRequired,
};
export default CityCard;
