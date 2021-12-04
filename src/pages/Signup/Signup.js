import React from 'react';
import Signup from './Signup.scss';
import USER_DATA from './UserData';

const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordReg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,45}$/;
const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

const birthReg = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    birth: '',
    name: '',
    gender: '',
  });

  const { email, password, phone, birth, name, gender } = formData;

  const handleInput = e => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const isInputValid = new RegExp();
  // emailExp.test(emailValue) && passwordExp.test(passwordValue);

  // const isEmailValid = emailReg.test(email);
  // const isPasswordValid = passwordReg.test(password);
  // const isPhoneValid = phoneReg.test(phone);
  // const isBithValid = birthReg.test(birth);

  const goToMain = () => {
    fetch('http://3.142.147.114:8000/', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        phone: phone,
        birth: birth,
        name: name,
        gender: male,
        female,
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
          처음이시군요
          <span className="signupTitle">가입을 진행합니다.</span>
        </h1>
        <form name="signupForm" method="post">
          {/* <label for="email"> */}
          {USER_DATA.map(user => {
            return (
            <label>
            <input
                key={user.id}
                name={user.name}
                className="formFormat"
                type={user.type}
                placeholder={user.placeholder}
                onChange={handleInput}
              />
            );
            </label>
          
          })}
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
