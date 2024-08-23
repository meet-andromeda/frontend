import { getQueryString } from 'helpers/api-requests/url-builder';

interface AddQueryStringParametersToUrl {
  url: string;
  queryParams: Record<string, string>;
}

function addQueryStringParametersToUrl({
  url,
  queryParams,
}: AddQueryStringParametersToUrl): string {
  if (Object.values(queryParams).length) {
    return `${url}?${getQueryString(queryParams)}`;
  }

  return url;
}

export default addQueryStringParametersToUrl;
