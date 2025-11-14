import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import BajuImage from '../../assets/Blouse 01.png';

// Komponen Card Produk
const ProductCard = ({ image, category, name, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Arahkan ke halaman detail katalog
    navigate("/detail-katalog");
  };

  return (
    <div className="product-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={image} alt={name} />
      <div className="product-info">
        <span className="category">{category}</span>
        <h3>{name}</h3>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

const HomePage = () => {
  const products = Array(12).fill().map((_, i) => ({
    id: i + 1,
    image: BajuImage,
    category: "Blouse",
    name: "Blouse Cantik",
    price: "Rp1.000.000"
  }));

  return (
    <div className="home-page">
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-sidebar">
          <h2>Filter</h2>
          <div className="filter-category">
            <h3>Per Kategori</h3>
            <div className="filter-item">Semua Kategori</div>
            <div className="filter-item">Blouse</div>
            <div className="filter-item">Gamis</div>
            <div className="filter-item">Setelan Keluarga</div>
          </div>
          <div className="filter-price">
            <h3>Per Harga</h3>
            <div className="filter-item">Rp0 - Rp500.000</div>
            <div className="filter-item">Rp500.000 - Rp1.000.000</div>
            <div className="filter-item">Rp1.000.000 - Rp2.000.000</div>
            <div className="filter-item">Di atas Rp2.000.000</div>
          </div>
        </div>

        <div className="filter-content">
          <div className="active-filters">
            <h3>Filter Aktif</h3>
            <div className="filter-tags">
              <span className="filter-tag">
                Harga: Rp1.000.000 - Rp2.000.000 <span className="remove">x</span>
              </span>
              <span className="filter-tag">
                Terlaris <span className="remove">x</span>
              </span>
            </div>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="pagination">
            <button>{"<"}</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>{">"}</button>
          </div>
        </div>
      </div>

      {/* Suggestion Section */}
      <div className="suggestion-section">
        <h2>Punya saran atau ide? Yuk, kasih tahu kami!</h2>
        <div className="suggestion-form">
          <input type="text" placeholder="Tulis saran atau ide kamu..." />
          <button className="submit-btn">Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
