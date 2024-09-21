const url = process.env.NEXT_PUBLIC_JIKAN_ANIME;

export async function fetchData(resource?: string, query?: string) {
  const response = await fetch(`${url}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
}
