const urlWithSearchParams = (
  baseUrl: string,
  searchParams: Record<string, string | number>
) => {
  const url = new URL(baseUrl);

  Object.entries(searchParams).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  return url.toString();
};

export default urlWithSearchParams;
