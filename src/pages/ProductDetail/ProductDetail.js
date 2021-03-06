import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API } from '../../config';
import ProductDetailTop from './ProductTop';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const countUpEvent = () => {
    setCount(prev => prev + 1);
  };
  const countDownEvent = () => {
    setCount(prev => prev - 1);
  };

  useEffect(() => {
    fetch(`${API.PRODUCT_DETAIL}/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetail(data);
      });
  }, []);

  return (
    <main className="main">
      {detail.RESULT && (
        <ProductDetailTop
          id={id}
          detail={detail.RESULT}
          count={count}
          countUpEvent={countUpEvent}
          countDownEvent={countDownEvent}
        />
      )}
    </main>
  );
};

export default ProductDetail;
