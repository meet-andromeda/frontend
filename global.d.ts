type IosCommunicationHandlerKeys = keyof typeof iosCommunicationHandlers;
type IosCommunicationHandlerValues = typeof iosCommunicationHandlers[IosCommunicationHandlerKeys];

interface Window {
  webkit?: {
    messageHandlers: Record<IosCommunicationHandlerValues, {
      postMessage: (message: string | null) => void;
    }>;
  };
}
