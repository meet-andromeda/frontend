import kebabCase from 'lodash.kebabcase';

export default function stringToKebabCase(text: string): string {
  return kebabCase(text);
}
