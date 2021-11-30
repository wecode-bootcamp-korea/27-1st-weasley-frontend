import React, { useState } from 'react';
import Main from './Main';
import logo from './images/logo/logo-bk.svg';
import cart from '.images/navimg/bi_cart.svg';
import '../Nav/Nav.scss';

function Nav() {
  const [home, setHome] = useState(Main);

  return (
    <div className="Nav">
      <div className="navBar">
        <div className="navButton">
          <button
            type="button"
            className="homeLogo"
            onClick={() => setHome(Main)}
          >
            <img scr={logo} className="logoBlack" alt="와이즐리" />
          </button>
        </div>
        <hr />
        <main children={home} />
        <div className="navMenu">
          <ul className="navMenuUl">
            <li className="navMenuList1">
              <button className="navMenuListBtn1">핵심성분</button>
            </li>
            <li className="navMenuList2">
              <button className="navMenuListBtn1">상품보기</button>
            </li>
            <li className="navMenuList3">
              <button className="navMenuListBtn1">고객센터</button>
            </li>
          </ul>
        </div>
        <div className="navLoginCart">
          <button className="loginBtn">
            <p className="login">로그인</p>
          </button>
          <button className="cart">
            <img src={cart} className="cartImg" alt="장바구니" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
