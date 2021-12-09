import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscribeUserBox from './SubscribeUserBox';
import SubscribeShipping from './SubscribeShipping';
import SubscribeCycle from './SubscribeCycle';
import SubscribeProduct from './SubscribeProduct';
import { API } from '../../config';
import './Subscribe.scss';

function Subscribe() {
  const [productModal, setproductModal] = useState(false);

  const [deliveryCycle, setDeliveryCycle] = useState('');

  const [subscribeData, setSubscribeData] = useState([]);

  const [nextDeliveryDate, setNextDeliveryDate] = useState();

  const [isItNowSubscribing, setIsItNowSubscribing] = useState('구독중');

  const [nextPurchaseDate, setNextPurchaseDate] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.SUBSCRIBE, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.MESSAGE === 'INVALID_TOKEN') {
          alert('로그인이 필요합니다!');
          navigate('/signin');
          return;
        }
        if (data.RESULT.length === 0) {
          alert('구독중인 상품이 없습니다. 메인으로 이동합니다');
          navigate('/');
        } else {
          setSubscribeData(data.RESULT);
          setNextDeliveryDate(data.RESULT[0]?.next_ship_date);
          setDeliveryCycle(`${data.RESULT[0]?.interval}주 마다`);
          setNextPurchaseDate(data.RESULT[0]?.next_purchase_date);
        }
      });
  }, []);

  return (
    <main className="subscribeBox">
      <div className="subscribe">
        <SubscribeUserBox
          setModal={setproductModal}
          modal={productModal}
          subscribeData={subscribeData}
          isItNowSubscribing={isItNowSubscribing}
        />
        <SubscribeShipping
          nextPurchaseDate={nextPurchaseDate}
          deliveryCycle={deliveryCycle}
          nextDeliveryDate={nextDeliveryDate}
        />
      </div>

      <div className="option">
        <SubscribeCycle
          setDeliveryCycle={setDeliveryCycle}
          setNextDeliveryDate={setNextDeliveryDate}
        />
        {productModal ? (
          <SubscribeProduct
            setNextPurchaseDate={setNextPurchaseDate}
            setDeliveryCycle={setDeliveryCycle}
            subscribeData={subscribeData}
            setSubscribeData={setSubscribeData}
            setIsItNowSubscribing={setIsItNowSubscribing}
            setNextDeliveryDate={setNextDeliveryDate}
          />
        ) : null}
      </div>
    </main>
  );
}

export default Subscribe;
