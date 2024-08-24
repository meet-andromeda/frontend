import PageParams from './page-params';

interface UseRouterResponse {
  previousRoute?: string;
  goToHomePage: (params?: PageParams) => void;
  goToPreviousPage: (params?: PageParams) => void;
  goToWalletConnectionPage: (params?: PageParams) => void;
  goToWorkflowCreatePage: (params?: PageParams) => void;
}

export default UseRouterResponse;
