import React from 'react';
import './IngredientList.scss';
import IngredientTitle from './IngredientTitle';

function IngredientList() {
  return (
    <>
      <h3 className="ingredientCategory">클렌징폼</h3>
      <ul className="ingredientList">
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
    </>
  );
}

export default IngredientList;
