import { Link } from 'react-scroll';
import home from '../../img/home.png';
import ScrollRevealAnimation from '../../ScrollRevealAnimation';

function Home() {
  return (
    <ScrollRevealAnimation timing="1">
      <section className="home" id="home">
        <div className="home__container container d-grid">
          <div className="home__data">
            <h1 className="home__title">Tasty Food</h1>
            <h2 className="home__subtitle">
              Try the best food of <br />
              the week.
            </h2>
            <Link to="" className="button">
              View Menu
            </Link>
          </div>
          <img src={home} alt="" className="home__img" />
        </div>
      </section>
    </ScrollRevealAnimation>
  );
}

export default Home;
