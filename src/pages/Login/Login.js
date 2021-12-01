import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="logo">
        <Link to="/" />
      </div>

      <div className="loginSection">
        <h1 className="loginH1">
          로그인 및 회원가입
          <span className="loginTitle">을 시작합니다.</span>
        </h1>

        <form name="loginForm" action="login.js" method="post">
          <label for="email">
            <input
              value=""
              type="text"
              id="email"
              name="email"
              placeholder="이메일"
            />
          </label>
        </form>
        <p>
          <b>위즐리 컴퍼니 통합 회원으로 진행됩니다.</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
