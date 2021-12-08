import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const TAG_DETAILS = {
  피부: '피부를 탄력있게 집중 케어',
  잡티: '잡티로 얼룩덜룩한 피부를 집중 케어',
  모공: '넓어진 모공을 집중 케어',
  '지성,복합성': '기름기 많은 지성/복합성 피부용',
  '건성,민감성': '건조하거나 예민한 건성/민감성 피부용',
  건성: '건조하고 당기는 건성 피부용',
  민감성: '극도로 예민한 민감성 피부용',
  복합성: '기름기와 건조함을 모두 느까는 복합성 피부용',
  지성: '기름기 많은 지성 피부용',
};

function Product({ category, index }) {
  const [imgUrl, setImgUrl] = useState(category.products[0].thumb);

  return (
    <div className="productList">
      <div className="productImg">
        <img src={imgUrl} alt="productImg" />
      </div>

      <div className="productSelectBox">
        <div className="productTitle">
          <h2>
            STEP{index + 1}. {category.name}
          </h2>
          <p>
            {Math.floor(category.ml_volume)}ml /{' '}
            {Math.floor(category.price).toLocaleString()}원
          </p>
        </div>

        <div className="productType">
          {category.products.map(function (list) {
            return (
              <div
                key={list.id}
                className="categoryType"
                onClick={() => {
                  setImgUrl(list.thumb);
                }}
              >
                <div>{TAG_DETAILS[list.tags.join()]}</div>
                <div className="typeSelectButton">
                  <Link to={`/productdetails/${list.id}`}>
                    <button>자세히</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
