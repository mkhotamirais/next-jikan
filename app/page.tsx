import { Suspense } from "react";
import TopAnime from "./(components)/top-anime";
import LoaderFade from "@/components/loader-fade";

export default async function HomePage() {
  return (
    <div className="container">
      <Suspense fallback={<LoaderFade />}>
        <TopAnime />
      </Suspense>
    </div>
  );
}
