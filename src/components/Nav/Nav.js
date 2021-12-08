import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import '/images/navimg/bi_cart.svg';

function Nav() {
  const [styleHandle, setStyleHandle] = useState(-1);

  const styleValue = e => {
    const { value } = e.target;
    setStyleHandle(value);
  };

  return (
    <div className="nav">
      <div className="navLogo">
        <Link to="/main">
          <img src="./images/logo/logo-bk.svg" alt="logo" classNAme="logo" />
        </Link>
      </div>
      <div className="navMenu">
        <ul className="navMenuUl">
          <li className="navMenuList">
            <Link to="/ingridient">
              <p
                className={`navMenuItems ${
                  styleHandle === 1 ? 'navChecked' : ''
                }`}
                value={styleValue}
                onClick={() => setStyleHandle(1)}
              >
                핵심성분
              </p>
            </Link>
          </li>
          <li className="navMenuList">
            <Link to="/productlist">
              <p
                className={`navMenuItems ${
                  styleHandle === 2 ? 'navChecked' : ''
                }`}
                value={styleValue}
                onClick={() => setStyleHandle(2)}
              >
                상품보기
              </p>
            </Link>
          </li>
          <li className="navMenuList">
            <Link to="/">
              <p
                className={`navMenuItems ${
                  styleHandle === 3 ? 'navChecked' : ''
                }`}
                value={styleValue}
                onClick={() => setStyleHandle(3)}
              >
                고객센터
              </p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navLoginMenu">
        <ul className="navLoginMenuUl">
          <li className="navLoginList">
            <Link to="/subscribe">
              <p
                className={`navLoginItems ${
                  styleHandle === 4 ? 'navChecked' : ''
                }`}
                value={styleValue}
                onClick={() => setStyleHandle(4)}
              >
                구독관리
              </p>
            </Link>
          </li>
          <li className="navLoginList">
            <Link to="/login">
              <p
                className={`navLoginItems ${
                  styleHandle === 5 ? 'navChecked' : ''
                }`}
                value={styleValue}
                onClick={() => setStyleHandle(5)}
              >
                로그인
              </p>
            </Link>
          </li>
          <li className="navLoginList">
            <Link to="/cart">
              <img
                src="/images/navimg/bi_cart.svg"
                className="cartImg"
                alt="장바구니"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
