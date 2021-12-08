import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import '../Login/Login.scss';

const emailReg = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}';
const passwordReg =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}';

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
    fetch(API.LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        return result.MESSAGE === 'SUCCESS'
          ? navigate('/Main')
          : alert('가입을 먼저 진행해주세요');
      });
  };

  // 데이터 저장

  // sessionStorage.setItem("key", "value")

  // 데이터 호출

  // sessionStorage.getItem("key")

  return (
    <div className="login">
      <div className="loginInner">
        <div className="logo">
          <Link to="/">
            <img src="./images/logo/logo-bk.svg" alt="logo" />
          </Link>
        </div>

        <div className="loginSection">
          <h1 className="loginH1">
            <span className="loginTitle1">로그인 및 회원가입</span>
            <span className="loginTitle2">을 시작합니다.</span>
          </h1>
          <form name="loginForm" method="post">
            <label for="email" className="loginFormLabel">
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
            <Link to="/signup">
              <div className="informLogin">
                <span className="informText1">
                  {' '}
                  위즐리 컴퍼니 통합 회원으로{' '}
                </span>
                <span className="informText2"> 가입 </span>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
