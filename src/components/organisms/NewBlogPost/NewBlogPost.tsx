"use client";
import { useAppDispatch } from "@/redux";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import { useState } from "react";
import NewBlogPostModal from "@/components/molecules/Modals/NewBlogPostModal/NewBlogPostModal";
import SuccessModal from "@/components/molecules/Modals/SuccessModal/SuccessModal";
import FailureModal from "@/components/molecules/Modals/FailureModal/FailureModal";
import { saveNewPost } from "@/redux/slices/postSlice/postSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ErrorResponse } from "@/types/errors/type";

const NewBlogPost = ({}) => {
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [newPostSuccess, setNewPostSuccess] = useState(false);
  const [newPostFailed, setNewPostFailed] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [requestStatusTitle, setRequestStatusTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const router = useRouter();

  const newPostTitle = "Make A New Post!";

  const handlerMakeNewPost = () => {
    setNewPostModalOpen(!newPostModalOpen);
  };

  /**
   * Saves a new blog post to the database
   * @param data
   * @param {string} data.title - title of the blog post
   * @param {string} data.string - content of the blog post
   * @returns
   */
  const savePostRequest = async ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    if (!session) return router.push("/api/signin");
    const { user } = session;
    const post = {
      title,
      content,
      published: true,
      authorId: user.id,
    };
    //logic to save the blog post
    setIsLoading(true);
    const postResponse = await dispatch(saveNewPost(post));
    setIsLoading(false);
    if (postResponse.meta.requestStatus === "fulfilled") {
      setRequestStatusTitle("You did it!!");
      setRequestMessage("Your new post has been saved.");
      setNewPostSuccess(true);
    } else {
      const error = postResponse.payload as ErrorResponse;
      setRequestStatusTitle("Something Went Wrong");
      // only admin is creating blog posts and therefore should get to see what the actual error is
      setRequestMessage(error.message);
      setNewPostFailed(true);
    }

    handlerMakeNewPost();
  };

  const resetNewPostLoaded = () => {
    setNewPostSuccess(false);
    setNewPostFailed(false);
  };

  return (
    <div id="new-blog-post">
      <BasicButton
        type="button"
        onClick={handlerMakeNewPost}
        className="border rounded-xl bg-purple-600 hover:bg-purple-700 p-2"
        aria-label="Create new post"
      >
        {newPostTitle}
      </BasicButton>
      <NewBlogPostModal
        isOpen={newPostModalOpen}
        closeModalHandler={handlerMakeNewPost}
        savePostRequest={savePostRequest}
        isLoading={isLoading}
      />
      <SuccessModal
        title={requestStatusTitle}
        message={requestMessage}
        isOpen={newPostSuccess}
        closeModal={resetNewPostLoaded}
      />
      <FailureModal
        title={requestStatusTitle}
        message={requestMessage}
        isOpen={newPostFailed}
        closeModal={resetNewPostLoaded}
      />
    </div>
  );
};

export default NewBlogPost;
