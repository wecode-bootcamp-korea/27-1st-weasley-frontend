import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './SubscribeCycle.scss';

function SubscribeCycle({ setDeliveryCycle, setNextDeliveryDate }) {
  const cycle = [4, 12, 16];

  const navigate = useNavigate();

  const handleNextShipDate = week => {
    fetch(API.SUBSCRIBE, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({
        interval: week,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.MESSAGE === 'INVALID_TOKEN') {
          alert('로그인이 필요합니다!');
          navigate('/signin');
          return;
        }
        data.MESSAGE === 'SUCCESS'
          ? setNextDeliveryDate(data.RESULT)
          : alert(data.MESSAGE);
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
                  setDeliveryCycle(`${week}주 마다`);
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
