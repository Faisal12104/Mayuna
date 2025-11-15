import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import DetailKatalog from "./components/DetailKatalog/DetailKatalog";
import Payment from "./components/Payment/Payment";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-katalog" element={<DetailKatalog />} />
        <Route path="/catalog" element={<ComingSoon />} />
        <Route path="/cart" element={<ComingSoon />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;