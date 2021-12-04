import React, { useEffect, useState } from 'react';
import './Subscribe.scss';

function Subscribe() {
  return (
    <main className="subscribeBox">
      <div className="subscribe">
        <div className="user">
          <div className="userName">
            <div className="name">
              <span>황성재</span> <span>구독중</span>
            </div>
            <div className="modify">수정</div>
          </div>
          <div className="addressBox">
            <div className="address">서울특별시 서초구 서초동 1658-11</div>
            <div className="clickOffBox">정기배송 관리</div>
            <div className="clickOnBox">구독중인 상품</div>
          </div>
        </div>

        <div className="shipping">
          <div className="title">⬅️ 다음 결제일 및 주기 관리</div>
          <div className="shippingDate">
            <div className="manageDate">
              <h2>다음 결제일</h2>
              <p>1월 28일 </p>
            </div>
            <div className="manageDate">
              <h2>정기배송 주기</h2>
              <p>8주 마다</p>
            </div>
            <div className="manageDate">
              <h2>다음 배송일</h2>
              <p>3월 25일</p>
            </div>
          </div>
        </div>
      </div>

      <div className="option">
        <div className="title">정기배송 주기</div>
        <div className="btn">
          <button>4주마다</button>
          <button>12주마다</button>
          <button>16주마다</button>
        </div>
        <div className="message">
          주기를 변경하더라도 다음 결제일은 변경되지 않습니다.
        </div>
        <div className="title productTilte">구독중인 상품</div>
        <div className="product">
          <div>
            <img src="images/productdetail/cleanser1.png" />
          </div>
          <div>
            <img src="images/productdetail/cleanser2.png" />
          </div>
          <div>
            <img src="images/productdetail/cleanser2.png" />
          </div>
          <div>
            <img src="images/productdetail/cleanser2.png" />
          </div>
          <div>
            <img src="images/productdetail/cleanser2.png" />
          </div>
        </div>
      </div>

      <div className="manage"></div>
    </main>
  );
}

export default Subscribe;
