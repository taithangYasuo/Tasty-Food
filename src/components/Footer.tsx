import { Link } from 'react-scroll';
import ScrollRevealAnimation from './ScrollRevealAnimation';

function Footer() {
  return (
    <ScrollRevealAnimation>
      <footer className="footer section container">
        <div className="footer__container d-grid">
          <div className="footer__content">
            <Link to="home" className="footer__logo">
              Tasty Food
            </Link>
            <span className="footer__description">Restaurant</span>
            <div>
              <a
                href="https://www.facebook.com/taithangYasuo/"
                className="footer__social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-facebook" />
              </a>
              <a
                href=""
                className="footer__social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-instagram" />
              </a>
              <a
                href=""
                className="footer__social"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-twitter" />
              </a>
            </div>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Services</h3>
            <ul>
              <li>
                <Link to="" className="footer__link">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="" className="footer__link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="" className="footer__link">
                  Fast food
                </Link>
              </li>
              <li>
                <Link to="" className="footer__link">
                  Reserve your spot
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Information</h3>
            <ul>
              <li>
                <Link to="" className="footer__link">
                  Event
                </Link>
              </li>
              <li>
                <Link to="" className="footer__link">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="" className="footer__link">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="" className="footer__link">
                  Terms of services
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Adress</h3>
            <ul>
              <li>Hanoi - Vietnam</li>
              <li>098 999 9999</li>
              <li>tastyfood@gmail.com</li>
            </ul>
          </div>
        </div>
        <p className="footer__copy">© 2021. Tai Pham</p>
      </footer>
    </ScrollRevealAnimation>
  );
}

export default Footer;
