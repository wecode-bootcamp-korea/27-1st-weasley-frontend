import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Nav.scss';

function Nav() {
  return (
    <div className="Nav">
      <div className="navBar">
        <div className="navLogo">
          <Link to="/">
            <img src="./images/logo/logo-bk.svg" alt="logo" classNAme="logo" />
          </Link>
        </div>
        <div className="navMenu">
          <ul className="navMenuUl">
            <li className="navMenuList1">
              <Link to="/">
                <p className="navMenuIngredient">핵심성분</p>
              </Link>
            </li>

            <li className="navMenuList2">
              <Link to="/productlist">
                <p className="navMenuProduct">상품보기</p>
              </Link>
            </li>
            <li className="navMenuList3">
              <Link to="/">
                <p className="navMenuCustomer">고객센터</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navLoginCart">
          <Link to="login">
            <p className="login">로그인</p>
          </Link>
          <Link to="#">
            <img
              src="./images/navimg/bi_cart.svg"
              className="cartImg"
              alt="장바구니"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
