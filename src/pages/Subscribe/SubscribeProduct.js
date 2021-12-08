import React from 'react';
import { Link } from 'react-router-dom';
import './SubscribeProduct.scss';

function SubscribeProduct({
  subscribeData,
  setSubscribeData,
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
              ? handleDelete(product_id)
              : alert(data.MESSAGE);
          })
          .catch(error => alert(error))
      : handleDelete(product_id);
  };

  const handleDelete = productId => {
    const filteredProduct = subscribeData.filter(item => {
      return item.product_id !== productId;
    });
    setSubscribeData(filteredProduct);
  };

  return (
    <>
      <div className="subscribeProductTitle">구독중인 상품</div>
      {subscribeData.length > 0 ? (
        <div className="subscribeProduct">
          {subscribeData.map(obj => {
            return (
              <>
                <Link to={`/productdetails/${obj.product_id}`}>
                  <div key={obj.product_id}>
                    <img src={obj?.thumb} alt="productImg" />
                  </div>
                </Link>
                <button
                  className="subscribeCancel"
                  onClick={() => fetchDelete(obj.product_id)}
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
