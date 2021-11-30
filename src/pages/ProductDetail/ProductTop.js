import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailTop = props => {
  console.log(props);
  return (
    <section className="productDetailTop">
      <div className="productDetailImage">
        <img src="images/productimage/cleanser2.png" alt="cleanser" />
      </div>
      <div className="productDetailInfo">
        <div className="productInfoHeader">
          <span className="productTitleName">{props.name}</span>
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
            {props.price}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProductDetailTop;
