import React from 'react';
import './Pemesanan.css';

const StatusPembayaran = () => {
  return (
    <div className="payment-status-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="step active">
          <div className="step-circle"></div>
          <div className="step-label">Belum Bayar</div>
          <div className="step-sublabel">2/2</div>
        </div>
        <div className="step active">
          <div className="step-circle"></div>
          <div className="step-label">Dikemas</div>
        </div>
        <div className="step active">
          <div className="step-circle"></div>
          <div className="step-label">Dikirim</div>
        </div>
        <div className="step active">
          <div className="step-circle"></div>
          <div className="step-label">Selesai</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Card */}
        <div className="confirmation-card">
          <div className="check-icon">✓</div>
          <h3>Pesanan Dikonfirmasi</h3>
          <p>Anda sudah melunasi pembayaran pesanan ini</p>
          <a href="#" className="invoice-link">Lihat Invoice</a>
          <button className="go-to-order-btn">Pergi Ke Pesananmu</button>
        </div>

        {/* Right Details */}
        <div className="order-details">
          <div className="shipping-info">
            <span>3 Hari Pengiriman</span>
          </div>
          <h2>Blouse Pita</h2>
          <p className="product-desc">
            Blouse Pita Untuk Remaja dibuat dengan kain premium cocok untuk acara formal dan non formal
          </p>
          <ul className="features-list">
            <li>✓ Bahan Premium</li>
            <li>✓ Warna Menarik</li>
          </ul>

          <div className="price-breakdown">
            <div className="quantity-price-row">
              <span>3</span>
              <span>Rp500.000 per baju</span>
            </div>
            <div className="row">
              <span>SubTotal</span>
              <span>Rp1.500.000</span>
            </div>
            <div className="row">
              <span>Diskon</span>
              <span>Rp100.000</span>
            </div>
            <div className="total-row">
              <span>Total</span>
              <span>Rp1.400.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPembayaran;