import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useModalContext } from 'contexts/modal-context';

function CloseModal(): null {
  const { pathname } = useLocation();
  const { hideModal } = useModalContext();

  useEffect(() => {
    hideModal();
  }, [hideModal, pathname]);

  return null;
}

export default CloseModal;
