"use client";

import Youtube from "react-youtube";
export default function TrailerYoutube({ data }) {
  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      <Youtube videoId={data.youtube_id} onReady={(e) => e.target.pauseVideo()} opts={{ width: "100%", height: 390 }} />
    </div>
  );
}
