// src/hooks/useGetUser.ts
import { useState, useEffect } from 'react';
import apiRequests from 'helpers/api-requests';

const useGetUserData = (userAddress: string): any => {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        const response = await apiRequests.get(`https://api.meetandromeda.com/user/${userAddress}`);
        setUserData(response);
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

  return { userData, error };
};

export default useGetUserData;
