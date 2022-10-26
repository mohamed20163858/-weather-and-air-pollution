import { useSelector } from 'react-redux';
import RocketCard from './rocketCard';

const Rockets = () => {
  const infoUI = [];
  const infoState = useSelector((state) => state.rocketInfo);
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<RocketCard
      rocketId={infoState[i].id}
      rocketName={infoState[i].rocket_name}
      rocketDescription={infoState[i].description}
      rocketImage={infoState[i].flickr_images[0]}
      reserved={Boolean(infoState[i].reserved)}
      key={`rocket-${infoState[i].id}`}
    />);
  }
  return (
    <div data-testid="momo-id">
      {infoUI}
    </div>
  );
};
export default Rockets;
