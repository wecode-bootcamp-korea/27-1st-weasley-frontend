import React, { useState } from 'react';
import './IngredientList.scss';
// import IngredientTitle from './IngredientTitle';

function IngredientList() {
  const [xPos, setXpos] = useState(0);

  const onClick = direction => {
    direction === 'left' ? setXpos(x => x - 100) : setXpos(x => x + 100);
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
          style={{ transform: `translateX(${xPos}px)` }}
        >
          <li className="ingredient">
            <p className="type">
              지성/복합성 피부용
              <h4 className="name">소듐코코일알라니네이트</h4>
            </p>
          </li>
          <li className="ingredient">
            <p className="type">
              지성/복합성 피부용
              <h4 className="name">소듐코코일알라니네이트</h4>
            </p>
          </li>
          <li className="ingredient">
            <p className="type">
              지성/복합성 피부용
              <h4 className="name">소듐코코일알라니네이트</h4>
            </p>
          </li>
          <li className="ingredient">
            <p className="type">
              지성/복합성 피부용
              <h4 className="name">소듐코코일알라니네이트</h4>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default IngredientList;
