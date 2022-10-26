import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMissions } from './redux/missions/missions';
import { fetchAllRockets } from './redux/rockets/rockets';
import Navbar from './components/Navbar';
import MyProfile from './components/My profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllMissions());
    dispatch(fetchAllRockets());
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
