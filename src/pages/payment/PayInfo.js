import './PayInfo.scss';

const PayInfo = ({ name, amount, price, thumb, volume }) => {
  console.log('name:', name);
  return (
    <div className="paymentPayList">
      <div className="orderProductList">
        <div className="orderProductImage">
          <img src={thumb} alt="주문상품이미지" />
        </div>
        <div className="orderInfo">
          <p className="productName">{name}</p>
          <span className="productType">{}</span>
          <span className="productCapacity">{volume}ml</span>
        </div>
        <div className="seperateInfo">
          <span className="seperateQty">{amount}개</span>
          <span className="seperateQtySlash">/</span>
          <span className="seperatePrice">{price}원</span>
        </div>
      </div>
    </div>
  );
};

export default PayInfo;
