import React, { useEffect, useState } from 'react';
import SubscribeUserBox from './SubscribeUserBox';
import SubscribeShipping from './SubscribeShipping';
import SubscribeCycle from './SubscribeCycle';
import SubscribeProduct from './SubscribeProduct';
import './Subscribe.scss';

function Subscribe() {
  const [productModal, setproductModal] = useState(false);

  const [deliveryCycle, setDeliveryCycle] = useState('8');

  const [subscribeData, setSubscribeData] = useState([]);

  useEffect(() => {
    fetch('구독관리API', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setSubscribeData(data);
      });
  }, []);

  return (
    <main className="subscribeBox">
      <div className="subscribe">
        <SubscribeUserBox setModal={setproductModal} />
        <SubscribeShipping deliveryCycle={deliveryCycle} />
      </div>

      <div className="option">
        <SubscribeCycle setDeliveryCycle={setDeliveryCycle} />
        {productModal ? <SubscribeProduct /> : null}
      </div>
    </main>
  );
}

export default Subscribe;
