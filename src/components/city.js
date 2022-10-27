// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const City = () => {
  const id = +window.location.href.split('/').pop();
  const infoState = useSelector((state) => state.citiesInfo);
  const cityInfo = infoState[id];
  return (
    <div className="city-info">
      <p>{cityInfo ? cityInfo.name : ''}</p>
      <p>{cityInfo ? cityInfo.capital : ''}</p>
      <p>{cityInfo ? cityInfo.iso2 : ''}</p>
      <p>{cityInfo ? cityInfo.iso3 : ''}</p>
    </div>
  );
};
// City.propTypes = {
//   id: PropTypes.number.isRequired,
// };
export default City;
