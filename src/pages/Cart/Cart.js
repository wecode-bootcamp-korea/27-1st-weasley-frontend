import React, { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart';
import List from './List';
import Price from './Price';
import { API } from '../../../src/config';
import '../Cart/Cart.scss';

function Cart() {
  const [cart, setCart] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    fetch(API.CART, {
      method: 'get',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.RESULT.cart_items.length === 0) {
          setEmpty(true);
        } else {
          setCart(data.RESULT.cart_items);
        }
      });
  }, []);

  const increaseCartItem = targetIndex => {
    const newCartItem = {
      ...cart[targetIndex],
      amount: cart[targetIndex].amount + 1,
    };
    const newCart = cart.map((item, itemIndex) => {
      if (itemIndex === targetIndex) {
        return newCartItem;
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const decreaseCartItem = targetIndex => {
    const newCartItem = {
      ...cart[targetIndex],
      amount: cart[targetIndex].amount - 1,
    };

    const newCart = cart.map((item, itemIndex) => {
      if (itemIndex === targetIndex) {
        return newCartItem;
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const erase = targetIndex => {
    const newCartItem = {
      ...cart.filter(targetIndex => targetIndex !== list.id),
    };
    const newCart = cart.map((item, itemIndex) => {
      if (itemIndex === targetIndex) {
        return newCartItem;
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  return (
    <>
      <nav>네브바</nav>

      {empty ? (
        <EmptyCart />
      ) : (
        <main className="cartMain">
          <div className="title">장바구니</div>

          {cart.map(function (list, index) {
            return (
              <List
                setEmpty={setEmpty}
                erase={() => erase(index)}
                setCart={setCart}
                cart={cart}
                list={list}
                API={API}
                increaseCartItem={() => increaseCartItem(index)}
                decreaseCartItem={() => decreaseCartItem(index)}
                key={list.cart_id}
              />
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
