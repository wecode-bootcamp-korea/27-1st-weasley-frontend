import React from 'react';
import './List.scss';

function List({ list, API, increaseCartItem, decreaseCartItem, erase }) {
  const handleDelete = () => {
    fetch(`${API}/shops/carts/${list.cart_id}`, {
      method: 'delete',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE = 'SUCCESS' ? erase(list.id) : null;
      })
      .catch(error => alert(error));
  };

  const handlePlus = () => {
    if (list.amount === 99) {
      alert('제품을 더 이상 추가할수 없습니다.');
      return;
    }
    fetch(`${API}/shops/carts/${list.cart_id}`, {
      method: 'patch',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
      body: JSON.stringify({
        amount: list.amount + 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE = 'SUCCESS' ? increaseCartItem(list.id) : null;
      })
      .catch(error => alert(error));
  };

  const handleMinus = () => {
    if (list.amount === 1) {
      alert('상품을 더 이상 줄일 수 없습니다.');
      return;
    }
    fetch(`${API}/shops/carts/${list.cart_id}`, {
      method: 'patch',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
      body: JSON.stringify({
        amount: list.amount - 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE = 'SUCCESS' ? decreaseCartItem(list.id) : null;
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
