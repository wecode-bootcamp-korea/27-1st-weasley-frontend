import React, { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart';
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
          alert('장바구니가 비었습니다.');
          setEmpty(true);
        } else {
          setCart(data);
        }
      });
  }, []);

  const [cart, setCart] = useState([]);

  const [empty, setEmpty] = useState(false);

  console.log(cart);
  return (
    <>
      <nav>네브바</nav>
      {empty ? (
        <EmptyCart />
      ) : (
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
                    <button
                      onClick={() => {
                        fetch('data/cartData.json', {
                          method: 'delete',
                          body: JSON.stringify({
                            id: list.id,
                          }),
                        })
                          .then(res => res.json())
                          .then(data => {
                            data = 'success'
                              ? setCart(
                                  cart.filter(cartList => {
                                    return cartList.id !== list.id;
                                  })
                                )
                              : null;
                          })
                          .catch(error => alert(error));
                      }}
                    >
                      삭제
                    </button>
                  </div>
                  <div className="order">
                    <div
                      className="minus"
                      onClick={() => {
                        if (list.amount === 1) {
                          alert('상품을 더 이상 줄일 수 없습니다.');
                        }
                        fetch('data/cartData.json', {
                          method: 'patch',
                          body: JSON.stringify({
                            id: list.id,
                            amount: list.amount - 1,
                          }),
                        })
                          .then(res => res.json())
                          .then(data => {
                            data = 'success' ? (list.amount += 1) : null;
                          })
                          .catch(error => alert(error));
                      }}
                    >
                      -
                    </div>
                    <div className="count">{list.amount}</div>
                    <div
                      className="plus"
                      onClick={() => {
                        if (list.amount === 99) {
                          alert('제품을 더 이상 추가할수 없습니다.');
                        }
                        fetch('data/cartData.json', {
                          method: 'patch',
                          body: JSON.stringify({
                            id: list.id,
                            amount: list.amount + 1,
                          }),
                        })
                          .then(res => res.json())
                          .then(data => {
                            data = 'success' ? (list.amount += 1) : null;
                          })
                          .catch(error => alert(error));
                      }}
                    >
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
                  .reduce((total, curr) => total + curr.price * curr.amount, 0)
                  .toLocaleString()}
                원
              </p>
            </div>
          </div>

          <div className="orderBtn">
            <button>주문하기</button>
          </div>
        </main>
      )}
    </>
  );
}

export default Cart;
