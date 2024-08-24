import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material';
import useOnMouseEventOutside from 'hooks/use-on-mouse-event-outside';
import { ui } from 'global-constants';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onBackgroundClick?: () => void;
  onEscapeKeyDown?: () => void;
}

const Backdrop = styled('div')`
  align-items: center;
  background-color: ${({ theme }) => theme.background.scrim};
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: ${ui.zIndexes.modalBackDrop};
`;

const Container = styled('div')`
  position: relative;
  background-color: ${({ theme }) => theme.background.main};
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  z-index: ${ui.zIndexes.modalContent};

  ${(props) => props.theme.breakpoints.down('sm')} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 31.25rem;
    overflow: auto;
  }
`;

function ModalContainer({
  isOpen,
  onBackgroundClick,
  onEscapeKeyDown,
  children,
}: ModalProps): JSX.Element | null {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDownEvent = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && onEscapeKeyDown) {
        onEscapeKeyDown();
      }
    };

    if (!isOpen) {
      return undefined;
    }

    document.addEventListener('keydown', onKeyDownEvent);

    return () => {
      document.removeEventListener('keydown', onKeyDownEvent);
    };
  }, [isOpen, onEscapeKeyDown]);

  useOnMouseEventOutside({
    containerRef: modalRef,
    onMouseEventOutsideCallback: () => {
      if (onBackgroundClick) {
        onBackgroundClick();
      }
    },
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Backdrop>
      <Container ref={modalRef}>
        {children}
      </Container>
    </Backdrop>
  );
}

export default ModalContainer;
