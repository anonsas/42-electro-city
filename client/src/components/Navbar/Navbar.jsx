import './Navbar.scss';
import { images } from '../../constants/index';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <h3>sildymo-medziokle.lt</h3>
      <nav className="header__nav">
        <NavLink to="/" end className="header__nav--link">
          Home
        </NavLink>
        <NavLink to="/suppliers" className="header__nav--link">
          Suppliers
        </NavLink>
        <NavLink to="/consumers" className="header__nav--link">
          Consumers
        </NavLink>
        <NavLink to="/invoices" className="header__nav--link">
          Invoices
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
