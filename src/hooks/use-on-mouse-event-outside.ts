import { RefObject, useCallback, useEffect } from 'react';

export type MouseEventName = 'click' | 'mouseenter' | 'mouseleave' | 'click,mouseenter';

interface UseOnClickOutsideProps {
  containerRef: RefObject<HTMLElement>;
  mouseEvent?: MouseEventName;
  onMouseEventOutsideCallback: () => void;
}

function useOnMouseEventOutside({
  containerRef,
  mouseEvent = 'click,mouseenter' as MouseEventName,
  onMouseEventOutsideCallback,
}: UseOnClickOutsideProps): void {
  const isMouseEventOutside = useCallback(
    (event: MouseEvent): boolean => {
      if (event.target instanceof Node && containerRef.current) {
        return !containerRef.current.contains(event.target);
      }

      return false;
    },
    [containerRef],
  );

  const onDocumentTriggered = useCallback((event: MouseEvent): void => {
    if (isMouseEventOutside(event)) {
      onMouseEventOutsideCallback();
    }
  }, [isMouseEventOutside, onMouseEventOutsideCallback]);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }
    switch (mouseEvent) {
      case 'click,mouseenter':
        document.addEventListener('mouseenter', onDocumentTriggered);
        document.addEventListener('click', onDocumentTriggered);
        return () => {
          document.removeEventListener('mouseenter', onDocumentTriggered);
          document.removeEventListener('click', onDocumentTriggered);
        };
      default:
        document.addEventListener(mouseEvent, onDocumentTriggered);
        return () => {
          document.removeEventListener(mouseEvent, onDocumentTriggered);
        };
    }
  }, [containerRef, mouseEvent, onDocumentTriggered]);
}

export default useOnMouseEventOutside;
