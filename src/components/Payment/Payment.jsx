import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [selectedBank, setSelectedBank] = useState('Bank Mandiri');
  const [proofImage, setProofImage] = useState(null);

  // Data pesanan (dummy)
  const orderSummary = [
    { name: 'Blouse Pita Pink', quantity: 1, price: 500000 },
    { name: 'Blouse Pita Merah', quantity: 1, price: 500000 },
    { name: 'Blouse Pita Hitam', quantity: 1, price: 500000 },
  ];

  const discount = 100000;
  const totalPaymentDP1 = 700000;
  const totalPaymentPelunasan = 700000;

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProofImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePayment = () => {
    alert('Pembayaran sedang diproses. Silakan tunggu konfirmasi dari admin.');
  };

  return (
    <div className="payment-page">
      <main className="payment-container">
        <div className="payment-banner">
          BATAS PELUNASAN 4 x 24 JAM JIKA TIDAK BAYAR BATAL OTOMATIS
        </div>

        <h1 className="payment-title">Pembayaran Pelunasan</h1>

        <div className="payment-info-box">
          <div className="info-icon">i</div>
          <div className="info-text">
            <p className="info-bold">Pesanan ini menggunakan sistem Pre-Order (PO)</p>
            <p className="info-detail">
              Pelunasan dilakukan maksimal 4x24 jam setelah mendapatkan konfirmasi pembayaran DP1 dari admin, kemudian pengguna melakukan pelunasan halaman ini lagi untuk barang siap dikirim.
            </p>
          </div>
        </div>

        <div className="payment-layout">
          {/* Kolom Kiri */}
          <div className="payment-form-card">
            <h2 className="form-title">Informasi Pembayaran</h2>

            <label className="form-label">Metode Pembayaran</label>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="form-select"
            >
              <option>Bank Mandiri</option>
              <option>BCA</option>
              <option>BRI</option>
              <option>BSI</option>
            </select>

            <label className="form-label">Bukti Pembayaran*</label>
            <div className="upload-area">
              {proofImage ? (
                <img src={proofImage} alt="Bukti Pembayaran" className="preview-image" />
              ) : (
                <>
                  <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="upload-text">Klik atau seret & lepas file di sini</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input"
                    id="proof-upload"
                  />
                  <label htmlFor="proof-upload" className="upload-button">Pilih file</label>
                </>
              )}
            </div>

            <button
              onClick={handlePayment}
              disabled={!proofImage}
              className={`pay-button ${!proofImage ? 'disabled' : ''}`}
            >
              Bayar
            </button>
          </div>

          {/* Kolom Kanan */}
          <div className="order-summary-card">
            <div className="summary-header">
              <h2 className="summary-title">Ringkasan Pesanan</h2>
              <button className="download-button">
                <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v-7h7" />
                </svg>
              </button>
            </div>

            <div className="items-list">
              {orderSummary.map((item, index) => (
                <div key={index} className="item-row">
                  <div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-qty">1 pcs</div>
                  </div>
                  <div className="item-price">Rp{item.price.toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div className="summary-row">
              <span>Diskon</span>
              <span className="discount">Rp{discount.toLocaleString()}</span>
            </div>

            <div className="summary-row total-row">
              <span>Total Pembayaran</span>
              <span>Rp{(orderSummary.reduce((sum, item) => sum + item.price, 0) - discount).toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Total Pembayaran DP1</span>
              <span>Rp{totalPaymentDP1.toLocaleString()}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total Pembayaran Pelunasan</span>
              <span>Rp{totalPaymentPelunasan.toLocaleString()}</span>
            </div>

            <div className="shipping-note">
              Pengiriman dilakukan setelah DP ke-2 lunas dan maksimal pengiriman 3 hari
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;