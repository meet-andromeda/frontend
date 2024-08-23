import { Connector, CreateConnectorFn, useConnect } from 'wagmi';

interface UseConnectWalletResponse {
  connectors: readonly Connector[];
  isWalletConnectionLoading: boolean;
  isWalletConnectionSuccess: boolean;
  walletConnectionErrorMessage: string;
  walletConnectorBeingConnected?: Connector | CreateConnectorFn;
  connectWallet: (ReturnType<typeof useConnect>)['connect'];
  resetWalletConnection: () => void;
}

function useConnectWallet(): UseConnectWalletResponse {
  const {
    connect: connectWallet,
    isPending: isWalletConnectionLoading,
    error,
    isSuccess: isWalletConnectionSuccess,
    reset: resetWalletConnection,
    variables,
    connectors,
  } = useConnect();
  const { connector: walletConnectorBeingConnected } = variables || {};

  return {
    connectors,
    isWalletConnectionLoading,
    isWalletConnectionSuccess,
    walletConnectionErrorMessage: error?.message ?? '',
    walletConnectorBeingConnected,
    connectWallet,
    resetWalletConnection,
  };
}

export default useConnectWallet;
