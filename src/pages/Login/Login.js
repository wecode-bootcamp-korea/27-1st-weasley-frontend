import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Login/Login.scss';

function Login() {
  // useNavigate 써서 통과하면 signup
  // const navigate = useNavigate();
  // const [loginValue, setLoginValue] = useState('');
  // const [emailValue, setEmailValue] = useState([]);

  return (
    <div className="Login">
      <div className="logo">
        <Link to="/" />
      </div>
      <div className="loginSection">
        <p>
          <b>로그인 및 회원가입</b>을 시작합니다.
        </p>
        <div className="loginEmail">
          <form name="loginForm" action="login.js" method="post">
            <label for="email">
              {/* <input value={loginValue} placeholder="이메일" /> */}
            </label>
          </form>
        </div>
        <p>
          <b>위즐리 컴퍼니 통합 회원으로 진행됩니다.</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
