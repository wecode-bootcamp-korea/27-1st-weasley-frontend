import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Login/Login';
import Ingredient from './pages/Ingredient/Ingredient';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ingredient" element={<Ingredient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
