import './GuestUserInfo.scss';

const GuestUserInfo = ({
  userAddressInputValue,
  userAddress,
  submitAddress,
  setUserAddress,
}) => {
  return (
    <form className="guestUserInfo">
      <p className="guestInfoAddressTitle">주소를 추가해주세요</p>
      <input
        className="guestInfoAddress"
        type="text"
        onChange={userAddressInputValue}
        placeholder="주소를 추가해주세요."
      />
      <button
        type="submit"
        className="addressSubmitFormButton"
        onClick={() => {
          fetch('주소입력api', {
            method: 'post',
            headers: {
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
            },
            body: JSON.stringify({
              address: userAddress,
            }),
          })
            .then(res => res.json())
            .then(data => setUserAddress(data));
        }}
      >
        확인
      </button>
    </form>
  );
};

export default GuestUserInfo;
