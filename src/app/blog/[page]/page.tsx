"use client";
import { selectBlogPosts } from "@/hooks/usePosts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PostModal from "@/components/molecules/Modals/PostModal/PostModal";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux";

export default function Page({ params }: { params: { page: string } }) {
  const path = usePathname();
  const posts = useAppSelector(selectBlogPosts);

  const pageNumbers = Math.ceil(posts.length / 3);
  console.log("posts ", posts);
  /**
   * Constructs an Array of page number Links to navigate to each page of blogs posts
   */
  const anchorArray = Array.from({ length: pageNumbers }, (_, index) => {
    const href = `${path}/${index + 1}`;
    return (
      <Link key={index} className="px-2" href={href}>
        {index + 1}
      </Link>
    );
  });

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {posts &&
        posts.map((post, index) => (
          <div key={`post-${index}`} id={`post-${index}`}>
            <PostModal {...post} />
          </div>
        ))}
      <div className="flex items-center justify-center">{anchorArray}</div>
    </div>
  );
}
