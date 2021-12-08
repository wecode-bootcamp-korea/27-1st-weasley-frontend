import React, { useState, useEffect } from 'react';
import IngredientTitle from './IngredientTitle';
import IngredientList from './IngredientList';
import './Ingredient.scss';

function Ingredient() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('/data/ingredientData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setIngredients(data);
      });
  }, []);

  return (
    <>
      <IngredientTitle />
      {ingredients.map(product => {
        return <IngredientList key={product.id} product={product} />;
      })}
    </>
  );
}

export default Ingredient;
