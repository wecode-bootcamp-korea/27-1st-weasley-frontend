import './PayInfo.scss';

const PayInfo = ({ name, price }) => {
  return (
    <div className="paymentPayList">
      <div className="orderProductList">
        <div className="orderProductImage">
          <img src="images/productimage/cleanser2.png" alt="주문상품이미지" />
        </div>
        <div className="orderInfo">
          <p className="productName">클렌징폼</p>
          <span className="productType">건성용</span>
          <span className="productCapacity">180ml</span>
        </div>
        <div className="seperateInfo">
          <span className="seperateQty">1개</span>
          <span className="seperateQtySlash">/</span>
          <span className="seperatePrice">{price}원</span>
        </div>
      </div>
    </div>
  );
};

export default PayInfo;
