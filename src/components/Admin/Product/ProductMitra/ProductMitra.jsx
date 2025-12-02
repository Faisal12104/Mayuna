import React, { useState } from 'react';
import './ProductMitra.css';

const ProductMitra = () => {
  // Data dummy untuk contoh
  const initialProducts = [
    {
      id: 1,
      nama: 'Laptop Gaming Pro',
      gambar: 'https://via.placeholder.com/60',
      deskripsi: 'Laptop gaming dengan performa tinggi',
      spesifikasi: 'Intel i7, RTX 3060, 16GB RAM, 512GB SSD',
      kategori: 'Elektronik',
      subKategori: 'Laptop',
      hargaAsli: 15000000,
      hargaMitra: 13500000,
      stok: 25,
    },
    {
      id: 2,
      nama: 'Smartphone Flagship',
      gambar: 'https://via.placeholder.com/60',
      deskripsi: 'Smartphone dengan kamera terbaik',
      spesifikasi: 'Snapdragon 888, 12GB RAM, 256GB, 108MP',
      kategori: 'Elektronik',
      subKategori: 'Smartphone',
      hargaAsli: 12000000,
      hargaMitra: 10800000,
      stok: 50,
    },
    {
      id: 3,
      nama: 'Headset Wireless',
      gambar: 'https://via.placeholder.com/60',
      deskripsi: 'Headset dengan noise cancellation',
      spesifikasi: 'Bluetooth 5.0, ANC, 30 jam baterai',
      kategori: 'Audio',
      subKategori: 'Headset',
      hargaAsli: 2500000,
      hargaMitra: 2250000,
      stok: 100,
    },
    {
      id: 4,
      nama: 'Monitor 4K',
      gambar: 'https://via.placeholder.com/60',
      deskripsi: 'Monitor gaming 144Hz',
      spesifikasi: '27 inch, 4K, 144Hz, IPS',
      kategori: 'Elektronik',
      subKategori: 'Monitor',
      hargaAsli: 6000000,
      hargaMitra: 5400000,
      stok: 15,
    },
    {
      id: 5,
      nama: 'Meja Gaming',
      gambar: 'https://via.placeholder.com/60',
      deskripsi: 'Meja gaming ergonomis',
      spesifikasi: 'Kayu MDF, adjustable height, RGB',
      kategori: 'Furniture',
      subKategori: 'Meja',
      hargaAsli: 3000000,
      hargaMitra: 2700000,
      stok: 30,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const handleUpload = () => {
    alert('Fungsi upload produk akan dibuka');
    // Implementasi upload produk
  };

  const handleDownload = () => {
    alert('Fungsi unduh data akan dijalankan');
    // Implementasi download data
  };

  return (
    <div className="product-mitra-container">
      {/* Header dengan judul dan tombol aksi */}
      <div className="product-header">
        <div className="header-left">
          <h1 className="page-title">PRODUK</h1>
        </div>
        <div className="header-right">
          <button className="upload-btn" onClick={handleUpload}>
            <span className="btn-icon">📤</span>
            Upload Produk
          </button>
          <button className="download-btn" onClick={handleDownload}>
            <span className="btn-icon">📥</span>
            Unduh Data
          </button>
        </div>
      </div>

      {/* Tabel Produk */}
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Produk</th>
              <th>Gambar</th>
              <th>Deskripsi Produk</th>
              <th>Spesifikasi Produk</th>
              <th>Kategori</th>
              <th>Sub Kategori</th>
              <th>Harga Asli</th>
              <th>Harga Mitra</th>
              <th>Stok</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="center">{index + 1}</td>
                <td className="bold">{product.nama}</td>
                <td className="center">
                  <img 
                    src={product.gambar} 
                    alt={product.nama} 
                    className="product-image"
                  />
                </td>
                <td className="description">{product.deskripsi}</td>
                <td className="specs">{product.spesifikasi}</td>
                <td>{product.kategori}</td>
                <td>{product.subKategori}</td>
                <td className="price">{formatRupiah(product.hargaAsli)}</td>
                <td className="price mitra">{formatRupiah(product.hargaMitra)}</td>
                <td className={`stock ${product.stok < 10 ? 'low' : product.stok < 30 ? 'medium' : 'high'}`}>
                  {product.stok}
                </td>
                <td className="actions">
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Edit */}
      {isEditModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Produk</h2>
            <div className="modal-content">
              <div className="form-group">
                <label>Nama Produk</label>
                <input 
                  type="text" 
                  defaultValue={selectedProduct.nama}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Deskripsi</label>
                <textarea 
                  defaultValue={selectedProduct.deskripsi}
                  className="form-textarea"
                />
              </div>
              <div className="form-group">
                <label>Spesifikasi</label>
                <textarea 
                  defaultValue={selectedProduct.spesifikasi}
                  className="form-textarea"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Harga Asli</label>
                  <input 
                    type="number" 
                    defaultValue={selectedProduct.hargaAsli}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Harga Mitra</label>
                  <input 
                    type="number" 
                    defaultValue={selectedProduct.hargaMitra}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Stok</label>
                  <input 
                    type="number" 
                    defaultValue={selectedProduct.stok}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setIsEditModalOpen(false)}
              >
                Batal
              </button>
              <button 
                className="save-btn"
                onClick={() => handleSaveEdit(selectedProduct)}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Delete */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal delete-modal">
            <h2>Hapus Produk</h2>
            <p>Apakah Anda yakin ingin menghapus produk "{selectedProduct.nama}"?</p>
            <p className="warning-text">Tindakan ini tidak dapat dibatalkan.</p>
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Batal
              </button>
              <button 
                className="delete-confirm-btn"
                onClick={confirmDelete}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductMitra;