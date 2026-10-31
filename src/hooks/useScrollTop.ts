import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to automatically scroll the window to the top on route change
 */
export function useScrollTop(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
}

export default useScrollTop;
