import DataList from "./(components)/DataList";
import DataTitle from "./(components)/DataTitle";
import { fetchData, fetchRecommendedData } from "./(components)/action";

export default async function Home() {
  const topAnime = await fetchData("top/anime", "limit=8");
  const recomendationAnime = await fetchRecommendedData("recommendations/anime", "entry");

  return (
    <div>
      <section className="mb-4">
        <DataTitle href="/top-anime">Top Anime</DataTitle>
        <DataList data={topAnime} />
      </section>
      <section className="mb-4">
        <DataTitle>Recommendation</DataTitle>
        <DataList data={recomendationAnime} />
      </section>
    </div>
  );
}
