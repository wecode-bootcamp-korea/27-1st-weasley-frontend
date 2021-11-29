import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from '../src/pages/ProductList/ProductList';
import ProductDetail from '../src/pages/ProductDetail/ProductDetail';
import Login from '../src/pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
