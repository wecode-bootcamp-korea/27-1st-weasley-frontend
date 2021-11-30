import React from 'react';
import { Link } from 'react-router-dom';

import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <main className="main">
      <section className="productDetailTop">
        <div className="productDetailImage">
          <img src="images/productdetail/cleanser.png" alt="cleanser" />
        </div>
        <div className="productDetailInfo">
          <div className="productInfoHeader">
            <span className="productTitleName">
              기름기 많은 피부를 위한
              <br />
              <strong>지성/복합성용 클렌징폼</strong>
            </span>
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
          </div>
          <form className="butAction">
            <button type="button" className="buyButton">
              7600원 | 구매하기
            </button>
          </form>
        </div>
      </section>
      <section className="productDetailMain">
        <h1 className="productDetailTitle">
          우리는 이런 변화가 더 건강한 피부를
          <br />
          만드는 길이라고 믿습니다. 그러한 믿음으로,
          <br /> 제품의 효능부터 사용감, 안전성까지
          <br /> 신경써서 만들었습니다.
        </h1>
      </section>
    </main>
  );
};

export default ProductDetail;
