"use client";
import { selectBlogPosts } from "@/redux/slices/postSlice/postSelectors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PostModal from "@/components/molecules/Modals/PostModal/PostModal";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux";

export default function Page({ params }: { params: { page: string } }) {
  const path = usePathname();
  const posts = useAppSelector(selectBlogPosts);

  const pageNumbers = Math.ceil(13 / 3);

  /**
   * Constructs an Array of page number Links to navigate to each page of blogs posts
   */
  const anchorArray = Array.from({ length: pageNumbers }, (_, index) => {
    // slice the page number from the path and replace it with the correct page number for Link
    const href = `${path.slice(0, -1)}${index + 1}`;
    return (
      <Link
        key={index}
        className="px-2 hover:bg-slate-600 cursor-auto"
        href={href}
      >
        {index + 1}
      </Link>
    );
  });

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="w-full max-w-3xl">
        {posts &&
          posts.map((post, index) => (
            <div key={`post-${index}`} id={`post-${index}`}>
              <PostModal {...post} />
            </div>
          ))}
      </div>
      <div className="flex border-solid border-2 border-emerald-500 rounded-xl px-4 py-2 items-center justify-center">
        {anchorArray}
      </div>
    </div>
  );
}
