import DataList from "./(components)/DataList";
import DataTitle from "./(components)/DataTitle";
import { fetchData } from "./(components)/action";

export default async function Home() {
  const topAnime = await fetchData({ resource: "top/anime", query: "limit=8" });
  return (
    <div>
      <section className="mb-4">
        <DataTitle href="/top-anime">Top Anime</DataTitle>
        <DataList data={topAnime} />
      </section>
    </div>
  );
}
