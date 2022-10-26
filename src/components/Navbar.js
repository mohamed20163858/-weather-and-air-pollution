import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <NavLink to="/" className="logo">
      <i className="fa-solid fa-house-user" />
    </NavLink>
    <p>Weather and Air Pollution</p>
    <div className="left">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);
export default Navbar;
