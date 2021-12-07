import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Login/Login';
import Payment from './pages/payment/Payment';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
