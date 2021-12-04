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
  const [sub, setSub] = useState(false);

  useEffect(() => {
    fetch('/data/payment/paymentData.json')
      .then(res => res.json())
      .then(data => {
        setPayInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/payment/userInfo.json')
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      });
  }, []);

  const getAddressInput = e => {
    setUserAddressInputValue(e.target.value);
  };

  const handleAddress = e => {
    setUserAddress([...userAddress, userAddressInputValue]);
    setAddressValidatedSwitch(true);
  };

  return (
    <main className="payment">
      {addressValidatedSwitch ? (
        <GuestUserInfo
          getAddressInput={getAddressInput}
          userAddressInputValue={userAddressInputValue}
          setUserAddress={setUserAddress}
          handleAddress={handleAddress}
        />
      ) : (
        userInfo.user_info &&
        userInfo.user_info.map(item => {
          return (
            <PaymentUserInfo
              key={item.id}
              userName={item.userName}
              address={item.address}
              cellphone={item.cellphone}
              handleAddress={handleAddress}
              userAddressInputValue={userAddressInputValue}
              userAddress={userAddress}
            />
          );
        })
      )}

      <div className="paymentPayListWrap">
        {payInfo.cart_items &&
          payInfo.cart_items.map((item, i) => {
            return (
              <PayInfo
                key={item.id}
                name={item.name}
                price={item.price}
                type={item.type}
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
            <li>{payInfo.price}</li>
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
