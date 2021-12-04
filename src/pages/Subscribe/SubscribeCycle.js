import React from 'react';
import './SubscribeCycle.scss';

function SubscribeCycle() {
  const cycle = [4, 12, 16];
  return (
    <>
      <div className="cycleTitle">정기배송 주기</div>
      <div className="btn">
        {cycle.map(week => {
          return <button>{week}주마다</button>;
        })}
      </div>
      <div className="message">
        주기를 변경하더라도 다음 결제일은 변경되지 않습니다.
      </div>
    </>
  );
}

export default SubscribeCycle;
