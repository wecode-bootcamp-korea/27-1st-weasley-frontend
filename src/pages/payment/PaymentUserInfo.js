const PaymentUserInfo = ({
  userAddress,
  userGetAddress,
  userInfo,
  userName,
  address,
  cellphone,
}) => {
  console.log(userInfo);
  return (
    <div className="paymentUserInfo">
      <div className="userWrap">
        <div className="userInfo">
          <span className="userName">{}</span>
          <span className="userPhone">{}</span>
          <p className="userAddress">{userInfo[0].location}</p>
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
          <button
            type="button"
            className="methodButton point"
            onClick={() => {
              fetch('http://3.142.147.114:8000/shops/orders', {
                method: 'POST',
                headers: {
                  Authorization:
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.bHQK7d38oajQKa3Hl8nsYrqDhp9m2fmo_MWjDWMN4Zs',
                },
                body: JSON.stringify({
                  address_id: 9,
                }),
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                });
            }}
          >
            포인트로 결제
          </button>
        </form>
        <form className="payForm">
          <button className="payButton">결제하기</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentUserInfo;
