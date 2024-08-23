type LocationState = {
  from: string;
};

function isLocationState(state: unknown): state is LocationState {
  return typeof state === 'object' && state !== null && 'from' in state;
}

export default isLocationState;
