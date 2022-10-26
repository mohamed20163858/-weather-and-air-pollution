import { useSelector } from 'react-redux';
import './My profile.css';

const MyProfile = () => {
  const missionsInfo = useSelector((state) => state.missionInfo);
  const rocketsInfo = useSelector((state) => state.rocketInfo);
  const missionsReserved = missionsInfo.filter((mission) => mission.reserved).map(
    (mission) => mission.mission_name,
  );
  const rocketsReserved = rocketsInfo.filter((rocket) => rocket.reserved).map(
    (rocket) => rocket.rocket_name,
  );
  const missionsTable = [];
  const rocketsTable = [];
  for (let i = 0; i < missionsReserved.length; i += 1) {
    missionsTable.push(<tr key={`mission-${i}`}><td>{missionsReserved[i]}</td></tr>);
  }

  for (let i = 0; i < rocketsReserved.length; i += 1) {
    rocketsTable.push(<tr key={`rocket-${i}`}><td>{rocketsReserved[i]}</td></tr>);
  }

  return (
    <div className="profile-body" data-testid="momo-id">
      <div className="my-missions">
        <h2>My Missions</h2>
        <table className="profile-table">
          <thead />
          <tbody>{missionsTable}</tbody>
          <tfoot>{}</tfoot>
        </table>
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        <table className="profile-table">
          <thead />
          <tbody>{rocketsTable}</tbody>
          <tfoot>{}</tfoot>
        </table>
      </div>
    </div>
  );
};
export default MyProfile;
