import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import PayInfo from './PayInfo';
import GuestUserInfo from './GuestUserInfo';
import PaymentUserInfo from './PaymentUserInfo';
import './Payment.scss';

const Payment = () => {
  const [userAddressInputValue, setUserAddressInputValue] = useState('');
  const [userAddress, setUserAddress] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [payInfo, setPayInfo] = useState([]);
  const [addressValidatedSwitch, setAddressValidatedSwitch] = useState(false);

  useEffect(() => {
    fetch('/data/payment/payinfo.json', {
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json())
      .then(data => setPayInfo(data));
  }, []);

  useEffect(() => {
    fetch('/data/payment/userinfo.json')
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
        if (data.length === 0) {
          setAddressValidatedSwitch(false);
        } else {
          setUserInfo(data);
          setAddressValidatedSwitch(true);
        }
      });
  }, []);

  const getAddressInput = e => {
    setUserAddressInputValue(e.target.value);
  };

  return (
    <main className="payment">
      {addressValidatedSwitch ? (
        addressValidatedSwitch && (
          <PaymentUserInfo
            userInfo={userInfo}
            userAddressInputValue={userAddressInputValue}
            userAddress={userAddress}
          />
        )
      ) : (
        <GuestUserInfo
          getAddressInput={getAddressInput}
          userAddressInputValue={userAddressInputValue}
          setUserAddress={setUserAddress}
        />
      )}

      <div className="paymentPayListWrap">
        {payInfo.cart_items &&
          payInfo.cart_items.map((item, i) => {
            return (
              <PayInfo
                key={item.cart_id}
                name={item.category_name}
                amount={item.amount}
                price={item.price}
                thumb={item.thumb}
                volume={item.ml_volume}
              />
            );
          })}

        <div className="total">
          <ul className="totalInfo">
            <li className="productPriceText">상품가격</li>
            <li className="ProductPrice">
              {payInfo.cart_items &&
                payInfo.cart_items
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
              {payInfo.cart_items &&
                payInfo.cart_items
                  .reduce((total, curr) => total + curr.price, 0)
                  .toLocaleString()}
              원
            </li>
          </ul>
          <ul className="totalInfo">
            <li>현재 남은 포인트</li>
            <li>{Number(payInfo.point)}원</li>
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
