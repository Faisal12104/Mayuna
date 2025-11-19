import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import HomePage from "./components/HomePage/HomePage";
import Admin from "./components/Admin/Dashboard/Dashboard";
import DetailKatalog from "./components/DetailKatalog/DetailKatalog";
import Payment from "./components/Payment/Payment";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Pemesanan from "./components/Pemesanan/Pemesanan";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes dengan Header & Footer (DefaultLayout) */}
        <Route path="/" element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        } />
        
        <Route path="/detail-katalog" element={
          <DefaultLayout>
            <DetailKatalog />
          </DefaultLayout>
        } />
        
        <Route path="/catalog" element={
          <DefaultLayout>
            <ComingSoon />
          </DefaultLayout>
        } />
        
        <Route path="/cart" element={
          <DefaultLayout>
            <ComingSoon />
          </DefaultLayout>
        } />
        
        <Route path="/payment" element={
          <DefaultLayout>
            <Payment />
          </DefaultLayout>
        } />
        
        <Route path="/order" element={
          <DefaultLayout>
            <Pemesanan />
          </DefaultLayout>
        } />
        
        {/* Route admin TANPA Header & Footer (AdminLayout) */}
        <Route path="/admin" element={
          <AdminLayout>
            <Admin />
          </AdminLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;