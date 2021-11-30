import React, { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

const ProductDetailTop = ({
  price,
  detail,
  count,
  countUpEvent,
  countDownEvent,
}) => {
  // console.log('id', id);
  console.log(detail);
  const { id } = useParams();
  console.log(id);
  const i = Number(id);

  return (
    <section className="productDetailTop">
      <div className="productDetailImage">
        <img src="images/productimage/cleanser2.png" alt="cleanser" />
      </div>
      <div className="productDetailInfo">
        <div className="productInfoHeader">
          <span className="productTitleName">데이터바인딩제목</span>
          <span className="productInfoOptions">
            <Link to="#">타입변경</Link>
          </span>
        </div>
        <div className="productInfoBottom">
          <span className="reviewAverageView">
            <span className="reviewAverageViewCount">별그림</span>
            <span className="reviewAverageViewScore">4.4점</span>
          </span>
          <span className="capacity">180mL (8주 사용 분량)</span>
          <div className="countUp">
            <span>
              <input type="button" onClick={countDownEvent} value="-" />
            </span>
            <span className="productCount">{count}</span>
            <span>
              <input type="button" onClick={countUpEvent} value="+" />
            </span>
          </div>
        </div>
        <form className="buttonAction">
          <button type="button" className="buyButton">
            구독하기
          </button>
          <button type="button" className="buyButton">
            구매하기
          </button>
          <button type="button" className="buyButton">
            장바구니 담기
          </button>
        </form>
        <div className="priceTab">
          <span className="productPrice">6500</span>
          <span>원</span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailTop;
