import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../../assets/Logo.png';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
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

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
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
          <li 
            className={`menu-item ${activeMenu === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Dashboard')}
          >
            <span className="icon">📊</span>
            <span>Dashboard</span>
          </li>

          {/* Produk */}
          <li className="menu-item" onClick={() => toggleMenu('produk')}>
            <span className="menu-title">Produk</span>
            <span className={`arrow ${openMenus.produk ? 'open' : ''}`}>▼</span>
          </li>
          {openMenus.produk && (
            <ul className="submenu">
              <li 
                className={activeMenu === 'Produk Mitra' ? 'active' : ''}
                onClick={() => handleMenuClick('Produk Mitra')}
              >
                <span className="icon">📦</span>Produk Mitra
              </li>
              <li 
                className={activeMenu === 'Produk User' ? 'active' : ''}
                onClick={() => handleMenuClick('Produk User')}
              >
                <span className="icon">📦</span>Produk User
              </li>
            </ul>
          )}

          {/* Data */}
          <li className="menu-item" onClick={() => toggleMenu('data')}>
            <span className="menu-title">Data</span>
            <span className={`arrow ${openMenus.data ? 'open' : ''}`}>▼</span>
          </li>
          {openMenus.data && (
            <ul className="submenu">
              <li 
                className={activeMenu === 'Data Mitra' ? 'active' : ''}
                onClick={() => handleMenuClick('Data Mitra')}
              >
                <span className="icon">👤</span>Data Mitra
              </li>
              <li 
                className={activeMenu === 'Data User' ? 'active' : ''}
                onClick={() => handleMenuClick('Data User')}
              >
                <span className="icon">👤</span>Data User
              </li>
              <li 
                className={activeMenu === 'Data Kategori' ? 'active' : ''}
                onClick={() => handleMenuClick('Data Kategori')}
              >
                <span className="icon">📊</span>Data Kategori
              </li>
            </ul>
          )}

          {/* Transaksi */}
          <li className="menu-item" onClick={() => toggleMenu('transaksi')}>
            <span className="menu-title">Transaksi</span>
            <span className={`arrow ${openMenus.transaksi ? 'open' : ''}`}>▼</span>
          </li>
          {openMenus.transaksi && (
            <ul className="submenu">
              <li 
                className={activeMenu === 'Pembayaran' ? 'active' : ''}
                onClick={() => handleMenuClick('Pembayaran')}
              >
                <span className="icon">💳</span>Pembayaran
              </li>
              <li 
                className={activeMenu === 'Status Order' ? 'active' : ''}
                onClick={() => handleMenuClick('Status Order')}
              >
                <span className="icon">📋</span>Status Order
              </li>
            </ul>
          )}

          {/* Upload Artikel & Saran */}
          <li 
            className={`menu-item ${activeMenu === 'Upload Artikel' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Upload Artikel')}
          >
            <span className="icon">📝</span>
            <span>Upload Artikel</span>
          </li>
          <li 
            className={`menu-item ${activeMenu === 'Saran' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Saran')}
          >
            <span className="icon">💬</span>
            <span>Saran</span>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div 
        className="logout-section"
        onClick={() => handleMenuClick('Logout')}
      >
        <span>Logout</span>
        <span className="logout-icon">→</span>
      </div>
    </aside>
  );
};

export default Sidebar;