import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

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
          <li className="navMenuList">
            <Link to="/">
              <p className="navMenuItems">핵심성분</p>
            </Link>
          </li>
          <li className="navMenuList">
            <Link to="/productlist">
              <p className="navMenuItems">상품보기</p>
            </Link>
          </li>
          <li className="navMenuList">
            <Link to="/">
              <p className="navMenuItems">고객센터</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navLoginMenu">
        <Link to="/subscribe">
          <p className="navLoginItems">구독관리</p>
        </Link>
        <Link to="/login">
          <p className="navLoginItems">로그인</p>
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
