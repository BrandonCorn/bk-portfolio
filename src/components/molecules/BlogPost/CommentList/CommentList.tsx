"use client";
import { useAppSelector } from "@/redux";
import { selectCommentsByPostId } from "@/redux/slices/commentSlice/commentSelectors";
import { motion } from "framer-motion";

type CommentListProps = {
  postId: number;
};

const CommentList = ({ postId }: CommentListProps) => {
  const comments = useAppSelector(selectCommentsByPostId(postId));
  if (!comments || comments.length === 0) {
    return (
      <div className="flex justify-center mx-4">
        <p className="text-lg"> No Comments </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-lg mx-auto"
    >
      <div className="bg-gray-100 rounded-lg shadow-md">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-200 text-gray-800 font-bold text-lg">
          Comments
        </div>
        <div className="divide-y divide-gray-200">
          {comments.map((comment, index) => (
            <div key={index} className="px-4 py-3">
              <p className="text-gray-800">{comment.content}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-gray-600">
                  {comment.authorName} -{" "}
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CommentList;
