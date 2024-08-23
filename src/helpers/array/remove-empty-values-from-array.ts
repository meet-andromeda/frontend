function removeEmptyValuesFromArray(array: unknown[]): unknown[] {
  return array.filter((item) => typeof item !== 'undefined' && item !== null && item !== '');
}

export default removeEmptyValuesFromArray;
