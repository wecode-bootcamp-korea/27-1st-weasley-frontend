import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../config';
import USER_DATA from './UserData.js';
import './Signup.scss';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    birth: '',
    name: '',
  });

  const [gender, setGender] = useState({
    gender: '',
  });

  const navigate = useNavigate();
  const { email, password, phone, birth, name } = formData;

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange = e => {
    setGender(e.target.value);
  };

  const emailReg =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?#&]{8,}$/;
  const phoneReg = /(\d{3}).*(\d{4}).*(\d{4})$/;
  const birthReg = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;

  const emailExp = new RegExp(emailReg);
  const passwordExp = new RegExp(passwordReg);
  const phoneExp = new RegExp(phoneReg);
  const birthExp = new RegExp(birthReg);

  const isInputValid =
    emailExp.test(email) &&
    passwordExp.test(password) &&
    phoneExp.test(phone) &&
    birthExp.test(birth) &&
    !!name;

  const goToMain = () => {
    fetch(API.SIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        phone: phone,
        date_of_birth: birth,
        name: name,
        gender: gender,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE === 'CREATED') {
          navigate('/Main');
        } else {
          alert('회원 가입을 다시 해주세요.');
        }
      });
  };

  return (
    <div className="signup">
      <div className="logo">
        <Link to=" /">
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
              <label className="formFormatLabel" key={user.id}>
                {user.name}
                <input
                  name={user.name}
                  className="formFormat"
                  type={user.type}
                  maxLength={user.maxLength}
                  placeholder={user.placeholder}
                  onChange={handleInput}
                />
              </label>
            );
          })}
          <div className="genderTitle">
            성별
            <span className="radioBox">
              <label className="gender">
                <input
                  id="male"
                  value="MALE"
                  name="male"
                  type="radio"
                  placeholder="남자"
                  checked={gender === 'MALE' ? true : false}
                  onChange={handleChange}
                />
                남자
              </label>
              <label className="gender">
                <input
                  id="female"
                  value="FEMALE"
                  name="female"
                  type="radio"
                  placeholder="여자"
                  checked={gender === 'FEMALE' ? true : false}
                  onChange={handleChange}
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
};

export default Signup;
