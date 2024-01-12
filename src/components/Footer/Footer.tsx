import React from 'react';
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner container">
        <div className="footer__logo">
          <img src="https://thumbs.dreamstime.com/b/%D1%84%D1%80%D0%B0%D0%B7%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%82%D0%BE%D0%B3%D0%BE-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0-%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B9%D1%82%D0%B0-115894258.jpg" alt="logo"/>
        </div>
      <ul className="footer__social-list">
        <li className="footer__social-item">
          <img
            src="https://www.svgrepo.com/show/510291/twitter.svg"
            alt="Twitter"
          />
        </li>
        <li className="footer__social-item">
          <img
            src="https://www.svgrepo.com/show/509249/social-youtube.svg"
            alt="Youtube"
          />
        </li>
        <li className="footer__social-item">
          <img
            src="https://www.svgrepo.com/show/509233/social-facebook.svg"
            alt="Facebook"
          />
        </li>
        <li className="footer__social-item">
          <img
            src="https://www.svgrepo.com/show/521711/instagram.svg"
            alt="Instagram"
          />
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Footer;