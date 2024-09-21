"use client";

import React from "react";
import { AnimeList } from "../types";
import DataListTitle from "./data-list-title";
import DataList from "./data-list";

export default function TopAnimeClient({ topAnime }: { topAnime: AnimeList }) {
  return (
    <>
      <DataListTitle title="Top Anime" />
      <DataList data={topAnime.data} />
    </>
  );
}
