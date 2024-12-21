import Socials from "../Socials.jsx";
import FooterBlock from "./FooterBlock.jsx";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="visually-hidden">
        Footer with helpful links and contact information
      </h2>
      <div className="footer__links content-padding">
        <div className="footer__inner container">
          <div className="footer__info">
            <img
              className="footer__logo"
              src="images/logo.png"
              alt=""
              width="156"
              height="38"
              loading="lazy"
            />
            <p className="footer__paragraph footer__description">
              when an unknown printer took galley of type and scrambled it to
              make pspecimen bookt has.
            </p>
            <address className="footer__address">
              463 7th Ave, NY 10018, USA
            </address>
            <address className="footer__phone">+123 88 9900 456</address>
          </div>
          <FooterBlock title={"Useful Links"}>
            <ul className="info-block__links-list">
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Our values
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Our advisory board
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Our partners
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Become a partner
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Work at Future Learn
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Quizlet Plus
                </a>
              </li>
            </ul>
          </FooterBlock>
          <FooterBlock title={"Our Company"}>
            <ul className="info-block__links-list">
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Become Teacher
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Blog
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Instructor
                </a>
              </li>
              <li className="info-block__item">
                <a className="info-block__link" href="#">
                  Events
                </a>
              </li>
            </ul>
          </FooterBlock>
          <FooterBlock title={"Get In Touch"}>
            <p className="footer__paragraph app-links__description">
              when an unknown printer took galley type and scrambled
            </p>
            <Socials className={"footer__socials"} />
            <ul className="footer__markets-list markets-list">
              <li className="markets-list__item">
                <a className="markets-list__link market-link" href="#">
                  <img
                    className="market-link__image"
                    src="images/socials/google-play.svg"
                    alt=""
                    width="17"
                    height="18"
                    loading="lazy"
                  />
                  <span className="market-link__text-container">
                    <span className="market-link__caption">Get It On</span>
                    <span className="market-link__name">Google Play</span>
                  </span>
                </a>
              </li>
              <li className="markets-list__item">
                <a className="markets-list__link market-link" href="#">
                  <img
                    className="market-link__image"
                    src="images/socials/apple-store.svg"
                    alt=""
                    width="22"
                    height="26"
                    loading="lazy"
                  />
                  <span className="market-link__text-container">
                    <span className="market-link__caption">
                      Download On The
                    </span>
                    <span className="market-link__name">Apple Store</span>
                  </span>
                </a>
              </li>
            </ul>
          </FooterBlock>
        </div>
      </div>
      <div className="footer__footer content-padding">
        <div className="footer__inner container">
          <small className="footer__copyright">
            © 2010-2024 skillgro.com. All rights reserved.
          </small>
          <ul className="footer__rules-links rules-links">
            <li className="rules-links__item">
              <a className="rules-links__link" href="#">
                Terms of Use
              </a>
            </li>
            <li className="rules-links__item">
              <a className="rules-links__link" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      ;
    </footer>
  );
}

export default Footer;
