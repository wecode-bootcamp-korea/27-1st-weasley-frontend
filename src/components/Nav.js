import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="navLogo">
        <Link to="/">
          <img src="./images/logo/logo-bk.svg" alt="logo" classNAme="logo" />
        </Link>
      </div>
      <div className="navMenu">
        <ul className="navMenuUl">
          <li className="navMenuList1">
            <Link to="/">
              <p className="navMenuItems">핵심성분</p>
            </Link>
          </li>
          <li className="navMenuList2">
            <Link to="/productlist">
              <p className="navMenuItems">상품보기</p>
            </Link>
          </li>
          <li className="navMenuList3">
            <Link to="/">
              <p className="navMenuItems">고객센터</p>
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
  );
}

export default Nav;
