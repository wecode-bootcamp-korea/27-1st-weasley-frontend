import react, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import PayInfo from './PayInfo';
import './Payment.scss';

const Payment = () => {
  const [payInfo, setPayInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('/data/payment/paymentdata.json')
      .then(res => res.json())
      .then(data => {
        setPayInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: '',
        body: 'I am testing!',
        userId: 1,
      }),
    }).then(response => console.log(response));
  }, []);

  return (
    <main className="payment">
      <div className="paymentUserInfo">
        <div className="userWrap">
          <div className="userInfo">
            <sapn className="userName">
              <input className="orderName" type="text" placeholder="성함" />
            </sapn>
            <span className="userPhone">
              <input type="text" placeholder="01012345678" />
            </span>
            <p className="userAddress">
              <input type="text" />
            </p>
          </div>
          <div className="modifyButtonWrap">
            <span className="modifyButton">주소 추가</span>
          </div>
        </div>
        <div className="paymentMethod">
          <div className="methodTitle">
            <h1>결제수단을 선택해주세요.</h1>
          </div>
          <form className="methodForm">
            <button className="methodButton point">포인트로 결제</button>
          </form>
          <form className="payForm">
            <button className="payButton">결제하기</button>
          </form>
        </div>
      </div>
      <div className="paymentPayList">
        {payInfo.map(item => {
          return <PayInfo key={item.id} name={item.name} price={item.price} />;
        })}

        <div className="total">
          <ul className="totalInfo">
            <li className="productPriceText">상품가격</li>
            <li className="ProductPrice">
              {payInfo
                .reduce((total, curr) => total + curr.price, 0)
                .toLocaleString()}
              원
            </li>
          </ul>
          <ul className="totalInfo">
            <li className="shippingPriceText">배송비</li>
            <li className="shippingIsFree">무료배송</li>
          </ul>
          <ul className="totalInfo">
            <li className="totalPriceText">총 결제금액</li>
            <li className="totalPrice">
              {payInfo
                .reduce((total, curr) => total + curr.price, 0)
                .toLocaleString()}
              원
            </li>
          </ul>
          <ul className="totalInfo">
            <li>현재 남은 포인트</li>
            <li>50,000원</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Payment;
