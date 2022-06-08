import { useState, useEffect } from 'react';

/**
 * This hook returns window.scrollY
 * @return window.scrollY
 */

export function useScrollY() {
  const [windowScrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollTop = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', scrollTop);
    // Call handler right away so state gets updated with initial window scrollY
    scrollTop();
    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', scrollTop);
  }, []); // Empty array ensures that effect is only run on mount
  return windowScrollY;
}

// Learn more here: https://usehooks.com/useWindowSize/
