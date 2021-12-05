import React, { useState } from 'react';
import './SubscribeUserBox.scss';

function SubscribeUserBox({ setModal, modal }) {
  const [isItclicked, setisItClicked] = useState(false);
  return (
    <div className="userBox">
      <div className="userName">
        <div className="name">
          <span>황성재</span> <span>구독중</span>
        </div>
        <div className="modify">수정</div>
      </div>
      <div className="addressBox">
        <div className="address">서울특별시 서초구 서초동 1658-11</div>
        <div
          className={isItclicked ? 'clickOffBox' : 'clickOnBox'}
          onClick={() => {
            setModal(false);
            setisItClicked(!isItclicked);
          }}
          disabled={!modal}
        >
          정기배송 관리
        </div>
        <div
          className={isItclicked ? 'clickOnBox' : 'clickOffBox'}
          onClick={() => {
            setModal(true);
            setisItClicked(!isItclicked);
          }}
          disabled={modal}
        >
          구독중인 상품
        </div>
      </div>
    </div>
  );
}

export default SubscribeUserBox;
