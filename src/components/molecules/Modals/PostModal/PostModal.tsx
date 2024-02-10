"use client";
import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
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

  const [showButtonText, setShowButtonText] =
    useState<ShowButtonText>("show more");
  const [isUser, setIsUser] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentContent, setCommentContent] = useState("");

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
    changeShowButtonText();
  };

  /**
   * Show comment box onclick if user is authenticated
   */
  const handleShowCommentArea = () => {
    setShowCommentBox(true);
  };

  /**
   * Handles setting the
   * @param e ChangeEvent<HTMLTextAreaElement> event from comment text area
   */
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  /**
   * Handles submission of request to post comment
   * @param e KeyboardEvent<HTMLTextAreaElement> keyboard event from text area
   */
  const handleCommentKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.key === "Enter" && !e.shiftKey) {
      console.log("handle post comment");
    } else if (e.key === "Backspace") {
      console.log("key ", e.key);
      setCommentContent((prevState) => prevState.slice(0, -1));
    } else {
      setCommentContent((prevState) => prevState + e.key);
    }
  };

  return (
    <article className="bg-white shadow-lg rounded-lg w-full mx-auto mb-8 pt-4 pb-8">
      <div className="px-4 py-2">
        <h2 className="my-4 h-6 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="my-4 h-4 text-gray-600 text-sm">
          published: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <div
        className="px-4 py-2 overflow-hidden transition-max-h duration-300 ease-in-out"
        style={
          showButtonText === "show more"
            ? { maxHeight: "12rem" }
            : { maxHeight: "60rem" }
        }
      >
        <p className=" text-gray-700 text-md">{content}</p>
      </div>
      <div className="py-2 text-center mt-2">
        <button
          className="text-purple-500 font-light hover:opacity-90"
          onClick={handleShowContent}
        >
          {showButtonText}
        </button>
      </div>
      <div className={`pt-3 pl-2 border-t-2 text-left hover:opacity-90`}>
        <div className="flex">
          <form className="flex flex-grow items-center mx-2">
            <textarea
              className="flex-grow border-2 rounded-lg text-black bg-white h-full p-4"
              placeholder="Make a comment here"
              value={commentContent}
              onChange={handleCommentChange}
            />
            <button
              className="text-black border-2 rounded-lg px-6 h-full "
              type="submit"
            >
              Post
            </button>
          </form>
        </div>
        <div
          className={`flex hover:cursor-pointer justify-end pr-12 mt-8`}
          onClick={handleShowCommentArea}
        >
          <FaComment className="text-purple-600 text-xl" />
          {isUser ? (
            <button className={`text-purple-500 pl-2`}>View Comments</button>
          ) : (
            <Link
              as="/auth/signin"
              prefetch
              className={`text-purple-500 pl-2`}
              href="/auth/signin"
            >
              View Comments
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostModal;
