import { Link } from 'react-scroll';
import plate1 from '../../img/plate1.png';
import plate2 from '../../img/plate2.png';
import plate3 from '../../img/plate3.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function Menu() {
  return (
    <ScrollRevealAnimation>
      <section className="menu section container" id="menu">
        <span className="section-subtitle">Special</span>
        <h2 className="section-title">Menu of the week</h2>

        <div className="menu__container d-grid">
          <div className="menu__content">
            <img src={plate1} alt="" className="menu__img" />
            <h3 className="menu__name">Barbecue salad</h3>
            <span className="menu__detail">Delicious dish</span>
            <span className="menu__price">$22.00</span>
            <Link to="" className="button menu__button">
              <i className="bx bx-cart-alt" />
            </Link>
          </div>
          <div className="menu__content">
            <img src={plate2} alt="" className="menu__img" />
            <h3 className="menu__name">Salad with fish</h3>
            <span className="menu__detail">Delicious dish</span>
            <span className="menu__price">$12.00</span>
            <Link to="" className="button menu__button">
              <i className="bx bx-cart-alt" />
            </Link>
          </div>
          <div className="menu__content">
            <img src={plate3} alt="" className="menu__img" />
            <h3 className="menu__name">Spinach salad</h3>
            <span className="menu__detail">Delicious dish</span>
            <span className="menu__price">$9.50</span>
            <Link to="" className="button menu__button">
              <i className="bx bx-cart-alt" />
            </Link>
          </div>
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default Menu;
