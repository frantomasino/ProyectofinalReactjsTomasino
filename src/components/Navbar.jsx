import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-title">
        <Link to="/">A Todo Palo</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/palos">Palos</Link></li>
        <li><Link to="/category/fundas">Fundas</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
