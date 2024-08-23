import snakeCase from 'lodash.snakecase';

export default function stringToSnakeCase(text: string): string {
  return snakeCase(text);
}
