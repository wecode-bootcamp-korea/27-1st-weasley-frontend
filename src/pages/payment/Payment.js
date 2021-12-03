import react, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import PayInfo from './PayInfo';
import GuestUserInfo from './GuestUserInfo';
import PaymentUserInfo from './PaymentUserInfo';
import './Payment.scss';

const Payment = () => {
  const [userAddressInputValue, setUserAddressInputValue] = useState('');
  const [userAddress, setUserAddress] = useState([]);
  const [payInfo, setPayInfo] = useState([]);
  const [point, setPoint] = useState();

  //서버에서 유저 포인트 불러와주고 (최초포인트 50,000원/ 결제서에 담긴 금액만큼 차감해주기)

  useEffect(() => {
    fetch('/data/payment/paymentdata.json')
      .then(res => res.json())
      .then(data => {
        setPayInfo(data);
      });
  }, []);

  const addressInputValue = e => {
    setUserAddressInputValue(e.target.value);
  };

  return (
    <main className="payment">
      {userAddressInputValue ? (
        <PaymentUserInfo
          userAddressInputValue={userAddressInputValue}
          userAddress={userAddress}
        />
      ) : (
        <GuestUserInfo
          userAddressInputValue={userAddressInputValue}
          setUserAddress={setUserAddress}
        />
      )}

      <div className="paymentPayListWrap">
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
          <ul className="totalInfo">
            <li>결제 후 포인트</li>
            <li>50,000원</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Payment;
