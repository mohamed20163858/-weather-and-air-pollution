import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCaptialCities, fetchAllCountryCities, fetchAllCountriesFlags } from './redux/cities/cities';
import Navbar from './components/Navbar';
import Cities from './components/Cities';
import City from './components/city';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCaptialCities());
    dispatch(fetchAllCountryCities());
    dispatch(fetchAllCountriesFlags());
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cities />} />
        <Route path="/:country/:city" element={<City />} />
      </Routes>
    </Router>
  );
};

export default App;
