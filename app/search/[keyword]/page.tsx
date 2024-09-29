"use client";

import { fetchData } from "@/app/actions";
import React, { useEffect } from "react";
import DataListTitle from "@/app/(components)/data-list-title";
import DataList from "@/app/(components)/data-list";
import { AnimeList } from "@/app/types";
import LoaderFade from "@/components/loader-fade";
import { Pagination } from "@/app/(components)/pagination";
import { useJikan } from "@/hooks/use-jikan";

export default function SearchKeyword({ params }: { params: { keyword: string } }) {
  const [searchResult, setSearchResult] = React.useState<AnimeList | null>(null);
  const [pending, setPending] = React.useState(false);
  const { page } = useJikan();
  const total = searchResult?.pagination?.items?.total;
  const last_visible_page = searchResult?.pagination?.last_visible_page;

  useEffect(() => {
    setPending(true);
    const getAnime = async () => {
      await fetchData("anime", `q=${params.keyword}&page=${page}`)
        .then((data) => {
          setSearchResult(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setPending(false));
    };
    getAnime();
  }, [params, page]);

  return (
    <div className="container">
      <DataListTitle title="Search Result" keyword={decodeURI(params.keyword)} />
      <Pagination total={Number(total)} lastPage={Number(last_visible_page)} />
      {pending ? (
        <LoaderFade />
      ) : (
        <>
          {searchResult?.data.length ? (
            <>
              <DataList data={searchResult?.data} />
            </>
          ) : (
            <p className="text-destructive text-xl">No result</p>
          )}
        </>
      )}
      {/* <Pagination total={Number(total)} lastPage={Number(last_visible_page)} /> */}
    </div>
  );
}
