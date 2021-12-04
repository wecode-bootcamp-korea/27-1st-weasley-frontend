import React from 'react';

const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordReg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,45}$/;

function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: '',
  });
  const goToMain = () => {
    fetch('http://3.142.147.114:8000/signup', {
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
    <div className="signup">
      <div className="logo">
        <Link to="/">
          <img src="./images/logo/logo-bk.svg" alt="logo" />
        </Link>
      </div>
      <div className="signupSection">
        <h1 className="signupH1">
          처음이시군요
          <span className="signupTitle">가입을 진행합니다.</span>
        </h1>
        <form name="signupForm" method="post">
          <label for="email">
            이메일
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
            비밀번호
            <input
              value={passwordValue}
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호 (6자 이상)"
              onChange={handlePhone}
            />
          </label>
          <label for="phone">
            휴대폰 번호
            <input
              value={phoneValue}
              type="tel"
              id="phone"
              name="phone"
              maxLength="13"
              placeholder="휴대폰 번호 ('-'제외)"
              onChange={handlePhone}
            />
          </label>
          생년월일 6자리
          <label for="birth">
            <input
              value={birthValue}
              type="text"
              id="birth"
              name="birth"
              maxLength="6"
              placeholder="예:930422"
              onChange={handleBirth}
            />
          </label>
          <label for="name">
            이름
            <input
              value={nameValue}
              type="text"
              id="name"
              name="name"
              placeholder="이름"
              onChange={handlename}
            />
          </label>
          <label for="name">
            성별
            <input
              value={genderMaleValue}
              type="radio"
              id="name"
              name="name"
              placeholder="남자"
              onChange={handlename}
            />
            <input
              value={genderFemaleValue}
              type="radio"
              id="name"
              name="name"
              placeholder="여자"
              onChange={handleGender}
            />
          </label>
          <button
            className={isInputValid ? 'activeOn' : 'activeOff'}
            onClick={goToMain}
            type="button"
          >
            가입 완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
