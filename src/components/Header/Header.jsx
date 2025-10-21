import React from 'react';
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
            <li><a href="#home">Home</a></li>
            <li><a href="#catalog">Katalog</a></li>
            <li><a href="#cart">Keranjang</a></li>
            <li><a href="#payment">Pembayaran</a></li>
            <li><a href="#order">Pemesanan</a></li>
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