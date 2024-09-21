"use client";

import { fetchData } from "@/app/actions";
import React, { useEffect } from "react";
import DataListTitle from "@/app/(components)/data-list-title";
import DataList from "@/app/(components)/data-list";
import { AnimeList } from "@/app/types";

export default function SearchKeyword({ params }: { params: { keyword: string } }) {
  const [searchResult, setSearchResult] = React.useState<AnimeList>();
  // const { page, searchResult, setSearchResult } = useJikan();
  // const total = searchResult?.pagination?.items?.total;
  // const last_visible_page = searchResult?.pagination?.last_visible_page;
  const page = 1;

  useEffect(() => {
    const getAnime = async () => {
      const data = await fetchData("anime", `q=${params.keyword}&page=${page}`);
      setSearchResult(data);
    };
    getAnime();
  }, [params]);

  return (
    <div className="container">
      <DataListTitle title="Search Result" keyword={decodeURI(params.keyword)} />
      {searchResult ? (
        <>
          {/* <Pagination total={Number(total)} lastPage={Number(last_visible_page)} /> */}
          <DataList data={searchResult?.data} />
          {/* <Pagination total={Number(total)} lastPage={Number(last_visible_page)} /> */}
        </>
      ) : (
        // <LoaderJikan />
        <div>No data</div>
      )}
    </div>
  );
}
