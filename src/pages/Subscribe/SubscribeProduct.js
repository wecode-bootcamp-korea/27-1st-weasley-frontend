import React, { useEffect, useState } from 'react';
import './SubscribeProduct.scss';

function SubscribeProduct() {
  const [subscribeProductImg, setSubscribeProductImg] = useState([]);

  useEffect(() => {
    fetch('/data/subscribeProductData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setSubscribeProductImg(data);
      });
  }, []);
  return (
    <>
      <div className="productTitle">구독중인 상품</div>

      <div className="product">
        {subscribeProductImg.map(product => {
          return (
            <div key={product.id}>
              <img src={product.thumb} alt="productImg" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SubscribeProduct;
