import './Navbar.scss';
import { images } from '../../constants/index';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <img src={images.teliaLogo} alt="logo" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" end className="header__nav--link">
          Home
        </NavLink>
        <NavLink to="/consumers" className="header__nav--link">
          Consumers
        </NavLink>
        <NavLink to="/suppliers" className="header__nav--link">
          Suppliers
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
