import stringToKebabCase from './string-to-kebab-case';

export default function objectKeysToKebabCase<T>(
  object: T,
): T {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const objectCopy = object as Record<string, unknown>;
  const objectKeys = Object.keys(object);

  const newObject: Record<string, unknown> = {};
  objectKeys.forEach((objectKey) => {
    const objectValue: unknown = objectCopy[objectKey];
    const newObjectKey: string = stringToKebabCase(objectKey);
    newObject[newObjectKey] = objectValue;
  });
  return newObject as T;
}
