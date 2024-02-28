"use client";
import { useAppDispatch } from "@/redux";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import { useState, ChangeEvent } from "react";
import BasicModal from "@/components/atoms/Modals/BasicModal";
import SuccessModal from "@/components/molecules/Modals/SuccessModal/SuccessModal";
import BasicTextArea from "@/components/atoms/Inputs/BasicTextArea/BasicTextArea";
import FailureModal from "@/components/molecules/Modals/FailureModal/FailureModal";
import { saveNewPost } from "@/redux/slices/postSlice/postSlice";
import { CreatePostRequest } from "@/types/posts/type";
import GeneralInput from "@/components/atoms/Inputs/GeneralInput";
import useIsMobile from "@/hooks/useIsMobile";

// Modal.setAppElement("#main-layout");

const NewBlogPost = ({}) => {
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [newPostLoaded, setNewPostLoaded] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [requestStatusTitle, setRequestStatusTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();

  const blogTextAreaSize = {
    rows: isMobile ? 20 : 30,
    columns: isMobile ? 80 : 120,
  };

  const newPostTitle = "Make A New Post!";

  const handlerMakeNewPost = () => {
    setNewPostModalOpen(!newPostModalOpen);
  };

  const savePostRequest = async (e: any) => {
    e.preventDefault();

    const post = {
      content: blogContent,
    };
    //logic to save the blog post
    // const postResponse = await dispatch(saveNewPost());
    setRequestStatusTitle("Success, you did it!");
    setRequestMessage("Post saved successfully");

    handlerMakeNewPost();
    setNewPostLoaded(true);
    resetBlogContent();
  };

  const resetNewPostLoaded = () => setNewPostLoaded(!newPostLoaded);

  const resetBlogContent = () => setBlogContent("");

  const handlerBlogContent = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setBlogContent(e.target.value);

  const handlerBlogTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setBlogTitle(e.target.value);

  return (
    <div id="new-blog-post">
      {
        <BasicButton
          type="button"
          onClick={handlerMakeNewPost}
          className="border rounded-xl bg-purple-600 hover:bg-purple-700 p-2"
          aria-label="Create new post"
        >
          {newPostTitle}
        </BasicButton>
      }
      <BasicModal isOpen={newPostModalOpen} closeModal={handlerMakeNewPost}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full rounded-lg text-center shadow-2xl p-4 m-4 space-y-4">
            <div className="flex justify-center">
              <h1 className="text-3xl"> Share Your Thoughts... </h1>
            </div>
            <form className="flex flex-col" onSubmit={savePostRequest}>
              <GeneralInput
                className="w-full border-4 border-solid rounded-lg bg-white dark:text-zinc-600  px-4 py-1 h-12"
                placeholder="Post Title"
                onChange={handlerBlogTitle}
              />
              <BasicTextArea
                name="user-new-blog-post"
                aria-label="Write your blog post content here"
                className="w-full border-4 rounded-lg dark:text-zinc-600 bg-white px-4 py-1 my-4"
                placeholder="Write your blog post content here"
                value={blogContent}
                onChange={handlerBlogContent}
                rows={blogTextAreaSize.rows}
                cols={blogTextAreaSize.columns}
              />

              <BasicButton
                className="w-full border-2 rounded-lg py-4 bg-purple-500 hover:bg-purple-600"
                type="submit"
                name="post-blog-button"
                aria-label="Post blog"
                onClick={savePostRequest}
              >
                Post
              </BasicButton>
            </form>
          </div>
        </div>
      </BasicModal>
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
