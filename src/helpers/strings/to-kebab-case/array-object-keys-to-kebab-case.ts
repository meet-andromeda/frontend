import objectKeysToKebabCase from './object-keys-to-kebab-case';

function arrayObjectKeysToKebabCase<T>(
  array: Array<T>,
): Array<T> {
  const newArray: T[] = [];
  array.forEach((item) => {
    newArray.push(objectKeysToKebabCase<T>(item));
  });

  return newArray as Array<T>;
}

export default arrayObjectKeysToKebabCase;
