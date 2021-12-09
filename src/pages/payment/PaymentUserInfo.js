import { API } from '../../config.js';
import './PaymentUserInfo.scss';

const PaymentUserInfo = ({
  userAddress,
  userGetAddress,
  userInfo,
  userName,
  address,
  cellphone,
}) => {
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
              fetch(API.ORDER, {
                method: 'POST',
                headers: {
                  Authorization: sessionStorage.getItem('access_token'),
                },
                body: JSON.stringify({
                  address_id: address,
                }),
              }).then(res => res.json());
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
