import React from 'react';
import { Link } from 'react-router-dom';
import './SubscribeProduct.scss';

function SubscribeProduct({
  productData,
  setProductData,
  setIsItNowSubscribing,
  setDeliveryCycle,
  setNextDeliveryDate,
  setNextPurchaseDate,
}) {
  const fetchDelete = product_id => {
    window.confirm('제품구독을 취소하시겠습니까?')
      ? fetch(`1`, {
          method: 'delete',
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
          },
        })
          .then(res => res.json())
          .then(data => {
            data.MESSAGE === 'DELETED'
              ? alert(data.MESSAGE)
              : handleDelete(product_id);
          })
          .catch(error => alert(error))
      : handleDelete(product_id);
  };

  const handleDelete = product_id => {
    const filteredProduct = productData.filter(item => {
      return item.product_id !== product_id;
    });
    setProductData(filteredProduct);
  };

  return (
    <>
      <div className="subscribeProductTitle">구독중인 상품</div>
      {productData.length > 0 ? (
        <div className="subscribeProduct">
          {productData.map(product => {
            return (
              <>
                <Link to={`/productdetails/${product.product_id}`}>
                  <div key={product.id}>
                    <img src={product.thumb} alt="productImg" />
                  </div>
                </Link>
                <button
                  className="subscribeCancel"
                  onClick={() => fetchDelete(product.product_id)}
                >
                  x
                </button>
              </>
            );
          })}
        </div>
      ) : (
        <>
          <div className="notSubscribing">현재구독중인 상품이 없습니다.🥲</div>
          {setIsItNowSubscribing('비구독중')}
          {setDeliveryCycle('')}
          {setNextDeliveryDate('')}
          {setNextPurchaseDate('')}
        </>
      )}
    </>
  );
}

export default SubscribeProduct;
