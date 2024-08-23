import { Reducer, useCallback, useReducer } from 'react';

type Action<T, E> = {
  type: 'idle';
} | {
  type: 'loading';
} | {
  type: 'success';
  data: T;
} | {
  type: 'error';
  error: E;
};

interface RequestState<T, E> {
  isLoading: boolean;
  error: E | undefined;
  data: T | undefined;
}

const initialState = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

const requestStateReducer = <T, E>(
  state: RequestState<T, E>,
  action: Action<T, E>,
): RequestState<T, E> => {
  switch (action.type) {
    case 'loading': {
      return {
        ...initialState,
        isLoading: true,
      };
    }
    case 'success': {
      return {
        ...state,
        error: undefined,
        isLoading: false,
        data: action.data,
      };
    }
    case 'error': {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case 'idle': {
      return {
        ...state,
        isLoading: false,
        data: undefined,
        error: undefined,
      };
    }
    default:
      return state;
  }
};

interface UseRequestStateHandlerResponse<T, E> {
  requestState: RequestState<T, E>;
  startRequest: () => void;
  onSuccessRequest: (data: T) => void;
  onErrorRequest: (error: E) => void;
  resetRequest: () => void;
}

interface UseRequestStateHandlerParams {
  isLoading?: boolean;
}

function useRequestStateHandler<T, E>({
  isLoading,
}: UseRequestStateHandlerParams = {}): UseRequestStateHandlerResponse<T, E> {
  const [state, dispatch] = useReducer<Reducer<
  RequestState<T, E>, Action<T, E>>
  >(
    requestStateReducer,
    {
      ...initialState,
      isLoading: isLoading ?? initialState.isLoading,
    },
  );

  const startRequest = useCallback(() => {
    dispatch({
      type: 'loading',
    });
  }, []);

  const onSuccessRequest = useCallback((data: T) => {
    dispatch({
      type: 'success',
      data,
    });
  }, []);

  const onErrorRequest = useCallback((error: E) => {
    dispatch({
      type: 'error',
      error,
    });
  }, []);

  const resetRequest = useCallback(() => {
    dispatch({
      type: 'idle',
    });
  }, []);

  return {
    startRequest,
    onSuccessRequest,
    onErrorRequest,
    resetRequest,
    requestState: state,
  };
}

export default useRequestStateHandler;
