const PayMethod = () => {
  return (
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
  );
};

export default PayMethod;
