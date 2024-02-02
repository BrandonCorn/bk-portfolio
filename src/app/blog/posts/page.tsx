// first things first, we need to fetch all the blogs, let's do that whenever a user navigates to the blog page for performance
// we need to store the blog posts in redux so that the posts page has access to it
//
// next, we need to be able
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState(2);
  const path = usePathname();

  const pageNumbers = Math.ceil(13 / 3);

  const anchorArray = Array.from({ length: pageNumbers }, (_, index) => {
    const href = `${path}/${index + 1}`;
    return (
      <Link className="px-2" href={href}>
        {index + 1}
      </Link>
    );
  });

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      always page 1 of the blog posts
      <div className="flex items-center justify-center">{anchorArray}</div>
    </div>
  );
}
