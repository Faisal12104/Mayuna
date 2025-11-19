import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('Oktober 2025');
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  // Data dummy
  const statsData = {
    totalProduct: 2000,
    totalOrder: 5200,
    totalMitra: 2000,
    totalUser: 1000,
    totalRevenue: 144000000
  };

  const filters = ['Oktober 2025', 'September 2025', 'Agustus 2025'];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="admin-dashboard">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard Admin</h1>
          <div className="filter-section">
            <span>Filter:</span>
            <div className="filter-buttons">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Product</h3>
            <div className="stat-number">{statsData.totalProduct.toLocaleString()}</div>
          </div>
          
          <div className="stat-card">
            <h3>Total Order</h3>
            <div className="stat-number">{statsData.totalOrder.toLocaleString()}</div>
          </div>
          
          <div className="stat-card">
            <h3>Total User</h3>
            <div className="user-breakdown">
              <div className="user-type">
                <span>Mitra</span>
                <span>{statsData.totalMitra.toLocaleString()}</span>
              </div>
              <div className="user-type">
                <span>User</span>
                <span>{statsData.totalUser.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div className="stat-card revenue-card">
            <h3>Total Pendapatan</h3>
            <div className="stat-number revenue">{formatCurrency(statsData.totalRevenue)}</div>
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
    </div>
  );
};

export default Dashboard;