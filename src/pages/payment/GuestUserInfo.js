import { API } from '../../config.js';
import './GuestUserInfo.scss';

const GuestUserInfo = ({ userAddressInputValue, getAddressInput }) => {
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
          fetch(API.ORDER, {
            method: 'POST',
            headers: {
              Authorization: sessionStorage.getItem('access_token'),
            },
            body: JSON.stringify({
              location: userAddressInputValue,
            }),
          }).then(res => res.json());
        }}
      >
        확인
      </button>
    </form>
  );
};

export default GuestUserInfo;
