import React, { useState, useEffect } from 'react';
import './List.scss';

function List({ list, cart, handleCart, API }) {
  const [render, setRender] = useState(true);

  useEffect(() => handleCart, [render]);

  return (
    <>
      <div className="list" key={list.product_id}>
        <div className="listLeft">
          <img src={list.thumb} />
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
            <button
              onClick={() => {
                fetch(`${API}/shops/carts?product_id=${list.product_id}`, {
                  method: 'delete',
                  headers: {
                    Authorization:
                      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
                  },
                })
                  .then(res => res.json())
                  .then(data => {
                    data.MESSAGE = 'SUCCESS' ? setRender(!render) : null;
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
                  return;
                }
                fetch(`${API}/shops/carts/${list.product_id}`, {
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
                    data.MESSAGE = 'SUCCESS' ? setRender(!render) : null;
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
                  return;
                }
                fetch(`${API}/shops/carts/${list.product_id}`, {
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
                    data.MESSAGE = 'SUCCESS' ? setRender(!render) : null;
                  })
                  .catch(error => alert(error));
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
