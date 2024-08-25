// src/hooks/useGetUser.ts
import { useState, useEffect } from 'react';
import apiRequests from 'helpers/api-requests';

const useGetUserData = (userAddress: string): any => {
  const [circleUserAddress, setCircleUserAddress] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        const response: any = await apiRequests
          .get(`https://api.meetandromeda.com/users/${userAddress}`);
        setCircleUserAddress(response.wallets[137].address);
      } catch (catchError) {
        setError(error);
      }
    };

    if (userAddress) {
      fetchUser();
    }
  }, [
    userAddress,
    error]);

  return { circleUserAddress, error };
};

export default useGetUserData;
