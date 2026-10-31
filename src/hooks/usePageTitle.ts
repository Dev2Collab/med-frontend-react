import { useEffect } from 'react';

const BASE_TITLE = 'عيادة الشفاء';

export function usePageTitle(title?: string) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${BASE_TITLE}`;
    } else {
      document.title = `${BASE_TITLE} | رعاية طبية متكاملة باحترافية وثقة`;
    }
  }, [title]);
}

export default usePageTitle;

