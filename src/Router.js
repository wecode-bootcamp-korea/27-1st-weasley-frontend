import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Cart from './pages/Cart/Cart';
import Payment from './pages/payment/Payment';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
<<<<<<< HEAD
        <Route path="/Main" element={<Main />} />
=======
        <Route path="/" element={<Main />} />
>>>>>>> master
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
