import { fetchWithTimeout } from '../utils/utilFuncs';

const baseUrl = '/api/books';

// Creating options for fetch
const createOptions = (method: string, body?: any, headers?: HeadersInit) => {
  return {
    method,
    body: JSON.stringify(body),
    headers,
  };
};

export const getBooks = async () => {
  try {
    const response = await fetchWithTimeout(baseUrl);
    return response.json();
  } catch (error) {
    console.log('Error getting books', error);
  }
};

export const create = async (data: FormValues) => {
  try {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append('Content-Type', 'application/json');

    const response = await fetchWithTimeout(
      baseUrl,
      createOptions('POST', data, requestHeaders)
    );
    return response.json();
  } catch (error) {
    console.log('Error with saving a new book');
    console.log(error);
  }
};

export const remove = async (id: number) => {
  try {
    await fetchWithTimeout(`${baseUrl}/${id}`, createOptions('DELETE'));
  } catch (error) {
    console.log('Error with deleting a book');
    console.log(error);
  }
};

export const update = async (data: FormValues) => {
  try {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append('Content-Type', 'application/json');

    const response = await fetchWithTimeout(
      `${baseUrl}/${data.id}`,
      createOptions('PUT', data, requestHeaders)
    );
    return response.json();
  } catch (error) {
    console.log('Error with updating a book');
    console.log(error);
  }
};
