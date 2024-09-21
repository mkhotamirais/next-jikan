"use client";

import { motion } from "framer-motion";
import React from "react";
import { AnimeList } from "../types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DataList({ data }: { data: AnimeList["data"] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2 py-2">
      {data.map((item, i: number) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.05 } }}
          key={item.mal_id}
          className="relative h-72 w-full overflow-hidden group"
        >
          <div className="group-hover:translate-y-full transition absolute bg-black/50 h-24 bottom-0 left-0 right-0 flex items-center justify-center font-arvo text-center">
            {item.title}
          </div>
          <Button
            variant={"outline"}
            size={"lg"}
            asChild
            className="scale-0 group-hover:scale-100 transition absolute bottom-4 left-1/2 -translate-x-1/2"
          >
            <Link href={`/detail/${item.mal_id}`}>Detail</Link>
          </Button>
          <Image
            src={item.images.jpg.image_url}
            alt={item.title}
            width={200}
            height={200}
            className="rounded-md object-cover w-full h-full object-center"
            priority
          />
        </motion.div>
      ))}
    </div>
  );
}
