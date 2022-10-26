import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from './images/logo.png';

const visitPageAction = (e) => {
  const links = document.querySelectorAll('.outer .inner-2 ul li a');
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] === e.target) {
      e.target.classList.add('active');
    } else {
      links[i].classList.remove('active');
    }
  }
};

const Navbar = () => (
  <div className="outer">
    <div className="inner-1">
      <NavLink to="/" className="logo">
        <img src={Logo} alt="logo" width="40" height="40" />
        <p>Space Travelers&apos;Hub</p>
      </NavLink>
    </div>
    <div className="inner-2">
      <ul>
        <li><NavLink to="/" onClick={visitPageAction}>Rockets</NavLink></li>
        <li><NavLink to="/missions" onClick={visitPageAction}>Missions</NavLink></li>
        <li className="vertical-line" />
        <li><NavLink to="/my-profile" onClick={visitPageAction}>My Profile</NavLink></li>
      </ul>
    </div>
  </div>
);
export default Navbar;
