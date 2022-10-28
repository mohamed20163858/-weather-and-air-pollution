import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCaptialCity } from '../redux/cities/cities';

import './rocketCards.css';

const CityCard = (props) => {
  const {
    id, countryName, cityName, capitalISO2, capitalISO3,
  } = props;
  const allFlagsInfo = useSelector((store) => store.allFlagsInfo);
  const flagInfo = allFlagsInfo.filter(
    (element) => element.name.trim().startsWith(countryName),
  ).map((element) => element.flag);
  const [imgSrc] = flagInfo;
  const dispatch = useDispatch();
  const saveCardInfo = () => {
    dispatch(fetchFilteredCaptialCity([props]));
  };

  return (
    <NavLink className="city-card" onClick={saveCardInfo} to={`/${countryName}/${cityName}`}>
      <div id={id}>
        <img src={imgSrc} alt="flag" width="40" />
        <p>{countryName}</p>
        <p>{cityName}</p>
        <p>{capitalISO2}</p>
        <p>{capitalISO3}</p>
      </div>
    </NavLink>
  );
};

CityCard.propTypes = {
  id: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  capitalISO2: PropTypes.string.isRequired,
  capitalISO3: PropTypes.string.isRequired,
};
export default CityCard;
