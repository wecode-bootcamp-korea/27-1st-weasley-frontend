import React from 'react';
import './SubscribeShipping.scss';

function SubscribeShipping({
  deliveryCycle,
  nextPurchaseDate,
  nextDeliveryDate,
}) {
  return (
    <div className="shipping">
      <div className="title">다음 결제일 및 주기 관리</div>
      <div className="shippingDate">
        <div className="manageDate">
          <h2>다음 결제일</h2>
          <p className="date">
            {nextPurchaseDate?.split('-')[1]}월 &nbsp;
            {nextPurchaseDate?.split('-')[2]}일
          </p>
        </div>
        <div className="manageDate">
          <h2>정기배송 주기</h2>
          <p className="date">{deliveryCycle}</p>
        </div>
        <div className="manageDate">
          <h2>다음 배송일</h2>

          <p className="date">
            {nextDeliveryDate?.split('-')[1]}월 &nbsp;
            {nextDeliveryDate?.split('-')[2]}일
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubscribeShipping;
