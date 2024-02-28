"use client";
import { useState, FormEvent, ChangeEvent, MouseEvent } from "react";
import BasicModal from "@/components/atoms/Modals/BasicModal";
import BasicTextArea from "@/components/atoms/Inputs/BasicTextArea/BasicTextArea";
import GeneralInput from "@/components/atoms/Inputs/GeneralInput";
import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import useIsMobile from "@/hooks/useIsMobile";
import LoadingIcon from "@/components/atoms/Icons/LoadingIcon/LoadingIcon";

type NewBlogPostModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  closeModalHandler: () => void;
  savePostRequest: ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => void;
};

const NewBlogPostModal = ({
  isOpen,
  isLoading,
  closeModalHandler,
  savePostRequest,
}: NewBlogPostModalProps) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const isMobile = useIsMobile();

  const blogTextAreaSize = {
    rows: isMobile ? 20 : 30,
    columns: isMobile ? 80 : 120,
  };

  const handlerBlogContent = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setBlogContent(e.target.value);

  const handlerBlogTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setBlogTitle(e.target.value);

  const resetBlogPost = () => {
    setBlogTitle("");
    setBlogContent("");
  };

  /**
   * Issues POST request to save blog post and resets the content of the modal
   * @param {FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>} e - Event for blog post form submission
   */
  const postRequestHandler = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    savePostRequest({ content: blogContent, title: blogTitle });

    resetBlogPost();
  };

  const modalTitle = isLoading ? "Loading..." : "Share Your Thoughts...";

  return (
    <BasicModal isOpen={isOpen} closeModal={closeModalHandler}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full rounded-lg text-center shadow-2xl p-4 m-4 space-y-4">
          <div className="flex justify-center">
            <h1 className="text-3xl"> {modalTitle} </h1>
          </div>
          {<LoadingIcon isShowing={isLoading} />}
          {!isLoading && (
            <form className="flex flex-col" onSubmit={postRequestHandler}>
              <GeneralInput
                className="w-full border-4 border-solid rounded-lg bg-white dark:text-zinc-600  px-4 py-1 h-12"
                placeholder="Post Title"
                onChange={handlerBlogTitle}
                value={blogTitle}
              />
              <BasicTextArea
                name="new-blog-post"
                aria-label="Write your blog post content here"
                className="w-full border-4 rounded-lg dark:text-zinc-600 bg-white px-4 py-1 my-4"
                placeholder="Write your blog post content here"
                value={blogContent}
                onChange={handlerBlogContent}
                rows={blogTextAreaSize.rows}
                cols={blogTextAreaSize.columns}
              />

              <BasicButton
                className="w-full border-2 rounded-lg py-4 bg-purple-500 hover:bg-purple-600 text-white"
                type="submit"
                name="post-blog-button"
                aria-label="Post blog"
                onClick={postRequestHandler}
              >
                Post
              </BasicButton>
            </form>
          )}
        </div>
      </div>
    </BasicModal>
  );
};

export default NewBlogPostModal;
