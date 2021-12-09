import React from 'react';
import './EmptyCart.scss';

function EmptyCart() {
  return (
    <main className="emptyCartMain">
      <div className="title">장바구니 </div>
      <div className="summary">장바구니가 비었습니다...😥</div>
      <div className="emptyOrderBtn">
        <button disabled="true">주문하기</button>
      </div>
    </main>
  );
}

export default EmptyCart;
