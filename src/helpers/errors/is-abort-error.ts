function isAbortError(error: Error): boolean {
  return error.name === 'AbortError';
}

export default isAbortError;
