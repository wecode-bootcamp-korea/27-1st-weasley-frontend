import React, { useState, useEffect } from 'react';
import '../Cart/Cart.scss';
//http://10.58.0.114:8000/shops/carts
function Cart() {
  useEffect(() => {
    fetch('data/cartData.json', {
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.hGDrxyBzszHTxOhDVybkkwg5G9caMFrvv4h2fPZxzJA',
      },
    })
      .then(res => res.json())
      .then(data => {
        //data.RESULT.length
        if (data.length === 0) {
          alert('장바구니가 비어있습니다. 홈으로 이동합니다.');
          window.location.replace('http://localhost:3005/');
        } else {
          setCart(data);
        }
      });
  }, []);

  function handlePlus() {
    fetch('장바구니 api', {
      method: 'patch',
      body: JSON.stringify({
        id: 'id',
        // amount: amount + 1,
      }),
    })
      .then(res => res.json('/'))
      .then(data => {
        setCart(data);
      })
      .catch(error => alert(error));
  }

  function handleMinus() {
    fetch('장바구니 api', {
      method: 'post',
      body: JSON.stringify({
        product_id: 'id',
        value: 'minus',
      }),
    })
      .then(res => res.json())
      .then(data => {
        setCart(data);
      })
      .catch(error => alert(error));
  }

  function handleDelete() {
    fetch('장바구니 api', {
      method: 'delete',
      body: JSON.stringify({
        product_id: 'id',
      }),
    })
      .then(res => res.json())
      .then(data => {
        setCart(data);
      })
      .catch(error => alert(error));
  }

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
                <img src={list.thumb} />
                <div className="listArticle">
                  <h3>{list.category_name}</h3>
                  <span>
                    {list.ml_volume}ml / {list.tags.join('')}용
                  </span>
                  <p>{list.price.toLocaleString()}원</p>
                </div>
              </div>

              <div className="listRight">
                <div className="cancel">
                  <button onClick={handleDelete}>삭제</button>
                </div>
                <div className="order">
                  <div className="minus" onClick={handleMinus}>
                    -
                  </div>
                  <div className="count">{list.amount}</div>
                  <div className="plus" onClick={handlePlus}>
                    +
                  </div>
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
            <p>
              {cart
                .reduce((total, curr) => total + curr.price * curr.count, 0)
                .toLocaleString()}
              원
            </p>
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
