// Customized fetch that has shorter wait time before the request is aborted
export const fetchWithTimeout = async (url: string, options?: RequestInit) => {
  const timeout = 12000;

  const controller = new AbortController();
  const signal = controller.signal;

  const ticToc = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(url, {
    ...options,
    signal,
  });
  clearTimeout(ticToc);

  return response;
};
