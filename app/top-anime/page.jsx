"use client";

import Title from "../(components)/Title";
import Pagination from "../(components)/Pagination";
import DataList from "../(components)/DataList";
import { fetchData } from "../(components)/action";
import { useEffect, useState } from "react";
import { useAnim } from "../../store/useAnim";

export default function TopAnimeServer() {
  const { page, setPage, topAnime, setTopAnime } = useAnim();

  useEffect(() => {
    const getAnime = async () => {
      const data = await fetchData({ resource: "top/anime", query: `page=${page}` });
      setTopAnime(data);
    };
    getAnime();
  }, [page, setTopAnime]);

  return (
    <div>
      <Title>Top Anime</Title>
      <Pagination lastPage={topAnime?.pagination?.last_visible_page} />
      {topAnime ? (
        <DataList data={topAnime} />
      ) : (
        <div className="w-full flex justify-center mt-16">
          <div className="custom-loader"></div>;
        </div>
      )}
    </div>
  );
}
