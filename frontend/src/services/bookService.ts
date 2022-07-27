import { fetchWithTimeout } from '../utils/utilFuncs';

const baseUrl = '/api/books';

const createOptions = (method: string, body: any, headers: HeadersInit) => {
  return {
    method,
    body: JSON.stringify(body),
    headers,
  };
};

export const create = async (data: BookType) => {
  try {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append('Content-Type', 'application/json');

    const response = await fetchWithTimeout(
      baseUrl,
      createOptions('POST', data, requestHeaders)
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
