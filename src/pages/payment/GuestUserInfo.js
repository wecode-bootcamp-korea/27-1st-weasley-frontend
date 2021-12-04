import './GuestUserInfo.scss';

const GuestUserInfo = ({ handleAddress, getAddressInput }) => {
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
        type="submit"
        className="addressSubmitFormButton"
        onClick={handleAddress}
      >
        확인
      </button>
    </form>
  );
};

export default GuestUserInfo;
