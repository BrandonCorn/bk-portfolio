"use client";
import { selectBlogPosts } from "@/redux/slices/postSlice/postSelectors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux";
import BasicTitle from "@/components/atoms/Titles/BasicTitle/BasicTitle";
import clsx from "clsx";
import { useState, useEffect } from "react";
import BlogPost from "@/components/organisms/BlogPost/BlogPost";

const blogTitle = "Moments Unscripted: A Continual Blog";

export default function Page({ params }: { params: { page: string } }) {
  const path = usePathname();
  const posts = useAppSelector(selectBlogPosts);
  const parsedNum = Number(params.page);
  const pageNumbers = Math.ceil(posts.length / 3);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /**
   * Constructs an Array of page number Links to navigate to each page of blogs posts
   */
  const anchorArray = Array.from({ length: pageNumbers }, (_, index) => {
    // slice the page number from the path and replace it with the correct page number for Link
    const href = `${path.slice(0, -1)}${index + 1}`;
    const isActive = index + 1 === parsedNum ? true : false;
    const classes = clsx(
      "px-3 cursor-pointer rounded-md hover:bg-slate-300 dark:hover:bg-slate-400",
      {
        "border-b-2": isActive,
      }
    );

    return (
      <Link key={index} className={classes} href={href}>
        {index + 1}
      </Link>
    );
  });

  // New array for posts to be rendered on the current page
  const currentPagePosts = posts.slice((parsedNum - 1) * 3, parsedNum * 3);

  return (
    <div>
      {!isClient ? (
        <div className="flex flex-col min-h-screen items-center justify-start">
          <div>
            <BasicTitle className="text-2xl" text={blogTitle} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen items-center justify-start">
          <div>
            <BasicTitle className="text-2xl" text={blogTitle} />
          </div>
          <div className="w-full max-w-3xl">
            {currentPagePosts &&
              currentPagePosts.map((post, index) => (
                <div
                  key={`post-${index}`}
                  id={`post-${index}`}
                  className="my-4 md:my-16"
                >
                  <BlogPost {...post} />
                </div>
              ))}
          </div>
          <div className="flex border-solid border-2 border-violet-500 rounded-xl px-4 py-2 items-center justify-center">
            {anchorArray}
          </div>
        </div>
      )}
    </div>
  );
}
