"use client";
import { useState, ChangeEvent } from "react";
import BlogPostCommentForm from "@/components/molecules/Forms/BlogPostCommentForm/BlogPostCommentForm";
import ViewCommentsButton from "@/components/molecules/BlogPost/ViewCommentsButton/ViewCommentsButton";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import BlogPostTitle from "@/components/molecules/BlogPost/BlogPostTitle/BlogPostTitle";

type BlogPostProps = {
  title: string;
  content: string;
  createdAt: Date;
};

type ShowButtonText = "show more" | "show less";

/**
 * Container for blog post content including the post and it's info, comments on the post, and the ability to add comments by users
 * @param props
 * @param {} props.title - title of the blog post
 * @param {} props.content - content of the blog post
 * @param {} props.createdAt - The date and time when the blog post was created
 * @returns
 */
const BlogPost = ({ title, content, createdAt }: BlogPostProps) => {
  const [showButtonText, setShowButtonText] =
    useState<ShowButtonText>("show more");
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
          <BlogPostCommentForm
            commentContent={commentContent}
            handleCommentChange={handleCommentChange}
          />
        </div>
        <ViewCommentsButton handleShowCommentArea={handleShowCommentArea} />
      </div>
    </article>
  );
};

export default BlogPost;