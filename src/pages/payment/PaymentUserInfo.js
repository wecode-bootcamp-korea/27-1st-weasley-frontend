const PaymentUserInfo = ({ userInputValue }) => {
  return (
    <div className="paymentUserInfo">
      <div className="userWrap">
        <div className="userInfo">
          <sapn className="userName">김찰스</sapn>
          <span className="userPhone">010</span>
          <p className="userAddress">{userInputValue}</p>
        </div>
        <div className="modifyButtonWrap">
          <span className="modifyButton">주소 추가</span>
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
