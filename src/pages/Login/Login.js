import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './IsValidation';
import '../Login/Login.scss';

function Login() {
  const [loginActive, setLoginActive] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate();
  const inputValue = emailValue가 정규식 && password가 정규식 



  //email 정규식 
  //const emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
 // const passwordExp = 


  const valueActive = () => {
    return setLoginActive(inputValue);
  };

  const handleEmail = e => {
    const { value } = e.target;
    setEmailValue(value);
  };

  const handlePassword = e => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const goToMain = () => {
    fetch('API주소', {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => (result.message === 'SUCCESS' ? navigate('/') : ''));

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
              value=""
              type="text"
              id="email"
              name="email"
              placeholder="이메일"
              onChange={handleEmail}
              onKeyUp={valueActive}
            />
          </label>
          <label for="password">
            <input
              value=""
              id="password"
              name="password"
              placeholder="비밀번호 (8자 이상)"
              onChange={handlePassword}
              onKeyUp={valueActive}
            />
          </label>
          <button
            className={loginActive ? 'activeOn' : 'activeOff'}
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
