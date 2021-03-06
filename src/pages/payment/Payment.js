import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';

import PayInfo from './PayInfo';
import GuestUserInfo from './GuestUserInfo';
import PaymentUserInfo from './PaymentUserInfo';
import './Payment.scss';
import { API } from '../../config.js';

const Payment = () => {
  const [userAddressInputValue, setUserAddressInputValue] = useState('');
  const [userAddress, setUserAddress] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [payInfo, setPayInfo] = useState([]);
  const [addressValidatedSwitch, setAddressValidatedSwitch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.CART, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.MESSAGE === 'INVALID_TOKEN') {
          alert('로그인이 필요합니다!');
          navigate('/signin');
          return;
        }
        setPayInfo(data.RESULT);
      });
  }, []);
  useEffect(() => {
    fetch(API.USER_ADDRESS, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('1번째', data.RESULT);

        if (data.RESULT.length) {
          setUserInfo(data.RESULT);
          setAddressValidatedSwitch(true);
        } else {
          setAddressValidatedSwitch(false);
        }
      });
  }, []);
  console.log('payment 페이지', userInfo);

  const getAddressInput = e => {
    setUserAddressInputValue(e.target.value);
  };

  return (
    <main className="payment">
      {addressValidatedSwitch ? (
        <PaymentUserInfo
          userInfo={userInfo}
          userAddressInputValue={userAddressInputValue}
          userAddress={userAddress}
        />
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
                  .reduce((total, curr) => total + curr.price * curr.amount, 0)
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
                  .reduce((total, curr) => total + curr.price * curr.amount, 0)
                  .toLocaleString()}
              원
            </li>
          </ul>
          <ul className="totalInfo">
            <li>현재 남은 포인트</li>
            <li>{Number(payInfo.point).toLocaleString()}원</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Payment;
