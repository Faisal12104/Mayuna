import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import DetailKatalog from "./components/DetailKatalog/DetailKatalog";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<HomePage />} />
        {/* Halaman detail produk */}
        <Route path="/detail-katalog" element={<DetailKatalog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
