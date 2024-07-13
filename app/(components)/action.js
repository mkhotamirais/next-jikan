export async function fetchData({ resource, query }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
}
