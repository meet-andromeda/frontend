import objectKeysToSnakeCase from './object-keys-to-snake-case';

function arrayObjectKeysToSnakeCase<T>(
  array: Array<T>,
): Array<T> {
  const newArray: T[] = [];
  array.forEach((item) => {
    newArray.push(objectKeysToSnakeCase<T>(item));
  });

  return newArray as Array<T>;
}

export default arrayObjectKeysToSnakeCase;
