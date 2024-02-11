"use client";

import Link from "next/link";
import { FaComment } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";

type ViewCommentsButtonProps = {
  showComments: boolean;
  handleShowCommentArea: () => void;
};

type ShowCommentsLabel = "View Comments" | "Hide Comments";

/** ViewCommentsButton displays a button or link based on whether a user is signed in to show comments or navigate to sign in
 * @component
 * @param props - Props of the ViewCommentsButton
 * @param props.handleShowCommentArea - Handler function which toggles the viewing of comments
 * @returns
 */
const ViewCommentsButton = ({
  showComments,
  handleShowCommentArea,
}: ViewCommentsButtonProps) => {
  const [isUser, setIsUser] = useState(false);
  const { status } = useSession();
  const [commentsLabel, setCommentsLabel] =
    useState<ShowCommentsLabel>("View Comments");

  useEffect(() => {
    if (showComments) {
      setCommentsLabel("View Comments");
    } else {
      setCommentsLabel("Hide Comments");
    }
  }, [showComments]);

  /**
   * Check if a user is logged in for allowing comments and posting
   */
  useEffect(() => {
    if (status === "authenticated") {
      setIsUser(true);
    }
  }, [status]);

  return (
    <div
      className={`flex hover:cursor-pointer items-center`}
      onClick={handleShowCommentArea}
      aria-label="toggle comments"
    >
      <FaComment className="text-purple-500 hover:text-purple-700 text-xl" />
      {isUser ? (
        <BasicButton
          name="view-comments-button"
          type="submit"
          className={`text-purple-500 hover:text-purple-700 pl-2`}
          aria-label="View comments"
        >
          {commentsLabel}
        </BasicButton>
      ) : (
        <Link
          prefetch
          className={`text-purple-500 hover:text-purple-700 pl-2`}
          href="/auth/signin"
          aria-label="Sign in to view comments"
        >
          {commentsLabel}
        </Link>
      )}
    </div>
  );
};

export default ViewCommentsButton;
