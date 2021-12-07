import React from 'react';
import Nav from '../../components/Nav/Nav';
import './EmptyCart.scss';

function EmptyCart() {
  return (
    <>
      <Nav />
      <main className="emptyCartMain">
        <div className="title">장바구니 </div>
        <div className="summary">장바구니가 텅 비었어요...😥</div>
        <div className="emptyOrderBtn">
          <button disabled="true">주문하기</button>
        </div>
      </main>
    </>
  );
}

export default EmptyCart;
