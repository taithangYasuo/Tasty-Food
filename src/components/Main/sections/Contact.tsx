import { Link } from 'react-scroll';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function Contact() {
  return (
    <ScrollRevealAnimation>
      <section className="contact section container" id="contact">
        <div className="contact__container d-grid">
          <div className="contact__data">
            <span className="section-subtitle contact__initial">
              Let's talk
            </span>
            <h2 className="section-title contact__initial">Contact us</h2>
            <p className="contact__description">
              If you want to reserve a table in our restaurant, contact us and
              we will attend you quickly, with our 24/7 chat service.
            </p>
          </div>
          <div className="contact__button">
            <Link to="" className="button">
              Contact us now
            </Link>
          </div>
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default Contact;
