import camelCase from 'lodash.camelcase';

export default function stringToCamelCase(text: string): string {
  return camelCase(text);
}
