import React from 'react';

import './ProductDetailContents.scss';

const ProductDetailContents = () => {
  return (
    <section className="productDetailMain">
      <div className="productDetailTitle">
        <h1 className="productDetailTitleContents">
          우리는 이런 변화가 더 건강한 피부를
          <br />
          만드는 길이라고 믿습니다. 그러한 믿음으로,
          <br /> 제품의 효능부터 사용감, 안전성까지
          <br /> 신경써서 만들었습니다.
        </h1>
      </div>
      <div className="slideBanner">
        <div className="leftWrap">
          <p className="leftTag">사용감</p>
          <p className="leftTitle">
            미끌거리지 않는
            <br /> 부드러운 거품,
            <br /> 세안 후 당기지 않는 촉촉함
          </p>
        </div>
        <div className="slideImage">
          <img
            src="images/productdetail/cleanser_sensitive_1.47732c05.png"
            alt="slide1"
          />
        </div>
      </div>
      <div className="costInfographic">
        <div className="productDetailTitle">
          <h1 className="productDetailTitleContents">
            제품에 들어가는 비용을
            <br />
            투명하게 공개합니다.
          </h1>
        </div>
        <div className="costInfo">
          <span>
            <p>제조비</p>
            <p>3,001원</p>
          </span>
          <span>
            <p>제조비</p>
            <p>3,001원</p>
          </span>
          <span>
            <p>제조비</p>
            <p>3,001원</p>
          </span>
          <span>
            <p>제조비</p>
            <p>3,001원</p>
          </span>
        </div>
        <div className="resultWrap">
          <div className="circle">오픈워크7600원</div>
          <div className="circle">시중주요브랜드25000원</div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailContents;
