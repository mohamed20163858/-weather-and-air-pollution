import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';

import './rocketCards.css';

const RocketCard = (props) => {
  const {
    rocketId, rocketName, rocketDescription, rocketImage, reserved,
  } = props;
  const dispatch = useDispatch();

  const reserveAction = (e) => {
    const { id } = e.target.parentElement.parentElement;
    const span = e.target.parentElement.querySelector('span');
    if (e.target.classList.contains('unreserved')) {
      e.target.classList.remove('unreserved');
      e.target.classList.add('reserved');
      span.classList.add('badge');
      dispatch(reserveRocket(id));
    } else {
      e.target.classList.remove('reserved');
      e.target.classList.add('unreserved');
      span.classList.remove('badge');
      dispatch(cancelRocket(id));
    }
  };
  return (
    <div className="rocket-card" id={rocketId}>
      <img src={rocketImage} alt="rocket" width="200" />
      <div className="card-info">
        <h2>{rocketName}</h2>
        <p>
          <span data-testid={reserved ? 'rocket-reserved' : ''} className={reserved ? 'badge' : ''}>{reserved ? 'Reserved' : ''}</span>
          {rocketDescription}
        </p>
        <button type="submit" onClick={reserveAction} className={reserved ? 'reserved' : 'unreserved'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocketId: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketCard;
