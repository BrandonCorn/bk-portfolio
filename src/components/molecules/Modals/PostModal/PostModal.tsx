"use client";
import { useState, ChangeEvent } from "react";
import PostCommentForm from "../../Forms/BlogPostCommentForm/BlogPostCommentForm";
import ViewCommentsButton from "../../BlogPost/ViewCommentsButton/ViewCommentsButton";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import BlogPostTitle from "../../BlogPost/BlogPostTitle/BlogPostTitle";

type PostModalProps = {
  title: string;
  content: string;
  createdAt: Date;
};
/**
 * Element for each blog post
 */
const PostModal = ({ title, content, createdAt }: PostModalProps) => {
  type ShowButtonText = "show more" | "show less";

  const [showButtonText, setShowButtonText] =
    useState<ShowButtonText>("show more");
  const [isUser, setIsUser] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentContent, setCommentContent] = useState("");

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

  return (
    <article
      role="article"
      className="bg-white shadow-lg rounded-lg w-full mx-auto mb-8 pt-4 pb-8"
    >
      <BlogPostTitle title={title} createdAt={createdAt} />
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
        <BasicButton
          className="text-purple-500 font-light hover:text-purple-700"
          onClick={handleShowContent}
          aria-label={
            showButtonText === "show more"
              ? "Show more content"
              : "Show less content"
          }
        >
          {showButtonText}
        </BasicButton>
      </div>
      <div className="pt-3 pl-2 border-t-2 text-left hover:opacity-90">
        <div className="flex">
          <PostCommentForm
            commentContent={commentContent}
            handleCommentChange={handleCommentChange}
          />
        </div>
        <ViewCommentsButton handleShowCommentArea={handleShowCommentArea} />
      </div>
    </article>
  );
};

export default PostModal;
