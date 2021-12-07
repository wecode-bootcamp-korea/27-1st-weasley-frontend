import { Link } from 'react-router-dom';

import './Main.scss';

const Footer = () => {
  return (
    <main className="mainPage">
      <section className="mainTopSection">
        <h1 className="mainTitleTag">
          현명한 소비를 위한 <br />
          정직한 스킨케어
        </h1>
        <h3 className="subTitleTag">
          과학적으로 검증된 성분, 거품 없는 합리적 가격
        </h3>
        <form className="viewProductForm">
          <button type="button" className="viewNowProductButton">
            <Link to="/productlist">시작하기</Link>
          </button>
        </form>
      </section>
      <section className="mainMiddleSection">
        <h1 className="mainTitleTag">더 이상 속지마세요.</h1>
        <h3 className="subTitleTag">
          <p>시중 브랜드들이 화장품의 효과를 과장하고 가격을 부풀려온 탓에,</p>
          <p>남자들은 좋은 제품을 고르기 어려웠습니다.</p>
          <p>
            오픈워크는 불합리한 시장 관행을 거부하고, 정직한 기준을
            만들어갑니다.
          </p>
        </h3>
      </section>
      <section className="mainBottomSection">
        <h1 className="mainTitleTag">
          효과적인 제품.
          <br /> 그리고 정직한 가격.
        </h1>
        <p className="mainElement">핵심성분 보러가기</p>
      </section>
    </main>
  );
};

export default Footer;
