"use client";
import { useState, useEffect, ChangeEvent } from "react";
import BlogPostCommentForm from "@/components/molecules/Forms/BlogPostCommentForm/BlogPostCommentForm";
import ViewCommentsButton from "@/components/molecules/BlogPost/ViewCommentsButton/ViewCommentsButton";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import BlogPostTitle from "@/components/molecules/BlogPost/BlogPostTitle/BlogPostTitle";
import CommentList from "@/components/molecules/BlogPost/CommentList/CommentList";
import { useSession } from "next-auth/react";
import api from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux";
import { addNewComment } from "@/redux/slices/commentSlice/commentSlice";
import { Comment } from "@prisma/client";
import { motion } from "framer-motion";

type BlogPostProps = {
  id: number;
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
const BlogPost = ({ id, title, content, createdAt }: BlogPostProps) => {
  const [showButtonText, setShowButtonText] =
    useState<ShowButtonText>("show more");
  const [showComments, setShowComments] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [postCommentError, setPostCommentError] = useState<String | null>(null);
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  /**
   * Change button text to opposite of current value
   */
  const changeShowButtonText = () => {
    if (showButtonText === "show more") {
      setShowButtonText("show less");
    } else {
      setShowButtonText("show more");
      const titleElement = document.getElementById(`blog-post-${title}`);
      if (titleElement) titleElement.scrollIntoView({ behavior: "smooth" });
    }
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
    setShowComments(!showComments);
  };

  /**
   * Handles setting the
   * @param e ChangeEvent<HTMLTextAreaElement> event from comment text area
   */
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  /**
   * Resets the comment text value to be empty
   */
  const resetCommentForm = () => {
    setCommentContent("");
  };

  const updateComment = (comment: Comment) => {
    dispatch(addNewComment(comment));
  };

  /**
   * Submits a request to the api to save a comment made by a user
   */
  const handlePostComment = async () => {
    if (!session) return router.push("/auth/signin");
    const { user } = session;
    const formatComment = {
      content: commentContent,
      authorEmail: user.email,
      authorName: user.name,
      postId: id,
    };

    const res = await api.comments.createComment(formatComment);
    if (res.success) {
      resetCommentForm();
      const comment = res.data;
      updateComment(comment);
    } else {
      setPostCommentError(res.error.message);
    }
  };

  return (
    <article
      id={`blog-post-${id}`}
      role="article"
      className="bg-white shadow-lg rounded-lg w-full mx-auto mb-8 pt-4 pb-8"
    >
      <BlogPostTitle title={title} createdAt={createdAt} />
      <div
        id={`blog-post-content-${id}`}
        className="px-4 py-2 overflow-hidden transition-max-h duration-500 ease-in-out"
        style={
          showButtonText === "show more"
            ? { maxHeight: "12.5rem" }
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
      <div className="pt-3 pl-2 border-t-2">
        <div className="flex">
          <BlogPostCommentForm
            commentContent={commentContent}
            handleCommentChange={handleCommentChange}
            handlePostComment={handlePostComment}
          />
        </div>
        <div className="flex mt-6 items-center justify-between">
          <div className="flex w-1/3">
            <ViewCommentsButton
              showComments={showComments}
              handleShowCommentArea={handleShowCommentArea}
            />
          </div>
          {postCommentError && (
            <div className="flex w-1/3 justify-center">
              <p className="text-red-500 text-md"> {postCommentError} </p>
            </div>
          )}
          <div className="flex w-1/3"></div>
        </div>
      </div>
      <motion.div
        initial={{ maxHeight: 0 }}
        animate={{ maxHeight: showComments ? "60rem" : 0 }}
        transition={{ duration: 0.2 }}
        className={`flex mt-4`}
      >
        {showComments && (
          <CommentList postId={id} showComments={showComments} />
        )}
      </motion.div>
    </article>
  );
};

export default BlogPost;
