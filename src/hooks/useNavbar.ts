import { useState } from 'react';

export interface NavBarItem {
  index: number;
  title: string;
  path: string;
  isActive: boolean;
}

export function useNavbar(toggleMenu: any) {
  const [navBarData, setNavbarData] = useState([
    { index: 1, title: 'Home', path: 'home', isActive: true },
    { index: 2, title: 'About', path: 'about', isActive: false },
    { index: 3, title: 'Services', path: 'services', isActive: false },
    { index: 4, title: 'Menu', path: 'menu', isActive: false },
    { index: 5, title: 'App', path: 'app', isActive: false },
    { index: 6, title: 'Contact', path: 'contact', isActive: false },
  ]);

  //  When an user clicks on a nav link:
  //    1. The link being clicked is going to be active. Others will not.
  //    2. (Mobile only) Hide nav menu when a link is being clicked.
  //  Set isActive of the clicked nav to be 'true', others will be 'false'.

  function handleClickOnNavLink(item: NavBarItem) {
    const newNavBarData = navBarData.map((navLink) => {
      return navLink.index !== item.index
        ? {
            ...navLink,
            isActive: false,
          }
        : {
            ...navLink,
            isActive: true,
          };
    });

    setNavbarData(newNavBarData);
    toggleMenu(); // Close the menu after clicking a link
  }

  return { navBarData, handleClickOnNavLink };
}
