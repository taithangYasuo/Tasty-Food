import { Link } from 'react-scroll';
import { useScrollY } from '../hooks/useScrollY';

function BackToTop() {
  const windowScrollY = useScrollY();

  return (
    // When the scroll is bigger than 560 viewport height,
    // add the show-scroll class to the a tag with the scroll-top class
    <Link
      to="home"
      className={windowScrollY >= 560 ? 'scrolltop show-scroll' : 'scrolltop'}
      id="scroll-top"
    >
      <i className="bx bx-chevron-up scrolltop__icon" />
    </Link>
  );
}

export default BackToTop;
