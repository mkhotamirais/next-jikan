"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DataListTitle({
  title,
  keyword = "",
  href = "/",
}: {
  title: string;
  keyword?: string;
  href?: string;
}) {
  return (
    <div className="py-4 flex justify-between">
      <h2 className="text-2xl font-arvo text-primary">
        {title} <span className="text-primary italic">{keyword}</span>
      </h2>
      <Button asChild variant="outline">
        <Link href={href} className="flex items-center">
          <div>View All</div>
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    </div>
  );
}
