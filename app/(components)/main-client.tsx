"use client";

import { useJikan } from "@/hooks/use-jikan";
import React from "react";

export default function MainClient({ children }: { children: React.ReactNode }) {
  const { cari, hideCari } = useJikan();
  const onClick = () => {
    if (cari) hideCari();
  };
  return (
    <main onClick={onClick} className="grow">
      {children}
    </main>
  );
}
