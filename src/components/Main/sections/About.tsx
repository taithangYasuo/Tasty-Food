import { Link } from 'react-scroll';
import about from '../../img/about.jpg';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function About() {
  return (
    <ScrollRevealAnimation>
      <section className="about section container" id="about">
        <div className="about__container d-grid">
          <div className="about__data">
            <span className="section-subtitle about__initial">About us</span>
            <h2 className="section-title about__initial">
              We cook the best <br />
              tasty food
            </h2>
            <p className="about__description">
              We cook the best food in the entire city, with excellent customer
              service, the best meals and at the best price, visit us.
            </p>
            <Link to="" className="button">
              Explore history
            </Link>
          </div>
          <img src={about} alt="" className="about__img" />
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default About;
