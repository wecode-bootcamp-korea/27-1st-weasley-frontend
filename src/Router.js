import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
<<<<<<< HEAD
import SignIn from './pages/SignIn/SignIn';
=======
import Login from './pages/Login/Login';
import Subscribe from './pages/Subscribe/Subscribe';
>>>>>>> master
import Signup from './pages/Signup/Signup';
import Cart from './pages/Cart/Cart';
import Payment from './pages/payment/Payment';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
