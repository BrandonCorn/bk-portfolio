"use client";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import BasicModal from "@/components/atoms/Modals/BasicModal";
import Modal from "react-modal";
import SuccessModal from "@/components/molecules/Modals/SuccessModal/SuccessModal";
import BasicTextArea from "@/components/atoms/Inputs/BasicTextArea/BasicTextArea";

Modal.setAppElement("#main-layout");

const NewBlogPost = ({}) => {
  const [makeNewPost, setMakeNewPost] = useState(false);
  const [newPostLoaded, setNewPostLoaded] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [requestStatusTitle, setRequestStatusTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const newPostTitle = "Make A New Post!";

  const { status } = useSession();

  const handlerMakeNewPost = () => {
    setMakeNewPost(!makeNewPost);
  };

  const savePostRequest = (e) => {
    e.preventDefault();
    setRequestMessage("Post saved successfully");

    handlerMakeNewPost();
    setNewPostLoaded(true);
    resetBlogContent();
  };

  const resetNewPostLoaded = () => setNewPostLoaded(!newPostLoaded);

  const resetBlogContent = () => setBlogContent("");

  const handlerBlogContent = (e) => setBlogContent(e.target.value);

  return (
    <div id="new-blog-post">
      {
        <BasicButton
          type="button"
          onClick={handlerMakeNewPost}
          className="border rounded-xl bg-purple-600 hover:bg-purple-700 p-2"
        >
          New Post
        </BasicButton>
      }
      {makeNewPost && (
        <BasicModal isOpen={makeNewPost} closeModal={handlerMakeNewPost}>
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-lg text-center w-2/3 shadow-2xl p-16 m-16 space-y-4">
              <div className="flex justify-center">
                <h1 className="text-3xl"> Share Your Thoughts... </h1>
              </div>
              <form className="flex flex-col" onSubmit={savePostRequest}>
                <BasicTextArea
                  name="user-new-blog-post"
                  aria-label="Write your blog post content here"
                  className="border-2 rounded-lg text-black bg-white px-4 py-1"
                  placeholder="Write your blog post content here"
                  value={blogContent}
                  onChange={handlerBlogContent}
                  rows={40}
                  cols={150}
                />

                <BasicButton
                  className="border-2 rounded-lg py-4 bg-purple-500 hover:bg-purple-600"
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
      )}
      {newPostLoaded && (
        <SuccessModal
          title={requestStatusTitle}
          message={requestMessage}
          isOpen={newPostLoaded}
          closeModal={resetNewPostLoaded}
        />
      )}
    </div>
  );
};

export default NewBlogPost;
