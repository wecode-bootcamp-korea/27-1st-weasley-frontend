import React, { useState } from 'react';
import './IngredientList.scss';

function IngredientList({ product }) {
  const [xPos, setXpos] = useState(0);

  const onClick = direction => {
    direction === 'left' ? setXpos(x => x + 100) : setXpos(x => x - 100);
    xPos === 300 && setXpos(0);
    xPos === -600 && setXpos(0);
  };
  return (
    <>
      <h3 className="ingredientCategory">클렌징폼</h3>
      <button
        className="leftButton ingredientBtn"
        onClick={() => onClick('left')}
      >
        ⇦
      </button>
      <button
        className="rightButton ingredientBtn"
        onClick={() => onClick('right')}
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
