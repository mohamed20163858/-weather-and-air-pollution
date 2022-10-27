import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFilteredCaptialCity } from '../redux/cities/cities';

import './rocketCards.css';

const CityCard = (props) => {
  const {
    id, countryName, cityName, capitalISO2, capitalISO3,
  } = props;
  const dispatch = useDispatch();
  const saveCardInfo = () => {
    dispatch(fetchFilteredCaptialCity([props]));
  };

  return (
    <NavLink className="city-card" onClick={saveCardInfo} to={`/${countryName}/${cityName}`}>
      <div id={id}>
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
