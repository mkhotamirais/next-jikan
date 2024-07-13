"use client";

import React from "react";
import DataList from "../../(components)/DataList";
import DataTitle from "../../(components)/DataTitle";
import Pagination from "../../(components)/Pagination";
import { useAnim } from "../../../store/useAnim";
import { useEffect } from "react";
import { fetchData } from "../../(components)/action";

export default function SearchKeyword({ params }) {
  const { page, searchResult, setSearchResult } = useAnim();

  useEffect(() => {
    const getAnime = async () => {
      const data = await fetchData({ resource: "anime", query: `q=${params.keyword}&page=${page}` });
      setSearchResult(data);
    };
    getAnime();
  }, [page, setSearchResult, params]);

  return (
    <div>
      <DataTitle>
        Result for: <span className="italic text-jikan-accent">{decodeURI(params.keyword)}</span>
      </DataTitle>
      <Pagination lastPage={searchResult?.pagination?.last_visible_page} />
      {searchResult ? (
        <DataList data={searchResult} />
      ) : (
        <div className="w-full flex justify-center mt-16">
          <div className="custom-loader"></div>;
        </div>
      )}
    </div>
  );
}
