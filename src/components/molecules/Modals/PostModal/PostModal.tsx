"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FaComment } from "react-icons/fa";
import Link from "next/link";

/**
 * Element for each blog post
 */
const PostModal = ({
  title,
  content,
  createdAt,
}: {
  title: string;
  content: string;
  createdAt: Date;
}) => {
  type ShowButtonText = "show more" | "show less";
  const formattedPost =
    content.length > 500 ? `${content.slice(0, 500)}...` : content;
  const [contentChanges, setContentChanges] = useState(formattedPost);
  const [showButtonText, setShowButtonText] =
    useState<ShowButtonText>("show more");
  const [isUser, setIsUser] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const { status } = useSession();

  /**
   * Check if a user is logged in for allowing comments and posting
   */
  useEffect(() => {
    if (status === "authenticated") {
      setIsUser(true);
    }
  }, [status]);

  /**
   * Based on what the button text is, decide whether to show the whole blog post or less of it's text
   */
  const changeContentWordCount = () => {
    if (showButtonText === "show more") setContentChanges(content);
    else setContentChanges(formattedPost);
  };
  /**
   * Change button text to opposite of current value
   */
  const changeShowButtonText = () => {
    if (showButtonText === "show more") setShowButtonText("show less");
    else setShowButtonText("show more");
  };

  /**
   * Handler function for showing all or less of blog post content
   */
  const handleShowContent = () => {
    changeContentWordCount();
    changeShowButtonText();
  };

  /**
   * Show comment box onclick if user is authenticated
   */
  const handleShowCommentArea = () => {
    setShowCommentBox(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full mx-auto mb-8 pt-4 pb-8">
      <div className="px-4 py-2">
        <h2 className="my-4 h-6 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="my-4 h-4 text-gray-600 text-sm">
          published: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <article className="px-4 py-2 text-wrap">
        <p className=" text-gray-700 text-md">{contentChanges}</p>
      </article>
      <div className="py-2 text-center">
        <button
          className="text-purple-500  font-light hover:opacity-90"
          onClick={handleShowContent}
        >
          {showButtonText}
        </button>
      </div>
      <div className={`pt-3 pl-2 border-t-2 w-full text-left hover:opacity-90`}>
        <div
          className={`flex w-fit hover:cursor-pointer`}
          onClick={handleShowCommentArea}
        >
          <FaComment className="text-purple-600 text-xl" />
          {isUser ? (
            <button className={`text-purple-500 pl-2`}>Comment</button>
          ) : (
            <Link
              as="/auth/signin"
              prefetch
              className={`text-purple-500 pl-2`}
              href="/auth/signin"
            >
              Comment
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
