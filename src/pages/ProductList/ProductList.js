import React, { useEffect, useState } from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListBanner from './ProductListBanner/ProductListBanner';
import ProductListTitle from './ProductListTitle/ProductListTitle';
import Product from './Product/Product';
<<<<<<< HEAD
import { API } from '../../config';
=======
>>>>>>> master
import './ProductList.scss';

function ProductList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API.CATEGORY, {
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json())
      .then(data => {
        setCategories(data.RESULT);
      });
  }, []);

  return (
    <>
      <ProductListHeader />
      <ProductListBanner />

      <main className="main">
        <ProductListTitle />

        {categories.map(function (category, index) {
          return (
            <Product category={category} index={index} key={category.id} />
          );
        })}
      </main>
    </>
  );
}

export default ProductList;
