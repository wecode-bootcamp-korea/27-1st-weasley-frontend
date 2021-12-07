import FOOTER_LEFT_TITLE_DATA from './FooterData.js';

import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerMainWrap">
        <ul className="footerMainTag">
          {FOOTER_LEFT_TITLE_DATA[0].map(footerInfo => {
            return (
              <li className="footerMainInfo" key={footerInfo.id}>
                <Link to={footerInfo.link}>{footerInfo.mainTag}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="footerMainTag">
          {FOOTER_LEFT_TITLE_DATA[1].map(footerInfo => {
            return (
              <li className="footerMainInfo" key={footerInfo.id}>
                <Link to={footerInfo.link}>{footerInfo.mainTag}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footerBottomWrap">
        {FOOTER_LEFT_TITLE_DATA[2].map(footerInfo => {
          return (
            <p className="footerMainInfo" key={footerInfo.id}>
              <span>{footerInfo.mainTag}</span>
            </p>
          );
        })}
        <p>
          Copyright ©2021 <strong>WEASLY.</strong> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
