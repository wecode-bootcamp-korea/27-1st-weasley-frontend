import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Nav/Nav.scss';
import '/images/navimg/bi_cart.svg';

function Nav({ isLogin, setIsLogin }) {
  const [styleHandle, setStyleHandle] = useState(-1);
  const navigate = useNavigate();

  const signOut = isLogin => {
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
            <Link to="/ingridient">
              <p
                className={`navMenuItems ${
                  styleHandle === 1 ? 'navChecked' : ''
                }`}
                value={styleValue}
                onClick={() => setStyleHandlse(1)}
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

            {/* route경로에 state false로 설정했고 nav에서 state를 가져와서 쑴
            login 이 false이냐 ?   */}
            {/* //get // sessionStorage.clear //useEffect로 변화시점 찾기  */}
            {/* state로 변화를 관리 하는데 그 변화를 어떤 시점.기준을 할지  cf) url을 기준으로  */}
            {/* [isLogIn, setIsLogIn] = false/ storage있는것만으로 token 지우고 메인 페이지 이동 로그아웃 로그인에 토큰 여부 같이 넣기   */}
            {/* 로그인을 활성화 후 또 onclick시에 로그아웃을 할건데 상태값이 있을 때?  로그인 유지하고 없을 때는 로그아웃해라 로그아웃하면서 토큰을 비우고 로그인이라는 글자가 로그아우승로 바뀌어야함  */}
            {/* 받아온 isLogin state를 조건부로   */}

            <li className="navLoginList">
              <Link to="/signin">
                {isLogin ? (
                  <p
                    className={`navLoginItems ${
                      styleHandle === 5 ? 'navChecked' : ''
                    }`}
                    value={styleValue}
                    onClick={() => setStyleHandle(5)}
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
