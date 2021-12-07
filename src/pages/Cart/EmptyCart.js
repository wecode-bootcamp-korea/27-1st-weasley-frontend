import React from 'react';
import Nav from '../../components/Nav/Nav';
import './EmptyCart.scss';

function EmptyCart() {
  return (
    <>
      <Nav />
      <main className="emptyCartMain">
        <div className="title">장바구니 </div>
        <div className="summary">로딩중...😥</div>
        <div className="emptyOrderBtn">
          <button disabled="true">주문하기</button>
        </div>
      </main>
    </>
  );
}

export default EmptyCart;
