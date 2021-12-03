import React, { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart';
import List from './List';
import '../Cart/Cart.scss';
import Price from './Price';

const API = 'http://10.58.3.129:8000';

//http://10.58.0.114:8000/shops/carts
function Cart() {
  const [cart, setCart] = useState([]);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    fetch(`${API}/shops/carts`, {
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.RESULT);
        if (data.RESULT.length === 0) {
          alert('장바구니가 비었습니다.');
          setEmpty(true);
        } else {
          setCart(data.RESULT);
        }
      });
  }, []);

  const handleCart = useEffect(() => {
    fetch(`${API}/shops/carts`, {
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json())
      .then(data => {
        //data.RESULT.length
        if (data.RESULT.length === 0) {
          alert('장바구니가 비었습니다.');
          setEmpty(true);
        } else {
          setCart(data.RESULT);
        }
      });
  }, []);

  return (
    <>
      <nav>네브바</nav>
      {empty ? (
        <EmptyCart />
      ) : (
        <main className="cartMain">
          <div className="title">장바구니</div>

          {cart.map(function (list) {
            return (
              <List cart={cart} list={list} handleCart={handleCart} API={API} />
            );
          })}

          <Price cart={cart} />

          <div className="orderBtn">
            <button>주문하기</button>
          </div>
        </main>
      )}
    </>
  );
}

export default Cart;
