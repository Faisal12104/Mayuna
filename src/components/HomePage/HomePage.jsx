import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="hero-section">
        <img src="https://via.placeholder.com/1200x300?text=Hero+Banner" alt="Hero Banner" />
      </div>

      <div className="content-container">
        <aside className="sidebar">
          <h2>Filter</h2>
          <div className="filter-section">
            <h3>Per Kategori</h3>
          </div>
          <div className="filter-section">
            <h3>Per Harga</h3>
          </div>
          <div className="filter-section">
            <h3>Ulasan</h3>
          </div>
        </aside>

        <section className="product-list">
          <div className="active-filters">
            <span>Filter Aktif</span>
            <span className="filter-tag">Harga : Rp1.000.000 - Rp2.000.000 ×</span>
            <span className="filter-tag">Terlaris ×</span>
          </div>

          <div className="products-grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={`https://via.placeholder.com/250x250?text=Produk+${index + 1}`} alt={`Produk ${index + 1}`} />
                </div>
                <div className="product-info">
                  <span className="category">Blouse</span>
                  <h3>Blouse Cantik</h3>
                  <span className="price">Rp1.000.000</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button aria-label="Previous page">{'<'}</button>
            <button className="active" aria-label="Page 1">1</button>
            <button aria-label="Page 2">2</button>
            <button aria-label="Page 3">3</button>
            <span>...</span>
            <button aria-label="Next page">{'>'}</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;