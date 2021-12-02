import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordReg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate();

  const emailExp = new RegExp(emailReg);
  const passwordExp = new RegExp(passwordReg);
  const isInputValid =
    emailExp.test(emailValue) && passwordExp.test(passwordValue);

  const handleEmail = e => {
    const { value } = e.target;
    setEmailValue(value);
  };

  const handlePassword = e => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const goToMain = () => {
    fetch('http://10.58.0.114:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        return result.MESSAGE === 'SUCCESS' ? navigate('/') : '';
      });

    navigate('/');
  };

  return (
    <div className="login">
      <div className="logo">
        <Link to="/">
          <img src="./images/logo/logo-bk.svg" alt="logo" />
        </Link>
      </div>

      <div className="loginSection">
        <h1 className="loginH1">
          로그인 및 회원가입
          <span className="loginTitle">을 시작합니다.</span>
        </h1>
        <form name="loginForm" action="login.js" method="post">
          <label for="email">
            <input
              value={emailValue}
              type="text"
              id="email"
              name="email"
              placeholder="이메일"
              onChange={handleEmail}
            />
          </label>
          <label for="password">
            <input
              value={passwordValue}
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호 (8자 이상)"
              onChange={handlePassword}
            />
          </label>
          <button
            className={isInputValid ? 'activeOn' : 'activeOff'}
            onClick={goToMain}
            type="button"
          >
            로그인
          </button>
        </form>
        <Link to="/signup">
          <span className="informLogin">
            위즐리 컴퍼니 통합 회원으로 &nbsp;<p>가입</p>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
