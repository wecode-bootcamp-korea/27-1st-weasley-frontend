import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Product/Product.scss';

function Product(props) {
  const [imgUrl, setImgUrl] = useState(props.category.products_list[0].img);

  return (
    <div className="product">
      <div className="productImg">
        <img src={imgUrl} />
      </div>

      <div className="productSelect">
        <div className="productTitle">
          <h2>
            STEP{props.i}. {props.category.name}
          </h2>
          <p>
            {props.category.ml_volume}ml / {props.category.price}원
          </p>
        </div>

        <div className="productType">
          {props.category.products_list.map(function (list, i) {
            return (
              <div
                className="type"
                onClick={() => {
                  setImgUrl(list.img);
                }}
              >
                <div>{list.outer_name}</div>
                <div className="typeBtn">
                  <Link to={`/productdetail/${list.id}`}>
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
