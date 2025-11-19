import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

// Komponen untuk masing-masing halaman (sementara pakai placeholder)
const DashboardContent = () => (
  <div className="dashboard-content">
    <div className="dashboard-header">
      <h1>Dashboard Admin</h1>
      <div className="filter-section">
        <span>Filter:</span>
        <div className="filter-buttons">
          <button className="filter-btn active">Oktober 2025</button>
          <button className="filter-btn">September 2025</button>
          <button className="filter-btn">Agustus 2025</button>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Product</h3>
        <div className="stat-number">2,000</div>
      </div>
      
      <div className="stat-card">
        <h3>Total Order</h3>
        <div className="stat-number">5,200</div>
      </div>
      
      <div className="stat-card">
        <h3>Total User</h3>
        <div className="user-breakdown">
          <div className="user-type">
            <span>Mitra</span>
            <span>2,000</span>
          </div>
          <div className="user-type">
            <span>User</span>
            <span>1,000</span>
          </div>
        </div>
      </div>
      
      <div className="stat-card revenue-card">
        <h3>Total Pendapatan</h3>
        <div className="stat-number revenue">Rp144.000.000</div>
      </div>
    </div>

    {/* Chart Section */}
    <div className="chart-section">
      <div className="chart-card">
        <h3>Grafik Penjualan</h3>
        <div className="chart-placeholder">
          <div className="chart-legends">
            <div className="legend">
              <span className="legend-color order"></span>
              <span>Total Order</span>
            </div>
            <div className="legend">
              <span className="legend-color revenue"></span>
              <span>Total Pendapatan</span>
            </div>
          </div>
          <div className="chart-bars">
            <div className="chart-bar-container">
              <div className="chart-bar order-bar" style={{ height: '70%' }}></div>
              <span>Jan</span>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar revenue-bar" style={{ height: '50%' }}></div>
              <span>Feb</span>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar order-bar" style={{ height: '85%' }}></div>
              <span>Mar</span>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar revenue-bar" style={{ height: '65%' }}></div>
              <span>Apr</span>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar order-bar" style={{ height: '60%' }}></div>
              <span>Mei</span>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar revenue-bar" style={{ height: '75%' }}></div>
              <span>Jun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Komponen placeholder untuk halaman lain
const PlaceholderContent = ({ title }) => (
  <div className="placeholder-content">
    <h1>{title}</h1>
    <p>Halaman {title} sedang dalam pengembangan.</p>
  </div>
);

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  // Fungsi untuk merender konten berdasarkan menu aktif
  const renderContent = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return <DashboardContent />;
      
      case 'Produk Mitra':
        return <PlaceholderContent title="Produk Mitra" />;
      case 'Produk User':
        return <PlaceholderContent title="Produk User" />;
      
      case 'Data Mitra':
        return <PlaceholderContent title="Data Mitra" />;
      case 'Data User':
        return <PlaceholderContent title="Data User" />;
      case 'Data Kategori':
        return <PlaceholderContent title="Data Kategori" />;
      
      case 'Pembayaran':
        return <PlaceholderContent title="Pembayaran" />;
      case 'Status Order':
        return <PlaceholderContent title="Status Order" />;
      
      case 'Upload Artikel':
        return <PlaceholderContent title="Upload Artikel" />;
      case 'Saran':
        return <PlaceholderContent title="Saran" />;
      
      case 'Logout':
        // Redirect ke halaman login (bisa disesuaikan)
        window.location.href = '/login';
        return null;
      
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      {/* Main Content */}
      <div className="dashboard-main">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;