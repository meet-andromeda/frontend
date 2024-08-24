import { useState } from 'react';
import { useReadContract } from 'wagmi';
import useDeepCompareEffect from 'use-deep-compare-effect';
import loginAbi from './abis/login-abi';
import { Address0x } from 'types';

interface UseIsAdminResponse {
  isAdmin: boolean;
  isLoading: boolean
}

interface UseIsAdminProps {
  userAddress: Address0x | undefined,
}

interface IsAdminResult {
  data?: boolean,
  isLoading: boolean
}

/**
 * Returns true if the userAddress is an Andromeda management wallet
 */
const useIsAdmin = ({ userAddress }: UseIsAdminProps): UseIsAdminResponse => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const {
    data, isLoading,
  }: IsAdminResult = useReadContract({
    address: '0x2e650b7D52d7B9d2463eA50957964978FB2705Fd',
    abi: loginAbi,
    functionName: 'isAdmin',
    chainId: 137,
    args: [userAddress as Address0x],
  });
  useDeepCompareEffect(() => {
    const isAdminResponse = async (): Promise<void> => {
      if (data) {
        setIsAdmin(data);
      } else {
        setIsAdmin(false);
      }
    };
    isAdminResponse();
  }, [
    data,
    userAddress,
    setIsAdmin,
  ]);
  return {
    isAdmin,
    isLoading,
  };
};

export default useIsAdmin;
