import { fetchData } from "@/app/(components)/action";
import Image from "next/image";
import TrailerYoutube from "./TrailerYoutube";

export default async function DetailAnimeId({ params: { id } }) {
  const anime = await fetchData(`anime/${id}`);
  const data = anime?.data;
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-0 gap-y-8 sm:gap-x-3">
        <div className="col-span-1 flex flex-col gap-4">
          <Image
            src={anime.data.images.webp.image_url}
            width={300}
            height={300}
            alt="..."
            priority
            className="w-full rounded-lg overflow-hidden"
          />
          <TrailerYoutube data={anime.data.trailer} />
        </div>
        <div className="col-span-3 leading-relaxed flex flex-col gap-2">
          <div>
            <b>Title: </b>
            {anime.data.title}
          </div>
          <div>
            <b>Synopsis: </b>
            {anime.data.synopsis}
          </div>
          <div>
            <b>Genres: </b>
            <div className="inline-flex gap-2 flex-wrap">
              {anime.data.genres?.map((item) => (
                <a href={item.url} key={item.mal_id} className="underline">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <b>Year: </b>
            {anime.data.year}
          </div>
          <div>
            <b>Episodes: </b>
            {anime.data.episodes}
          </div>
          <div>
            <b>Source: </b>
            {anime.data.source}
          </div>
          <div>
            <b>Status: </b>
            {anime.data.status}
          </div>
          <div>
            <b>Type: </b>
            {anime.data.type}
          </div>
          <div>
            <b>Aired: </b>
            {anime.data.aired.string}
          </div>
          <div>
            <b>Duration: </b>
            {anime.data.duration}
          </div>
          <div>
            <b>Rank: </b>
            {anime.data.rank}
          </div>
          <div>
            <b>Season: </b>
            {anime.data.season}
          </div>
          <div>
            <b>Producers: </b>
            <div className="inline-flex gap-2 flex-wrap">
              {anime.data.producers?.map((item) => (
                <a href={item.url} key={item.mal_id} className="underline">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
