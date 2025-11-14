// D:\Kodingan\Mayuna\src\components\DetailKatalog\DetailKatalog.jsx

import React from 'react';
import './DetailKatalog.css';

const DetailKatalog = () => {
  // Data dummy untuk produk
  const product = {
    category: "Blouse",
    name: "Blouse Cantik",
    rating: 4.8,
    reviews: 245,
    price: "1.000.000",
    description: "Blouse cantik ini dibuat dengan kain premium dengan sentuhan motif pita sangat cocok untuk acara formal maupun non formal dengan beragam warna casual.",
    color: "Merah",
    colors: ["#B33A3A", "#CCCCCC", "#4CAF50", "#5D4037", "#1976D2"],
    size: "XXL",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    sku: "BL001",
    tags: ["Formal", "Casual", "Family", "Premium"],
    images: [
      "https://via.placeholder.com/600x800?text=Main+Image",
      "https://via.placeholder.com/150x200?text=Gallery+1",
      "https://via.placeholder.com/150x200?text=Gallery+2",
      "https://via.placeholder.com/150x200?text=Gallery+3",
      "https://via.placeholder.com/150x200?text=Gallery+4"
    ]
  };

  return (
    <main className="detail-katalog-content">
      <div className="product-grid">
        {/* Gambar Utama */}
        <div className="main-image">
          <img src={product.images[0]} alt={product.name} />
        </div>

        {/* Detail Produk */}
        <div className="product-info">
          <p className="category">{product.category}</p>
          <h1 className="product-title">{product.name}</h1>

          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="rating-value">{product.rating}</span>
            <span className="review-count">({product.reviews} Ulasan)</span>
          </div>

          <div className="price">Rp.{product.price}</div>

          <p className="description">{product.description}</p>

          {/* Warna */}
          <div className="color-section">
            <label>Warna : {product.color}</label>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-circle ${color === product.colors[0] ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Ukuran */}
          <div className="size-section">
            <label>Size : {product.size}</label>
            <div className="size-options">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`size-btn ${size === product.size ? 'selected' : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="action-buttons">
            <button className="btn-chat">Chat Penjual</button>
            <button className="btn-cart">Tambah Ke Keranjang</button>
            <button className="btn-buy">Beli Sekarang</button>
          </div>

          {/* Info Tambahan */}
          <div className="product-meta">
            <div><strong>SKU :</strong> {product.sku}</div>
            <div><strong>Tags :</strong> {product.tags.join(', ')}</div>
            <div><strong>Share :</strong> [Icon Share]</div>
          </div>
        </div>
      </div>

      {/* Gallery Mini */}
      <div className="gallery-thumbs">
        {product.images.slice(1).map((img, index) => (
          <div key={index} className="thumb-item">
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default DetailKatalog;