import React from 'react';
import './SubscribeShipping.scss';

function SubscribeShipping({ deliveryCycle }) {
  return (
    <div className="shipping">
      <div className="title">다음 결제일 및 주기 관리</div>
      <div className="shippingDate">
        <div className="manageDate">
          <h2>다음 결제일</h2>
          <p className="date">1월 28일 </p>
        </div>
        <div className="manageDate">
          <h2>정기배송 주기</h2>
          <p className="date">{deliveryCycle}주 마다</p>
        </div>
        <div className="manageDate">
          <h2>다음 배송일</h2>
          <p className="date">3월 25일</p>
        </div>
      </div>
    </div>
  );
}

export default SubscribeShipping;
