import { useNavigate } from 'react-router-dom';

import { API } from '../../config.js';
import './PaymentUserInfo.scss';

const PaymentUserInfo = ({
  userAddress,
  userGetAddress,
  userInfo,
  address,
  cellphone,
  name,
}) => {
  const navigate = useNavigate();
  console.log('props', userInfo[0].address_id);
  console.log('props', userInfo[0].location);
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
                  Authorization: `Bearer ${sessionStorage.getItem(
                    'access_token'
                  )}`,
                },
                body: JSON.stringify({
                  address_id: userInfo[0].address_id,
                }),
              })
                .then(res => res.json())
                .then(alert('결제가 완료 됐습니다.'));
            }}
          >
            포인트로 결제
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentUserInfo;
