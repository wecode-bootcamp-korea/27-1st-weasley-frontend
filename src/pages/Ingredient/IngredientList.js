import React, { useState } from 'react';
import './IngredientList.scss';

const SLIDE_LEFT_DIRECTION = 'left';
const SLIDE_RIGHT_DIRECTION = 'right';

function IngredientList({ product }) {
  const [xPos, setXpos] = useState(0);

  const clickLeftorRight = direction => {
    direction === SLIDE_LEFT_DIRECTION
      ? setXpos(x => x + 100)
      : setXpos(x => x - 100);
    if (xPos === 300 || xPos === -600) return setXpos(0);
  };
  return (
    <>
      <h3 className="ingredientCategory">클렌징폼</h3>
      <button
        className="leftButton ingredientBtn"
        onClick={() => clickLeftorRight(SLIDE_LEFT_DIRECTION)}
      >
        ⇦
      </button>
      <button
        className="rightButton ingredientBtn"
        onClick={() => clickLeftorRight(SLIDE_RIGHT_DIRECTION)}
      >
        ⇨
      </button>
      <div className="container">
        <ul
          className="ingredientList"
          style={{
            transform: `translateX(${xPos}px)`,
          }}
        >
          {product.products_list.map(ingredient => {
            return (
              <li
                key={ingredient.id}
                className="ingredient"
                style={{ backgroundImage: 'url(' + ingredient.img + ')' }}
              >
                <p className="type">
                  {ingredient.type}
                  <h4 className="name">{ingredient.name}</h4>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default IngredientList;
