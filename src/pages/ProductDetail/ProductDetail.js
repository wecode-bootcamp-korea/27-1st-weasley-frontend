import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetailTop from './ProductTop';
import ProductDetailContents from './ProductDetailContents';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const detailList = detail.filter(item => item.id === Number(id));

  const countUpEvent = () => {
    setCount(count + 1);
  };
  const countDownEvent = () => {
    setCount(count - 1);
    return count < 2 ? setCount(1) : null;
  };

  useEffect(() => {
    fetch('/data/detailcontents.json')
      .then(res => res.json())
      .then(data => {
        setDetail(data);
      });
  }, []);

  return (
    <main className="main">
      {detailList.map(item => {
        return (
          <ProductDetailTop
            key={item.id}
            name={item.name}
            price={item.price}
            count={count}
            countUpEvent={countUpEvent}
            countDownEvent={countDownEvent}
          />
        );
      })}
      <ProductDetailContents />;
    </main>
  );
};

export default ProductDetail;
