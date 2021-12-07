import { Link } from 'react-router-dom';

import './Main.scss';

const Footer = () => {
  return (
    <main className="mainPage">
      <section className="mainPageSection">
        <h1 className="mainTitleTag">
          현명한 소비를 위한 <br />
          정직한 스킨케어
        </h1>
        <h3 className="subTitleTag">
          과학적으로 검증된 성분, 거품 없는 합리적 가격
        </h3>
        <form className="viewProductForm">
          <button type="button" className="viewNowProductButton">
            시작하기
          </button>
        </form>
      </section>
      <section className="mainPageSection">
        <h1 className="mainTitleTag">더 이상 속지마세요.</h1>
        <h3 className="subTitleTag">
          시중 브랜드들이 화장품의 효과를 과장하고 가격을 부풀려온 탓에,
          남자들은 좋은 제품을 고르기 어려웠습니다. 오픈워크는 불합리한 시장
          관행을 거부하고, 정직한 기준을 만들어갑니다.
        </h3>
      </section>
    </main>
  );
};

export default Footer;
