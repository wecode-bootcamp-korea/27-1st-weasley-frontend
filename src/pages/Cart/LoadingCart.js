import React from 'react';
import './LoadingCart.scss';

function LoadingCart() {
  return (
    <>
      <main className="loadingCartMain">
        <div className="title">장바구니 </div>
        <div className="summary">로딩중...🥳</div>
        <div className="loadingOrderBtn">
          <button disabled="true">주문하기</button>
        </div>
      </main>
    </>
  );
}

export default LoadingCart;
