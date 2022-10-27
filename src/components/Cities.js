import { useSelector } from 'react-redux';
import CityCard from './cityCard';
import './Cities.css';

const Cities = () => {
  const infoUI = [];
  const infoState = useSelector((state) => state.citiesInfo);
  const limit = 100;
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<CityCard
      countryName={infoState[i].name}
      captialName={infoState[i].capital}
      capitalISO2={infoState[i].iso2}
      capitalISO3={infoState[i].iso3}
      id={i}
      key={`city-${i}`}
    />);
    if (i === limit) {
      break;
    }
  }
  return (
    <div className="cards" data-testid="momo-id">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="search" />
      </div>
      {infoUI}
    </div>
  );
};
export default Cities;
