import { useState, useContext } from 'react';
import { Link } from 'react-scroll';

import { useScrollY } from '../hooks/useScrollY';
import { useToggle } from '../hooks/useToggle';
import { ThemeContext } from '../contexts/ThemeContext';
import { useNavbar } from '../hooks/useNavbar';

// Scroll to an element on click in React js
// https://medium.com/how-to-react/scroll-to-an-element-on-click-in-react-js-8424e478bb9

function Header() {
  const lightThemeIcon = 'bx bx-sun';
  const darkThemeIcon = 'bx bx-moon';
  const windowScrollY = useScrollY();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuActive, toggleMenu] = useToggle(false);
  const { navBarData, handleClickOnNavLink } = useNavbar(toggleMenu);

  return (
    <header
      className={windowScrollY >= 200 ? 'header scroll-header' : 'header'}
      id="header"
    >
      <nav className="nav container">
        <div>
          <Link to="home" className="nav__logo">
            Tasty Food
          </Link>
        </div>

        <div
          className={isMobileMenuActive ? 'nav__menu show-menu' : 'nav__menu'}
        >
          <ul className="nav__list">
            {navBarData.map((item) => {
              const { index, path, isActive, title } = item;
              return (
                <li key={index} className="nav__item">
                  <Link
                    to={path}
                    className={isActive ? 'nav__link active-link' : 'nav__link'}
                    onClick={() => handleClickOnNavLink(item)}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}

            <li>
              <i
                className={
                  theme === 'light'
                    ? `${lightThemeIcon} change-theme`
                    : `${darkThemeIcon} change-theme`
                }
                id="theme-button"
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </div>

        {/* Mobile only */}
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
