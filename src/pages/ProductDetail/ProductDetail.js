import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductDetailTop from './ProductTop';
import ProductDetailContents from './ProductDetailContents';

import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`/data/productDetail/detailcontents.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        setDetail(data);
      });
  }, []);

  const [detail, setDetail] = useState([]);
  console.log('디테일이다', detail);
  console.log('디테일 아이디');
  return (
    <main className="main">
      <ProductDetailTop
        id={detail.id}
        name={detail.detailName}
        price={detail.price}
      />
      <ProductDetailContents />;
    </main>
  );
};

export default ProductDetail;
