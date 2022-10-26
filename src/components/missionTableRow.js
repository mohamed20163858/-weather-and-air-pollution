import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const TableRow = (props) => {
  const {
    missionId, missionName, description, reserved, elementIndex,
  } = props;
  const dispatch = useDispatch();

  const joinAction = (e) => {
    const status = e.target.parentElement.parentElement.querySelector('td:nth-of-type(3) p');
    if (e.target.classList.contains('unreserved')) {
      e.target.classList.remove('unreserved');
      e.target.classList.add('reserved');
      status.classList.remove('badge-1');
      status.classList.add('badge-2');
      dispatch(joinMission(elementIndex));
    } else {
      e.target.classList.remove('reserved');
      e.target.classList.add('unreserved');
      status.classList.remove('badge-2');
      status.classList.add('badge-1');
      dispatch(leaveMission(elementIndex));
    }
  };
  return (
    <tr id={missionId}>
      <td>{missionName}</td>
      <td><p>{description}</p></td>
      <td><p className={reserved ? 'badge-2' : 'badge-1'}>{reserved ? 'Active Member' : 'Not A Member'}</p></td>
      <td><button type="submit" className={reserved ? 'reserved' : 'unreserved'} onClick={joinAction}>{reserved ? 'Leave Mission' : 'Join Mission'}</button></td>
    </tr>
  );
};
TableRow.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  elementIndex: PropTypes.number.isRequired,
};
export default TableRow;
