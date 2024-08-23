import { useCallback } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';

interface UseWalletConnectionModalResponse {
  openWalletConnectionModal: () => void;
}

function useWalletConnectionModal(): UseWalletConnectionModalResponse {
  const { openConnectModal } = useConnectModal();

  const openWalletConnectionModal = useCallback(() => {
    if (!openConnectModal) {
      return;
    }
    openConnectModal();
  }, [openConnectModal]);

  return {
    openWalletConnectionModal,
  };
}

export default useWalletConnectionModal;
