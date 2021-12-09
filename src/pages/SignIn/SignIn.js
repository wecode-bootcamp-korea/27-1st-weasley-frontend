import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './SignIn.scss';

const emailReg =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?#&]{8,}$/;

function Signin({ setIsLogin }) {
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
    fetch(API.SIGNIN, {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          sessionStorage.setItem('access_token', res.TOKEN);
          setIsLogin(true);
          navigate('/');
        } else {
          alert('회원 가입을 진행해주세요');
        }
      });
  };

  return (
    <div className="signin">
      <div className="signinInner">
        <div className="logo">
          <Link to="/">
            <img src="./images/logo/logo-bk.svg" alt="logo" />
          </Link>
        </div>

        <div className="signinSection">
          <h1 className="signinH1">
            <span className="signinTitle1">로그인 및 회원가입</span>
            <span className="signinTitle2">을 시작합니다.</span>
          </h1>
          <form name="signinForm" method="post">
            <label for="email" className="signinFormLabel">
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
            <Link to="/signin">
              <div className="informLogin">
                <span className="informText1">위즐리 컴퍼니 통합 회원으로</span>
                <span className="informText2"> 가입 </span>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
