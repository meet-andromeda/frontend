import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

function useGetQueryParams(): Record<string, string> {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const queryParams: Record<string, string> = {};

    searchParams.forEach((value: string, key: string) => {
      queryParams[key] = value;
    });

    return queryParams;
  }, [searchParams]);
}

export default useGetQueryParams;
