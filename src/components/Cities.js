import { useSelector } from 'react-redux';
import RocketCard from './rocketCard';
import './Cities.css';

const Cities = () => {
  const infoUI = [];
  const infoState = useSelector((state) => state.rocketInfo);
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<RocketCard
      rocketId={infoState[i].id}
      rocketName={infoState[i].rocket_name}
      rocketDescription={infoState[i].description}
      rocketImage={infoState[i].flickr_images[0]}
      reserved={Boolean(infoState[i].reserved)}
      key={`city-${infoState[i].id}`}
    />);
  }
  return (
    <div data-testid="momo-id">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="search" />
      </div>
      {infoUI}
    </div>
  );
};
export default Cities;
