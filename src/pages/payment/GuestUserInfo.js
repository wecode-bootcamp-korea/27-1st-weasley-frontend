import { useState } from 'react';

const GuestUserInfo = ({ addressInputValue, submitAddress }) => {
  const [boolean, setBoolean] = useState(false);
  return (
    <form className="guestUserInfo">
      <p className="guestInfoAddressTitle">받는사람 주소</p>
      <input
        className="guestInfoAddress"
        type="text"
        onChange={addressInputValue}
      />
      <button
        type="submit"
        className="submitForm"
        onClick={() => {
          fetch('결제api', {
            method: 'post',
            headers: {
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
            },
            body: JSON.stringify({
              address: addressInputValue,
            }),
          })
            .then(res => res.json())
            .then(data => {
              data.MESSAGE = 'SUCCESS' ? setBoolean(true) : setBoolean(false);
            });
        }}
      >
        확인
      </button>
    </form>
  );
};

export default GuestUserInfo;
