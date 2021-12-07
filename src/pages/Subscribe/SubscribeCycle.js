import React from 'react';
import './SubscribeCycle.scss';

function SubscribeCycle({ setDeliveryCycle }) {
  const cycle = [4, 12, 16];

  return (
    <>
      <div className="cycleTitle">정기배송 주기</div>
      <div className="btn">
        {cycle.map(week => {
          return (
            <button
              key={week.id}
              onClick={() => {
                if (window.confirm(`정기배송 주기가 ${week}주로 바뀝니다.`)) {
                  setDeliveryCycle(week);

                  // useEffect(() => {
                  //   fetch('구독관리API', {
                  //     method: 'patch',
                  //   })
                  //     .then(response => response.json())
                  //     .then(data => {
                  //       data.message = 'success'
                  //         ? useEffect(() => {
                  //             fetch('구독관리API', {
                  //               method: 'GET',
                  //             })
                  //               .then(response => response.json())
                  //               .then(data => {
                  //                 setNextDeliveryDate(data[0].nextdelivery);
                  //               });
                  //           }, [])
                  //         : null;
                  //     });
                  // }, []);
                  // 백엔드한테 patch요청으로 week바꼈다고 보내기 && 다음배송일 랜더링해주기
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
