import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import ModalContainer from 'components/containers/modal-container';
import { useContextFactory } from 'contexts/hooks';

type Component = React.ReactNode;

interface ShowModalParams {
  component: Component;
}

interface ModalContextProps {
  component: Component;
  isOpen: boolean;
  hideModal: () => void;
  showModal: ({ component }: ShowModalParams) => void;
}

const ModalContext = createContext<ModalContextProps>({
  component: null,
  isOpen: false,
  hideModal: () => {},
  showModal: () => {},
});

interface ModalProviderContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

function ModalContextProvider({
  children,
}: ModalProviderContextProviderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [component, setComponent] = useState<Component>(null);

  const showModal = useCallback(({ component: newComponent }: ShowModalParams): void => {
    setComponent(newComponent);
    setIsOpen(true);
  }, []);

  const hideModal = useCallback((): void => {
    setComponent(null);
    setIsOpen(false);
  }, []);

  const context = useMemo(() => ({
    component,
    isOpen,
    showModal,
    hideModal,
  }), [
    isOpen,
    component,
    hideModal,
    showModal,
  ]);

  return (
    <ModalContext.Provider value={context}>
      <ModalContainer
        isOpen={isOpen}
        onEscapeKeyDown={hideModal}
      >
        {component}
      </ModalContainer>
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = (): ModalContextProps => useContextFactory({
  name: 'Modal',
  context: ModalContext,
});

export {
  ModalContext,
  useModalContext,
};

export default ModalContextProvider;
