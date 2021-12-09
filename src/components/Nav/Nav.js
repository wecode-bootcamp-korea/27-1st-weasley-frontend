import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Nav/Nav.scss';
import '/images/navimg/bi_cart.svg';

function Nav({ isLogin, setIsLogin }) {
  const [styleHandle, setStyleHandle] = useState(-1);
  const navigate = useNavigate();

  const logOut = () => {
    setIsLogin(false);
    sessionStorage.clear('');
    navigate('/');
  };

  const styleValue = e => {
    const { value } = e.target;
    setStyleHandle(value);
  };

  return (
    <div className="nav">
      <div className="navMenuInner">
        <div className="navLogo">
          <Link to="/">
            <img src="./images/logo/logo-bk.svg" alt="logo" classNAme="logo" />
          </Link>
        </div>
        <ul className="navMenuUl">
          <li className="navMenuList">
            <Link to="/ingredient">
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
        </ul>
      </div>
      <div className="navLoginInner">
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
              <Link to="/signin">
                {isLogin ? (
                  <p
                    className={`navLoginItems ${
                      styleHandle === 5 ? 'navChecked' : ''
                    }`}
                    value={styleValue}
                    onClick={logOut}
                  >
                    로그아웃
                  </p>
                ) : (
                  <p
                    className={`navLoginItems ${
                      styleHandle === 5 ? 'navChecked' : ''
                    }`}
                    value={styleValue}
                    onClick={() => setStyleHandle(5)}
                  >
                    로그인
                  </p>
                )}
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
    </div>
  );
}

export default Nav;
