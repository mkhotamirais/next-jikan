export async function fetchData(resource, query) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
}

export async function fetchRecommendedData(resource, objectProperty) {
  let anime = await fetchData(resource);
  anime = anime.data.flatMap((item) => item[objectProperty]);
  anime = sliceRecommendedData(anime);
  return anime;
}

function sliceRecommendedData(data, gap = 8) {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const result = { data: data.slice(first, last) };
  return result;
}
