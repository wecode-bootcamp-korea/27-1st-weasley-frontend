import React, { useEffect, useState } from 'react';
import SubscribeUserBox from './SubscribeUserBox';
import SubscribeShipping from './SubscribeShipping';
import SubscribeCycle from './SubscribeCycle';
import SubscribeProduct from './SubscribeProduct';
import { API } from '../../config';
import './Subscribe.scss';

function Subscribe() {
  const [productModal, setproductModal] = useState(false);

  const [deliveryCycle, setDeliveryCycle] = useState('8');

  const [subscribeData, setSubscribeData] = useState([]);

  const [nextDeliveryDate, setNextDeliveryDate] = useState();

  const [isItNowSubscribing, setIsItNowSubscribing] = useState('구독중');

  const [nextPurchaseDate, setNextPurchaseDate] = useState();

  useEffect(() => {
    fetch(API.SUBSCRIBE, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSubscribeData(data.RESULT);
        setNextDeliveryDate(data.RESULT[0].next_ship_date);
        setDeliveryCycle(`${data.RESULT[0].interval}주 마다`);
        setNextPurchaseDate(data.RESULT[0].next_purchase_date);
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
