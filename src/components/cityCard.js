import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './rocketCards.css';

const CityCard = (props) => {
  const {
    id, countryName, captialName, capitalISO2, capitalISO3,
  } = props;
  return (
    <NavLink className="city-card" to={`/${id}`}>
      <div id={id}>
        <p>{countryName}</p>
        <p>{captialName}</p>
        <p>{capitalISO2}</p>
        <p>{capitalISO3}</p>
      </div>
    </NavLink>
  );
};

CityCard.propTypes = {
  id: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
  captialName: PropTypes.string.isRequired,
  capitalISO2: PropTypes.string.isRequired,
  capitalISO3: PropTypes.string.isRequired,
};
export default CityCard;
