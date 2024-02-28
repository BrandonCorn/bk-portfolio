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

const NewBlogPost = ({}) => {
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [newPostLoaded, setNewPostLoaded] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [requestStatusTitle, setRequestStatusTitle] = useState("");
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
   * @param data.title - title of the blog post
   * @param data.string - content of the blog post
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
    const postResponse = await dispatch(saveNewPost(post));
    setRequestStatusTitle("Success, you did it!");
    setRequestMessage("Post saved successfully");

    handlerMakeNewPost();
    setNewPostLoaded(true);
  };

  const resetNewPostLoaded = () => setNewPostLoaded(!newPostLoaded);

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
      />
      <SuccessModal
        title={requestStatusTitle}
        message={requestMessage}
        isOpen={newPostLoaded}
        closeModal={resetNewPostLoaded}
      />
      <FailureModal
        title={requestStatusTitle}
        message={requestMessage}
        isOpen={newPostLoaded}
        closeModal={resetNewPostLoaded}
      />
    </div>
  );
};

export default NewBlogPost;
