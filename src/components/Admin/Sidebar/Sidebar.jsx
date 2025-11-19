import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../../assets/Logo.png'; // Path relatif dari Sidebar.jsx ke assets

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    produk: false,
    data: false,
    transaksi: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <aside className="sidebar">
      {/* Logo Gambar */}
      <div className="logo">
        <img src={logo} alt="Mayuna by Irmayunia" className="logo-image" />
      </div>

      {/* Menu */}
      <nav className="menu">
        <ul>
          {/* Dashboard */}
          <li className="menu-item active">
            <span className="icon">🏠</span>
            <span>Dashboard</span>
          </li>

          {/* Produk */}
          <li className="menu-item" onClick={() => toggleMenu('produk')}>
            <span className="menu-title">Produk</span>
            <span className={`arrow ${openMenus.produk ? 'open' : ''}`}>▼</span>
          </li>
          {openMenus.produk && (
            <ul className="submenu">
              <li><span className="icon">📦</span>Produk Mitra</li>
              <li><span className="icon">📦</span>Produk User</li>
            </ul>
          )}

          {/* Data */}
          <li className="menu-item" onClick={() => toggleMenu('data')}>
            <span className="menu-title">Data</span>
            <span className={`arrow ${openMenus.data ? 'open' : ''}`}>▼</span>
          </li>
          {openMenus.data && (
            <ul className="submenu">
              <li><span className="icon">👤</span>Data Mitra</li>
              <li><span className="icon">👤</span>Data User</li>
              <li><span className="icon">📊</span>Data Kategori</li>
            </ul>
          )}

          {/* Transaksi */}
          <li className="menu-item" onClick={() => toggleMenu('transaksi')}>
            <span className="menu-title">Transaksi</span>
            <span className={`arrow ${openMenus.transaksi ? 'open' : ''}`}>▼</span>
          </li>
          {openMenus.transaksi && (
            <ul className="submenu">
              <li><span className="icon">💳</span>Pembayaran</li>
              <li><span className="icon">📋</span>Status Order</li>
            </ul>
          )}

          {/* Upload Artikel & Saran */}
          <li className="menu-item">
            <span>Upload Artikel</span>
          </li>
          <li className="menu-item">
            <span>Saran</span>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="logout-section">
        <span>Logout</span>
        <span className="logout-icon">→</span>
      </div>
    </aside>
  );
};

export default Sidebar;