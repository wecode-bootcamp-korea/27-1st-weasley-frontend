import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ category, index }) {
  const [imgUrl, setImgUrl] = useState(category.products[0].thumb);

  // const tagsDetail = {
  //   "피부" : "피부를 탄력있게 집중 케어",
  //   "잡티" : "잡티로 얼룩덜룩한 피부를 집중 케어",
  //   "모공": "넓어진 모공을 집중 케어",
  //   ""

  // };

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
            {category.ml_volume}ml / {category.price}원
          </p>
        </div>

        <div className="productType">
          {category.products.map(function (list) {
            return (
              <div
                key={list.id}
                className="categoryType"
                onClick={() => {
                  setImgUrl(list.img);
                }}
              >
                <div>{list.tags}</div>
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
