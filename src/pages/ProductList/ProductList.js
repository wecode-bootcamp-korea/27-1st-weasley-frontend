import React, { useEffect, useState } from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListBanner from './ProductListBanner/ProductListBanner';
import ProductListTitle from './ProductListTitle/ProductListTitle';
import Product from './Product/Product';
import { API } from '../../config';
import './ProductList.scss';

function ProductList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API.CATEGORY, {
      method: 'get',
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
