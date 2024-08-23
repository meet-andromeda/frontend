import objectKeysToCamelCase from './object-keys-to-camel-case';

function arrayObjectKeysToCamelCase<T>(
  array: Array<T>,
): Array<T> {
  const newArray: T[] = [];
  array.forEach((item) => {
    newArray.push(objectKeysToCamelCase<T>(item));
  });

  return newArray as Array<T>;
}

export default arrayObjectKeysToCamelCase;
