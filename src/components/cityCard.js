import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCaptialCity } from '../redux/cities/cities';
import altImg from './images/not_available.jpg';

const CityCard = (props) => {
  const {
    id, countryName, cityName, cityISO2,
  } = props;
  const allFlagsInfo = useSelector((store) => store.allFlagsInfo);
  const dispatch = useDispatch();
  const color = (id % 4 === 0 || id % 4 === 3) ? 'bright' : 'dark';
  const flagInfo = allFlagsInfo.filter(
    (element) => element.name.trim().startsWith(countryName),
  ).map((element) => element.flag);
  let [imgSrc] = flagInfo;
  if (countryName === 'Afghanistan') {
    imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_Afghanistan_%282004%E2%80%932021%29.svg';
  }
  if (imgSrc === undefined) {
    imgSrc = altImg;
  }
  const saveCardInfo = () => {
    dispatch(fetchFilteredCaptialCity([props]));
  };

  return (
    <NavLink className={`city-card ${color}`} data-testid="check-id" onClick={saveCardInfo} to={`/${cityISO2}/${cityName}`}>
      <div id={id}>
        <img src={imgSrc} alt={`${countryName} flag`} />
        <p>{`Country: ${countryName}`}</p>
        <p>{`City: ${cityName}`}</p>
      </div>
    </NavLink>
  );
};

CityCard.propTypes = {
  id: PropTypes.number.isRequired,
  countryName: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  cityISO2: PropTypes.string.isRequired,
};
export default CityCard;
