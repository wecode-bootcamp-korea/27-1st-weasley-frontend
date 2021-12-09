import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/Signup/SignUp';
import { useState } from 'react';
import Cart from './pages/Cart/Cart';
import Payment from './pages/payment/Payment';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Subscribe from './pages/Subscribe/Subscribe';
import Ingredient from './pages/Ingredient/Ingredient';

const Router = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <BrowserRouter>
      <Nav isLogin={isSignIn} setIsLogin={setIsSignIn} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/signin" element={<SignIn setIsLogin={setIsSignIn} />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
