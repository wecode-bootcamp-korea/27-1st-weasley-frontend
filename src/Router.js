import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SignIn from './pages/SignIn/SignIn';
import Signup from './pages/Signup/Signup';
import { useState } from 'react';
import Cart from './pages/Cart/Cart';
import Payment from './pages/payment/Payment';
import Nav from './components/Nav/Nav';
import Subscribe from './pages/Subscribe/Subscribe';
import Ingredient from './pages/Ingredient/Ingredient';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SignIn" element={<SignIn setIsLogin={setIsLogin} />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
