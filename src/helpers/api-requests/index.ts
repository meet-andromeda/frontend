type Payload = Record<string, unknown>;

const getOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const postOptions: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const deleteOptions: RequestInit = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
};

async function signBody(
  options: RequestInit,
  payload?: Payload,
): Promise<RequestInit> {
  if (!payload) {
    return options;
  }
  const body = JSON.stringify(payload);
  return {
    ...options,
    body,
  };
}

/**
 * Generic request function to specify the return data type
 */
async function request<TResponse>(
  url: string,
  options: RequestInit,
): Promise<TResponse> {
  const response = await fetch(url, options);
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return data;
}

/**
 * Generic get function using fetch
 *
 * @param url  The complete url to be requested
 *
 * @returns The api response
 */
async function get<TResponse>(
  url: string,
  additionalOptions?: RequestInit,
): Promise<TResponse> {
  const newOptions = additionalOptions
    ? {
      ...getOptions,
      ...additionalOptions,
    }
    : getOptions;

  return request<TResponse>(
    url,
    newOptions,
  );
}

/**
 * Generic post function using fetch
 *
 * @param url   The complete url to be requested
 * @param body  The body of the post request
 *
 * @returns The api response
 */
async function post<TResponse>(
  url: string,
  additionalOptions?: RequestInit,
  payload?: Payload,
): Promise<TResponse> {
  const newOptions = additionalOptions
    ? {
      ...postOptions,
      ...additionalOptions,
    }
    : postOptions;
  const signedOptions = await signBody(
    newOptions,
    payload,
  );

  return request<TResponse>(
    url,
    signedOptions,
  );
}

/**
 * Generic delete function using fetch
 *
 * @param url  The complete url to be requested
 *
 * @returns The api response
 */
async function deleteRequest<TResponse>(
  url: string,
  additionalOptions?: RequestInit,
): Promise<TResponse> {
  const newOptions = additionalOptions
    ? {
      ...deleteOptions,
      ...additionalOptions,
    }
    : deleteOptions;

  return request<TResponse>(
    url,
    newOptions,
  );
}

export default {
  get,
  post,
  deleteRequest,
};
