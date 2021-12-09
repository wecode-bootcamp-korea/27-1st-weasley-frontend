import React from 'react';
import { API } from '../../config';
import './SubscribeCycle.scss';

function SubscribeCycle({ setDeliveryCycle, setNextDeliveryDate }) {
  const cycle = [4, 12, 16];

  const handleNextShipDate = week => {
    fetch(API.SUBSCRIBE, {
      method: 'PATCH',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
      body: week,
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE ? setNextDeliveryDate(data.MESSAGE) : alert(data.MESSAGE);
      })
      .catch(error => alert(error));
  };

  return (
    <>
      <div className="cycleTitle">정기배송 주기</div>
      <div className="cycleBtn">
        {cycle.map(week => {
          return (
            <button
              key={week.id}
              onClick={() => {
                if (window.confirm(`정기배송 주기가 ${week}주로 바뀝니다.`)) {
                  setDeliveryCycle(week);
                  handleNextShipDate(week);
                } else {
                  return;
                }
              }}
            >
              {week}주마다
            </button>
          );
        })}
      </div>
      <div className="message">
        주기를 변경하더라도 다음 결제일은 변경되지 않습니다.
      </div>
    </>
  );
}

export default SubscribeCycle;
