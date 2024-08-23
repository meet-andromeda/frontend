/**
 * Generic function to build the url replacing path params
 *
 * @param {object} args.path The original path to replace with params values
 * @param {object} args.params The object with params to replace on url
 * @returns the string with the query
 */
function buildUrlWithPathParams(
  path: string,
  params: { [param: string]: string | number } = {},
): string {
  let finalUrl = path;
  Object.entries(params).forEach(([key, value]) => {
    finalUrl = finalUrl.replace(`{${key}}`, value as string);
  });
  return finalUrl;
}

type ValidValueType = string | number | boolean;
type PossibleValueType = ValidValueType | null | undefined;
type ValidTupleType = [string, ValidValueType];

const removeInvalidOrEmptyValuesFromObject = (
  tuple: [string, PossibleValueType],
): tuple is ValidTupleType => {
  const value = tuple[1];

  if (typeof value === 'string') {
    return value.length > 0;
  }

  return typeof value !== undefined && value != null;
};

/**
 * Generic function to build the query string with received params
 * @param {object} params The object with params to build the query string
 * @returns the string with the query
 */
function getQueryString(
  params: Record<string, PossibleValueType>,
): string {
  const queryString = Object.entries(params)
    .filter(removeInvalidOrEmptyValuesFromObject)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return queryString;
}

export { buildUrlWithPathParams, getQueryString };
