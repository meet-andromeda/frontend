import { erc20Abi } from 'viem';
import { useState } from 'react';
import { useReadContract } from 'wagmi';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { polygon } from 'viem/chains';
import { Address0x } from 'types';

interface UseGetErc20Balance {
  balance: string;
  isLoading: boolean
}

interface UseGetErc20BalanceProps {
  userAddress: Address0x | undefined,
}

interface IsAdminResult {
  data?: bigint,
  isLoading: boolean
}

/**
 * Returns true if the userAddress is an Andromeda management wallet
 */
const useGetErc20Balance = ({ userAddress }: UseGetErc20BalanceProps): UseGetErc20Balance => {
  const [balance, setBalance] = useState<string>('');

  const {
    data, isLoading,
  }: IsAdminResult = useReadContract({
    address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    abi: erc20Abi,
    functionName: 'balanceOf',
    chainId: polygon.id,
    args: [userAddress as Address0x],
  });

  useDeepCompareEffect(() => {
    const isAdminResponse = async (): Promise<void> => {
      if (data) {
        setBalance((Number(data) / (10 ** 6)).toFixed(2));
      } else {
        setBalance('');
      }
    };
    isAdminResponse();
  }, [
    data,
    userAddress,
    setBalance,
  ]);
  return {
    balance,
    isLoading,
  };
};

export default useGetErc20Balance;
