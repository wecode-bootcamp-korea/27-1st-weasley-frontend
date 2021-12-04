const PaymentUserInfo = ({
  userAddress,
  userGetAddress,
  userName,
  address,
  cellphone,
}) => {
  return (
    <div className="paymentUserInfo">
      <div className="userWrap">
        <div className="userInfo">
          <span className="userName">{userName}</span>
          <span className="userPhone">{cellphone}</span>
          <p className="userAddress">{address}</p>
        </div>
        <div className="modifyButtonWrap">
          <span className="modifyButton">수정</span>
        </div>
      </div>
      <div className="paymentMethod">
        <div className="methodTitle">
          <h1>결제수단을 선택해주세요.</h1>
        </div>
        <form className="methodForm">
          <button className="methodButton point">포인트로 결제</button>
        </form>
        <form className="payForm">
          <button className="payButton">결제하기</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentUserInfo;
