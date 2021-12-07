import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ category }) {
  const [imgUrl, setImgUrl] = useState(category.products_list[0].img);

  return (
    <div className="product">
      <div className="productImg">
        <img src={imgUrl} alt="productImg" />
      </div>

      <div className="productSelect">
        <div className="productTitle">
          <h2>
            STEP{category.id}. {category.name}
          </h2>
          <p>
            {category.ml_volume}ml / {category.price}원
          </p>
        </div>

        <div className="productType">
          {category.products_list.map(function (list) {
            return (
              <div
                key={list.id}
                className="type"
                onClick={() => {
                  setImgUrl(list.img);
                }}
              >
                <div>{list.outer_name}</div>
                <div className="typeBtn">
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
