import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetailTop from './ProductTop';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const [count, setCount] = useState(1);
  const [isData, setIsData] = useState(false);
  const { id } = useParams();

  const countUpEvent = () => {
    setCount(prev => prev + 1);
  };
  const countDownEvent = () => {
    setCount(prev => prev - 1);
  };

  useEffect(() => {
    fetch(`http://10.58.7.86:8000/products/detail/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetail(data);
      })
      .then(() => {
        setIsData(true);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  }, []);

  return (
    <main className="main">
      {isData && (
        <ProductDetailTop
          detail={detail}
          count={count}
          countUpEvent={countUpEvent}
          countDownEvent={countDownEvent}
        />
      )}
    </main>
  );
};

export default ProductDetail;
