import React, { useState, useEffect } from 'react';
import { API } from '../../../src/config';
import EmptyCart from './EmptyCart';
import LoadingCart from './LoadingCart';
import List from './List';
import Price from './Price';
import '../Cart/Cart.scss';
import { Link } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
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

  const eraseCartItem = productId => {
    const filteredCart = cart.filter(item => {
      return item.product_id !== productId;
    });

    if (filteredCart.length === 0) {
      setEmpty(true);
    } else setCart(filteredCart);
  };

  const handleDeleteAll = () => {
    let lists_id = cart.map(list => {
      return list.cart_id;
    });

    fetch(`${API.CART}?id=${JSON.stringify(lists_id)}`, {
      method: 'delete',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE === 'DELETED' ? setEmpty(true) : alert(data.MESSAGE);
      })
      .catch(error => alert(error));
  };

  return (
    <div>
      {empty ? (
        <EmptyCart />
      ) : loading ? (
        <LoadingCart />
      ) : (
        <main className="cartMain">
          <div className="title">장바구니</div>
          <button
            className="removeAll"
            onClick={() => {
              window.confirm('전체삭제 하시겠습니까?')
                ? handleDeleteAll()
                : setCart(...cart);
            }}
          >
            전체삭제
          </button>
          {cart.map(function (list, index) {
            return (
              <List
                setEmpty={setEmpty}
                eraseCartItem={() => eraseCartItem(list.product_id)}
                list={list}
                increaseCartItem={() => increaseCartItem(index)}
                decreaseCartItem={() => decreaseCartItem(index)}
                key={list.product_id}
                cart={cart}
                setCart={setCart}
              />
            );
          })}

          <Price cart={cart} />

          <div className="orderBtn">
            <Link to="/payment">
              <button>주문하기</button>
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}

export default Cart;
