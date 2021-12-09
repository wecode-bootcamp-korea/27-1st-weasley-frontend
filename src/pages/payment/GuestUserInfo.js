import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';
import './GuestUserInfo.scss';

const GuestUserInfo = ({
  userAddressInputValue,
  getAddressInput,
  setAddressValidatedSwitch,
}) => {
  const navigate = useNavigate();
  return (
    <form className="guestUserInfo">
      <p className="guestInfoAddressTitle">주소를 추가해주세요</p>
      <input
        className="guestInfoAddress"
        type="text"
        onChange={getAddressInput}
        placeholder="주소를 추가해주세요."
      />
      <button
        type="button"
        className="addressSubmitFormButton"
        onClick={() => {
          fetch(API.USER_ADDRESS, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
            },
            body: JSON.stringify({
              location: userAddressInputValue,
            }),
          })
            .then(res => res.json())
            .then(data => {
              if (data.MESSAGE === 'INVALID_TOKEN') {
                alert('로그인이 필요합니다!');
                navigate('/signin');
                return;
              }
              setAddressValidatedSwitch(true);
            });
        }}
      >
        확인
      </button>
    </form>
  );
};

export default GuestUserInfo;
