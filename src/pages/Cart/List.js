import React from 'react';
import { API } from '../../../src/config';
import './List.scss';

function List({
  list,
  increaseCartItem,
  decreaseCartItem,
  eraseCartItem,
  cart,
  setCart,
}) {
  const handleDelete = () => {
    window.confirm(`${list.category_name}을 삭제 하시겠습니까?`)
      ? fetch(`${API.CART}?id=[${list.cart_id}]`, {
          method: 'delete',
          headers: {
            Authorization: sessionStorage.getItem('access_token'),
          },
        })
          .then(res => res.json())
          .then(data => {
            data.MESSAGE === 'DELETED'
              ? eraseCartItem(list.product_id)
              : alert(data.MESSAGE);
          })
          .catch(error => alert(error))
      : setCart(cart);
  };

  const handlePlus = () => {
    if (list.amount === 99) {
      alert('제품을 더 이상 추가할수 없습니다.');
      return;
    }
    fetch(`${API.CART}/${list.cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        amount: list.amount + 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE === 'SUCCESS'
          ? increaseCartItem(list.product_id)
          : alert(data.MESSAGE);
      })
      .catch(error => alert(error));
  };

  const handleMinus = () => {
    if (list.amount === 1) {
      alert('상품을 더 이상 줄일 수 없습니다.');
      return;
    }
    fetch(`${API.CART}/${list.cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        amount: list.amount - 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE === 'SUCCESS'
          ? decreaseCartItem(list.product_id)
          : alert(data.MESSAGE);
      })
      .catch(error => alert(error));
  };

  return (
    <div className="list">
      <div className="listLeft">
        <img src={list.thumb} alt="listThumb" />
        <div className="listArticle">
          <h3>{list.category_name}</h3>
          <span>
            {Math.floor(list.ml_volume)}ml / {list.tags.join('')}용
          </span>
          <p>{Math.floor(list.price.toLocaleString())}원</p>
        </div>
      </div>

      <div className="listRight">
        <div className="cancel">
          <button onClick={handleDelete}>삭제</button>
        </div>
        <div className="order">
          <button className="minus" onClick={handleMinus}>
            -
          </button>
          <div className="count">{list.amount}</div>
          <button className="plus" onClick={handlePlus}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
