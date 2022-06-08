import { Link } from 'react-scroll';
import app1 from '../../img/app1.png';
import app2 from '../../img/app2.png';
import app from '../../img/app.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function DownloadApp() {
  return (
    <ScrollRevealAnimation>
      <section className="app section container" id="app">
        <div className="app__container d-grid">
          <div className="app__data">
            <span className="section-subtitle app__initial">App</span>
            <h2 className="section-title app__initial">App is aviable</h2>
            <p className="app__description">
              Find our application and download it, you can make reservations,
              food orders, see your deliveries on the way and much more.
            </p>
            <div className="app__stores">
              <Link to="">
                <img src={app1} alt="" className="app__store" />
              </Link>
              <Link to="">
                <img src={app2} alt="" className="app__store" />
              </Link>
            </div>
          </div>
          <img src={app} alt="" className="app__img" />
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default DownloadApp;
