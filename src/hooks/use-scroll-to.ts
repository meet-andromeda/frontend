import {
  useCallback,
} from 'react';

interface ScrollIntoViewParams {
  element: HTMLElement;
}

interface UseScrollToResponse {
  scrollIntoView: (params: ScrollIntoViewParams) => void;
}

function useScrollTo(): UseScrollToResponse {
  const scrollIntoView = useCallback(({ element }: ScrollIntoViewParams) => {
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return {
    scrollIntoView,
  };
}

export default useScrollTo;
