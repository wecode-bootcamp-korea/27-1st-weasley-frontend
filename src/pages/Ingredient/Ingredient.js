import React from 'react';
import IngredientTitle from './IngredientTitle';
// import Nav from '../../components/Nav';
import './Ingredient.scss';
import IngredientList from './IngredientList';

function Ingredient() {
  return (
    <>
      <IngredientTitle />
      {[1, 2, 3, 4].map(function (list) {
        return <IngredientList />;
      })}
      {/* <div className="container">
        <div className="inner">
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/cleanser/oily%26combination.png" />
        </div>
        <div className="inner">
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/cleanser/oily%26combination.png" />
        </div>
        <div className="inner">
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/cleanser/dry.png" />
        </div>
        <div className="inner">
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/cleanser/oily%26combination.png" />
        </div>
      </div> */}

      {/* <div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/booster/poreControl.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/booster/brightening.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/booster/brightening.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/booster/poreControl.png" />
        </div>
      </div>

      <div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/lotion/sensitive.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/sunscreen/light.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/lotion/sensitive.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/sunscreen/light.png" />
        </div>
      </div>

      <div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/lotion/oily.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/sunscreen/cream.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/sunscreen/cream.png" />
        </div>
        <div>
          <img src="https://wiselystatic.s3.amazonaws.com/OPENWORK/prod/assets/images/core-ingredient/lotion/oily.png" />
        </div>
      </div> */}
    </>
  );
}

export default Ingredient;
