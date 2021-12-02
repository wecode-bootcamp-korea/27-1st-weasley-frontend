function Price({ cart }) {
  return (
    <div className="total">
      <div className="fee">
        <p>배송비</p>
        <p>무료배송</p>
      </div>
      <div className="sum">
        <p>총 결제금액</p>
        <p>
          {cart
            .reduce((total, curr) => total + curr.price * curr.amount, 0)
            .toLocaleString()}
          원
        </p>
      </div>
    </div>
  );
}

export default Price;
