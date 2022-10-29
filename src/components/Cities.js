import { useSelector } from 'react-redux';
import { useState } from 'react';
import CityCard from './cityCard';
import './Cities.css';

const Cities = () => {
  const infoUI = [];
  const infoStore = useSelector((store) => store.citiesInfo);
  const allCitiesStore = useSelector((store) => store.allCitiesInfo);
  const [infoState, setInfoState] = useState([]);
  const [flag, setFlag] = useState(true);
  const limit = 101;
  const writingAction = (e) => {
    let shownData;
    if (e.target.value !== '') {
      const arr = e.target.value.toLowerCase();
      const country = arr.split(',')[0];
      const city = arr.split(',')[1];
      shownData = infoStore.filter(
        (element) => element.country.trim().toLowerCase().startsWith(country),
      );
      setFlag(false);
      if (e.keyCode === 13) {
        const savedData = allCitiesStore.filter(
          (element) => element.country.trim().toLowerCase().startsWith(country),
        );
        if (city !== undefined && city !== '') {
          shownData = savedData.map((element) => (
            {
              country: element.country,
              cities: element.cities.filter(
                (element) => element.trim().toLowerCase().startsWith(city.trim()),
              ),
            }
          ));
        } else {
          shownData = savedData;
        }
      }
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
    for (let j = 0; j < infoState[i].cities.length; j += 1) {
      infoUI.push(<CityCard
        countryName={infoState[i].country}
        cityName={infoState[i].cities[j]}
        cityISO2={infoState[i].iso2}
        cityISO3={infoState[i].iso3}
        id={i}
        key={`${infoState[i].country}-${infoState[i].cities[j]}`}
      />);
      if (j === limit) {
        break;
      }
    }
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
        <input type="text" placeholder="search using country, city" onKeyUp={writingAction} />
      </div>
      {infoUI}
    </div>
  );
};
export default Cities;
