import React from 'react';
import './DetailKatalog.css';
import KatalogImage from '../../assets/Katalog.png';
import Thumbnail1 from '../../assets/Katalog1.png';
import Thumbnail2 from '../../assets/Katalog2.png';
import Thumbnail3 from '../../assets/Katalog3.png';
import Thumbnail4 from '../../assets/Katalog4.png';

const DetailKatalog = () => {
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
      KatalogImage,
      Thumbnail1,
      Thumbnail2,
      Thumbnail3,
      Thumbnail4
    ]
  };

  return (
    <main className="detail-katalog-content">
      <div className="product-grid">
        <div className="image-section">
          <div className="main-image">
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div className="gallery-thumbs">
            {product.images.slice(1).map((img, index) => (
              <div key={index} className="thumb-item">
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

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

          <div className="action-buttons">
            <button className="btn-chat">Chat Penjual</button>
            <button className="btn-cart">Tambah Ke Keranjang</button>
            <button className="btn-buy">Beli Sekarang</button>
          </div>

          <div className="product-meta">
            <div><strong>SKU :</strong> {product.sku}</div>
            <div><strong>Tags :</strong> {product.tags.join(', ')}</div>
            <div><strong>Share :</strong> [Icon Share]</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailKatalog;