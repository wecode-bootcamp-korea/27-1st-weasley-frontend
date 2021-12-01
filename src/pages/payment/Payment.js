import react from 'react';
import { useState } from 'react/cjs/react.development';

import './Payment.scss';

const Payment = () => {
  return (
    <main className="payment">
      <div className="paymentUserInfo">
        <div className="userWrap">
          <div className="userInfo">
            <sapn className="userName">황주영</sapn>
            <span className="userPhone">01029852796</span>
            <p className="userAddress">강남구 테헤란로 427 위워크</p>
          </div>
          <div className="modifyButtonWrap">
            <span className="modifyButton">수정</span>
          </div>
        </div>
        <div className="paymentMethod">
          <div className="methodTitle">
            <h1>결제수단을 선택해주세요.</h1>
          </div>
          {/* <SelectPayMethod /> */}
          <form className="methodForm">
            <button className="methodButton naver">네이버페이로 결제</button>
            <button className="methodButton point">포인트로 결제</button>
          </form>
          <form className="payForm">
            <button className="payButton">결제하기</button>
          </form>
        </div>
      </div>
      <div className="paymentPayList">
        <div className="orderProductList">
          <div className="orderProductImage">
            <img src="images/productimage/cleanser2.png" alt="#" />
          </div>
          <div className="orderInfo">
            <p className="productName">클렌징폼</p>
            <span className="productType">건성용</span>
            <span className="productCapacity">180ml</span>
          </div>
          <div className="seperateInfo">
            <span className="seperateQty">1개</span>
            <span className="seperateQty">/</span>
            <span className="seperatePrcie">7500</span>
            <span className="seperateQty">원</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
