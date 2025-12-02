import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../../assets/Logo.png';
import dashboardIcon from '../../../assets/Dashboard.png';
import expandIcon from '../../../assets/out_expand.png';
import dataIcon from '../../../assets/Data.png';
import categori from '../../../assets/Kategori.png';
import user from '../../../assets/Produk User.png';
import mitra from '../../../assets/Produk Mitra.png';
import payment from '../../../assets/money.png';
import order from '../../../assets/transaction-order.png';
import logoutIcon from '../../../assets/logout.png';

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

      {/* Container untuk menu yang bisa di-scroll */}
      <div className="menu-container">
        {/* Menu */}
        <nav className="menu">
          <ul>
            {/* Dashboard - Diubah strukturnya agar sejajar */}
            <li 
              className={`menu-item ${activeMenu === 'Dashboard' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Dashboard')}
            >
              <img 
                src={dashboardIcon} 
                alt="Dashboard" 
                className="icon-image"
              />
              <span className="menu-title">Dashboard</span>
            </li>

            {/* Produk */}
            <li className="menu-item" onClick={() => toggleMenu('produk')}>
              <img 
                src={dashboardIcon} 
                alt="Produk" 
                className="icon-image"
                style={{ opacity: 0 }} /* Icon transparan untuk alignment */
              />
              <span className="menu-title">Produk</span>
              <span className={`arrow ${openMenus.produk ? 'open' : ''}`}>
                <img 
                  src={expandIcon} 
                  alt="Expand" 
                  className={`arrow-image ${openMenus.produk ? 'open' : ''}`}
                />
              </span>
            </li>
            {openMenus.produk && (
              <ul className="submenu">
                <li 
                  className={activeMenu === 'Produk Mitra' ? 'active' : ''}
                  onClick={() => handleMenuClick('Produk Mitra')}
                >
                  <img 
                    src={mitra} 
                    alt="Produk Mitra" 
                    className="submenu-icon"
                  />
                  Produk Mitra
                </li>
                <li 
                  className={activeMenu === 'Produk User' ? 'active' : ''}
                  onClick={() => handleMenuClick('Produk User')}
                >
                  <img 
                    src={user} 
                    alt="Produk User" 
                    className="submenu-icon"
                  />
                  Produk User
                </li>
              </ul>
            )}

            {/* Data */}
            <li className="menu-item" onClick={() => toggleMenu('data')}>
              <img 
                src={dashboardIcon} 
                alt="Data" 
                className="icon-image"
                style={{ opacity: 0 }} /* Icon transparan untuk alignment */
              />
              <span className="menu-title">Data</span>
              <span className={`arrow ${openMenus.data ? 'open' : ''}`}>
                <img 
                  src={expandIcon} 
                  alt="Expand" 
                  className={`arrow-image ${openMenus.data ? 'open' : ''}`}
                />
              </span>
            </li>
            {openMenus.data && (
              <ul className="submenu">
                <li 
                  className={activeMenu === 'Data Mitra' ? 'active' : ''}
                  onClick={() => handleMenuClick('Data Mitra')}
                >
                  <img 
                    src={dataIcon} 
                    alt="Data Mitra" 
                    className="submenu-icon"
                  />
                  Data Mitra
                </li>
                <li 
                  className={activeMenu === 'Data User' ? 'active' : ''}
                  onClick={() => handleMenuClick('Data User')}
                >
                  <img 
                    src={dataIcon} 
                    alt="Data User" 
                    className="submenu-icon"
                  />
                  Data User
                </li>
                <li 
                  className={activeMenu === 'Data Kategori' ? 'active' : ''}
                  onClick={() => handleMenuClick('Data Kategori')}
                >
                  <img 
                    src={categori} 
                    alt="Data Kategori" 
                    className="submenu-icon"
                  />
                  Data Kategori
                </li>
              </ul>
            )}

            {/* Transaksi */}
            <li className="menu-item" onClick={() => toggleMenu('transaksi')}>
              <img 
                src={dashboardIcon} 
                alt="Transaksi" 
                className="icon-image"
                style={{ opacity: 0 }} /* Icon transparan untuk alignment */
              />
              <span className="menu-title">Transaksi</span>
              <span className={`arrow ${openMenus.transaksi ? 'open' : ''}`}>
                <img 
                  src={expandIcon} 
                  alt="Expand" 
                  className={`arrow-image ${openMenus.transaksi ? 'open' : ''}`}
                />
              </span>
            </li>
            {openMenus.transaksi && (
              <ul className="submenu">
                <li 
                  className={activeMenu === 'Pembayaran' ? 'active' : ''}
                  onClick={() => handleMenuClick('Pembayaran')}
                >
                  <img 
                    src={payment} 
                    alt="Pembayaran" 
                    className="submenu-icon"
                  />
                  Pembayaran
                </li>
                <li 
                  className={activeMenu === 'Status Order' ? 'active' : ''}
                  onClick={() => handleMenuClick('Status Order')}
                >
                  <img 
                    src={order} 
                    alt="Status Order" 
                    className="submenu-icon"
                  />
                  Status Order
                </li>
              </ul>
            )}

            {/* Upload Artikel */}
            <li 
              className={`menu-item ${activeMenu === 'Upload Artikel' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Upload Artikel')}
            >
              <img 
                src={dashboardIcon} 
                alt="Upload Artikel" 
                className="icon-image"
                style={{ opacity: 0 }} /* Icon transparan untuk alignment */
              />
              <span className="menu-title">Upload Artikel</span>
            </li>

            {/* Saran */}
            <li 
              className={`menu-item ${activeMenu === 'Saran' ? 'active' : ''}`}
              onClick={() => handleMenuClick('Saran')}
            >
              <img 
                src={dashboardIcon} 
                alt="Saran" 
                className="icon-image"
                style={{ opacity: 0 }} /* Icon transparan untuk alignment */
              />
              <span className="menu-title">Saran</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout */}
      <div 
        className="logout-section"
        onClick={() => handleMenuClick('Logout')}
      >
        <span>Logout</span>
        <img 
          src={logoutIcon} 
          alt="Logout" 
          className="logout-icon-image"
        />
      </div>
    </aside>
  );
};

export default Sidebar;