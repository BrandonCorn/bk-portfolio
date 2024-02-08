"use client";
import { useState } from "react";
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
  const formattedPost =
    content.length > 500 ? `${content.slice(0, 500)}...` : content;
  const [contentChanges, setContentChanges] = useState(formattedPost);
  const [showButtonText, setShowButtonText] =
    useState<ShowButtonText>("show more");

  const changeContentWordCount = () => {
    if (showButtonText === "show more") setContentChanges(content);
    else setContentChanges(formattedPost);
  };

  const changeShowButtonText = () => {
    if (showButtonText === "show more") setShowButtonText("show less");
    else setShowButtonText("show more");
  };

  const handleShowContent = () => {
    changeContentWordCount();
    changeShowButtonText();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full mx-auto mb-8 pt-4 pb-8">
      <div className="px-4 py-2">
        <h2 className="my-4 h-6 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="my-4 h-4 text-gray-600 text-sm">
          published: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <article className="px-4 py-2 text-wrap">
        <p className=" text-gray-700 text-md">{contentChanges}</p>
      </article>
      <div className="text-center">
        <button
          className="text-purple-500  font-light hover:opacity-90"
          onClick={handleShowContent}
        >
          {showButtonText}
        </button>
      </div>
    </div>
  );
};

export default PostModal;
