import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Mayuna by Irmayunia" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Katalog</Link></li>
            <li><Link to="/cart">Keranjang</Link></li>
            <li><Link to="/payment">Pembayaran</Link></li>
            <li><Link to="/order">Pemesanan</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-outline">Daftar</button>
          <button className="btn btn-primary">Masuk</button>
        </div>
      </div>
    </header>
  );
};

export default Header;