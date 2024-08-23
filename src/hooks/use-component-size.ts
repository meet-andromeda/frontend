import { RefObject, useEffect, useState } from 'react';

interface UseComponentSizeProps {
  ref: RefObject<HTMLElement>;
}

interface Size {
  width: number;
  height: number;
}

function useComponentSize({
  ref,
}: UseComponentSizeProps): Size | undefined {
  const [size, setSize] = useState<Size>();

  useEffect(() => {
    if (ref.current) {
      setSize({
        height: ref.current.offsetHeight,
        width: ref.current.offsetWidth,
      });
    }
  }, [ref]);

  return size;
}

export default useComponentSize;
