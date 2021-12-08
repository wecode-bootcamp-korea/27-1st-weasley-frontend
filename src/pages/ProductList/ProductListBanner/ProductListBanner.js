import React from 'react';
import '../ProductListBanner/ProductListBanner.scss';

function ProductListBanner() {
  return (
    <div className="banner">
      <section className="Section">
        <div className="article">
          <h2 className="title">써봐야 아니까.</h2>
          <p className="summary">클렌징폼 / 부스터 / 로션 / 선크림</p>
          <button
            className="button"
            onClick={() => {
              window.scrollTo({ top: 550, behavior: 'smooth' });
            }}
          >
            둘러보기
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductListBanner;
