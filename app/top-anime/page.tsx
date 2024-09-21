"use client";

import { useJikan } from "@/hooks/use-jikan";
import { useEffect, useState } from "react";
import { fetchData } from "../actions";
import DataList from "../(components)/data-list";
import { Pagination } from "../(components)/pagination";
import LoaderFade from "@/components/loader-fade";

export default function TopAnimeServer() {
  const { page, topAnime, setTopAnime } = useJikan();
  const [pending, setPending] = useState(false);

  const total = topAnime?.pagination?.items?.total;
  const last_visible_page = topAnime?.pagination?.last_visible_page;

  useEffect(() => {
    setPending(true);
    const getAnime = async () => {
      await fetchData("top/anime", `page=${page}`)
        .then((res) => {
          setTopAnime(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setPending(false));
    };
    getAnime();
  }, [page, setTopAnime]);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-4 mb-2">Top Anime</h1>
      <Pagination total={Number(total)} lastPage={Number(last_visible_page)} />
      {pending ? (
        <LoaderFade />
      ) : (
        <>
          {topAnime?.data.length ? (
            <>
              <DataList data={topAnime?.data} />
            </>
          ) : (
            <p className="text-destructive text-xl">No result</p>
          )}
        </>
      )}
      <Pagination total={Number(total)} lastPage={Number(last_visible_page)} />
    </div>
  );
}
