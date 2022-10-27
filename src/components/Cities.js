import { useSelector } from 'react-redux';
import { useState } from 'react';
import CityCard from './cityCard';
import './Cities.css';

const Cities = () => {
  const infoUI = [];
  const infoStore = useSelector((store) => store.citiesInfo);
  const [infoState, setInfoState] = useState([]);
  const [flag, setFlag] = useState(true);
  const limit = 101;
  const writingAction = (e) => {
    let shownData;
    if (e.target.value !== '') {
      shownData = infoStore.filter(
        (element) => element.name.trim().toLowerCase().startsWith(e.target.value.toLowerCase()),
      );
      setFlag(false);
    } else {
      shownData = infoStore;
      setFlag(true);
    }
    setInfoState(shownData);
  };
  if (infoState.length === 0 && flag) {
    infoState.push(...infoStore);
  }
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<CityCard
      countryName={infoState[i].name}
      cityName={infoState[i].capital}
      capitalISO2={infoState[i].iso2}
      capitalISO3={infoState[i].iso3}
      id={i}
      key={`city-${i}`}
    />);
    if (i === limit) {
      break;
    }
  }
  if (infoUI.length === 0) {
    infoUI.push(<p key="unvalid-data">there is no country has this name please enter a valid country name</p>);
  }
  return (
    <div className="cards" data-testid="momo-id">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="search" onKeyUp={writingAction} />
      </div>
      {infoUI}
    </div>
  );
};
export default Cities;
