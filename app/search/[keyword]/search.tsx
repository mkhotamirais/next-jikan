"use client";

import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useJikan } from "@/hooks/use-jikan";
import { useRouter } from "next/navigation";

export function SearchTrigger() {
  const { cari, showCari, hideCari } = useJikan();
  const onClick = () => {
    if (cari) hideCari();
    else showCari();
  };
  return (
    <Button onClick={onClick} variant={"outline"} size={"icon"} className="flex sm:hidden">
      <SearchIcon className="size-5 text-primary" />
    </Button>
  );
}
export function Search() {
  const { cari, hideCari } = useJikan();

  const { push } = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const key = e.currentTarget.cari.value;
    if (key) {
      push(`/search/${key}`);
      if (cari) hideCari();
    } else {
      push(`/`);
    }
  };

  return (
    <div
      className={`${
        cari ? "scale-y-100" : "scale-y-0"
      } transition origin-top sm:scale-y-100 fixed sm:static top-16 left-0 right-0 bg-secondary sm:bg-inherit p-3 sm:p-0`}
    >
      <form onSubmit={onSubmit} className="hidden sm:flex gap-2">
        <Input id="cari" name="cari" placeholder="Search here.." className="w-full sm:w-auto" />
        <Button type="submit" className="" size={"icon"}>
          <SearchIcon className="size-4" />
        </Button>
      </form>
    </div>
  );
}
