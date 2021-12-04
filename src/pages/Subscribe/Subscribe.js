import React, { useEffect, useState } from 'react';
import SubscribeUserBox from './SubscribeUserBox';
import SubscribeShipping from './SubscribeShipping';
import SubscribeCycle from './SubscribeCycle';
import SubscribeProduct from './SubscribeProduct';
import './Subscribe.scss';

function Subscribe() {
  const [productModal, setproductModal] = useState(false);

  return (
    <main className="subscribeBox">
      <div className="subscribe">
        <SubscribeUserBox setModal={setproductModal} />
        <SubscribeShipping />
      </div>

      <div className="option">
        <SubscribeCycle />
        {productModal ? <SubscribeProduct /> : null}
      </div>
    </main>
  );
}

export default Subscribe;
