import React from 'react';
import Logo from '../../assets/Logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="logo">
            <img src={Logo} alt="Mayuna by Irmayunia" />
          </div>
          <p className="description">
            Mayuna by irmayunia adalah ecommerce yang menjual beragam jenis pakaian dewasa dan anak anak bertema muslimah
          </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Services</h3>
          <ul>
            <li><a href="#account">Akunku</a></li>
            <li><a href="#orders">Pantau Pesananmu</a></li>
            <li><a href="#returns">Pengembalian</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Information</h3>
          <ul>
            <li><a href="#privacy">Privasi</a></li>
            <li><a href="#terms">Ketentuan</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>08123567890</li>
            <li>mayuna@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Mayuna by Irmayunia</p>
      </div>
    </footer>
  );
};

export default Footer;