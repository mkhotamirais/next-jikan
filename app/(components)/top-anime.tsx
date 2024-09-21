import { AnimeList } from "../types";
import { fetchData } from "../actions";
import TopAnimeClient from "./top-anime-client";

export default async function TopAnime() {
  const topAnime: AnimeList = await fetchData("top/anime", "limit=12");

  return <TopAnimeClient topAnime={topAnime} />;
}
