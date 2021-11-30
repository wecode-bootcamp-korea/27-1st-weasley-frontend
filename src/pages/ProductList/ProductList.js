import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListBanner from './ProductListBanner/ProductListBanner';
import ProductListTitle from './ProductListTitle/ProductListTitle';
import Product from './Product/Product';
function ProductList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/data/categoriesData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <nav>
        nav바 자리 nav바 자리 nav바 자리 nav바 자리 nav바 자리 nav바 자리 nav바
        자리 nav바 자리 nav바 자리 nav바 자리 nav바 자리 nav바 자리 nav바 자리
        nav바 자리 nav바 자리 nav바 자리 nav바 자리 nav바 자리
      </nav>

      <ProductListHeader />

      <ProductListBanner />

      <main className="main">
        <ProductListTitle />

        {categories.map(function (category) {
          return (
            <Product category={category} i={category.id} key={category.id} />
          );
        })}
      </main>
    </>
  );
}

export default ProductList;
