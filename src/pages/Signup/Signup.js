import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import USER_DATA from './UserData.js';
import Nav from '../../components/Nav';
import './Signup.scss';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    birth: '',
    name: '',
    gender: '',
  });
  const navigate = useNavigate();
  const [radio, setRadio] = useState(false);
  const handleRadio = e => {
    const { value } = e.target;
    setRadio(value);
  };

  const { email, password, phone, birth, name } = formData;
  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emailReg = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/;
  const passwordReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])(?=.*[0-9])[A-Za-z\\d$@$!%*?&]{8,45}$/;
  const phoneReg = /^\d{3}\d{3,4}\d{4}$/;
  const birthReg = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;

  const isEmailValid = emailReg.test(email);
  const isPasswordValid = passwordReg.test(password);
  const isPhoneValid = phoneReg.test(phone);
  const isBirthValid = birthReg.test(birth);
  const isInputValid =
    isEmailValid && isPasswordValid && isPhoneValid && isBirthValid;

  const goToMain = () => {
    fetch('http://10.58.7.120:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        phone: phone,
        date_of_birth: birth,
        name: name,
        gender: ['MALE', 'FEMALE'],
      }),
    })
      .then(response => response.json())
      .then(result => {
        return result.MESSAGE === 'SUCCESS'
          ? navigate('/')
          : alert('회원 가입을 다시 진행해주세요');
      });
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
          <span className="signupTitle1">처음이시군요</span>
          <span className="signupTitle2">가입을 진행합니다.</span>
        </h1>
        <form name="signupForm" method="post">
          {USER_DATA.map(user => {
            return (
              <label className="formFormatLabel">
                <input
                  key={user.id}
                  name={user.name}
                  className="formFormat"
                  d
                  maxLength={user.maxLength}
                  placeholder={user.placeholder}
                  onChange={handleInput}
                />
              </label>
            );
          })}
          <div className="genderTitle">
            성별
            <span className="radioButton">
              <label className="gender">
                <input
                  id="male"
                  value="male"
                  name="male"
                  type="radio"
                  placeholder="남자"
                  checked={radio === 'male'}
                  onChange={handleRadio}
                />
                남자
              </label>
              <label className="gender">
                <input
                  id="male"
                  value="female"
                  name="male"
                  type="radio"
                  placeholder="여자"
                  checked={radio === 'female'}
                  onChange={handleRadio}
                />
                여자
              </label>
            </span>
          </div>
          <button
            className={isInputValid ? 'activeOn' : 'activeOff'}
            onClick={goToMain}
            type="button"
          >
            가입완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
