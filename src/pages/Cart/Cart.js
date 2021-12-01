import React, { useState, useEffect } from 'react';
import '../Cart/Cart.scss';

function Cart() {
  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCart(data);
      });
  }, []);

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState();
  return (
    <>
      <nav>네브바</nav>

      <main className="cartMain">
        <div className="title">장바구니</div>

        {cart.map(function (list, i) {
          return (
            <div className="list">
              <div className="listLeft">
                <img src={list.img} />
                <div className="listArticle">
                  <h3>{list.name}</h3>
                  <span>
                    {list.ml_volume}ml / {list.tag}
                  </span>
                  <p>{list.price}</p>
                </div>
              </div>

              <div className="listRight">
                <div className="cancel">
                  <button>삭제</button>
                </div>
                <div className="order">
                  <div className="minus">-</div>
                  <div className="count">{list.count}</div>
                  <div className="plus">+</div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="total">
          <div className="fee">
            <p>배송비</p>
            <p>무료배송</p>
          </div>
          <div className="sum">
            <p>총 결제금액</p>
            <p>10,100원</p>
          </div>
        </div>

        <div className="orderBtn">
          <button>주문하기</button>
        </div>
      </main>
    </>
  );
}

export default Cart;
