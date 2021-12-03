import react, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import PayInfo from './PayInfo';
import GuestUserInfo from './GuestUserInfo';
import PaymentUserInfo from './PaymentUserInfo';
import './Payment.scss';

const Payment = () => {
  const [userInputValue, setUserInputValue] = useState('');
  const [payInfo, setPayInfo] = useState([]);

  useEffect(() => {
    fetch('/data/payment/paymentdata.json')
      .then(res => res.json())
      .then(data => {
        setPayInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/payment/paymentdata.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userAddress: '테헤란로427',
      }),
    })
      .then(response => response.json())
      .then(response => console.log(response));
  }, []);

  const addressInputValue = e => {
    setUserInputValue(e.target.value);
  };

  return (
    <main className="payment">
      {/* 토큰이 없으면 주소 입력창 뜨게하기 / 입력하거나 저장된 있다면 저장된 주소 붙여주기*/}
      <GuestUserInfo addressInputValue={addressInputValue} />
      <PaymentUserInfo />
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
