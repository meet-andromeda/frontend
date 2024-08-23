function isNotFoundError(error: Error): boolean {
  return error.name === 'NotFoundError';
}

export default isNotFoundError;
