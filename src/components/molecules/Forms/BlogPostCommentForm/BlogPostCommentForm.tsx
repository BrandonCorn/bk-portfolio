import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import BasicTextArea from "@/components/atoms/Inputs/BasicTextArea/BasicTextArea";

type PostCommentFormProps = {
  commentContent: string;
  handleCommentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handlePostComment: () => void;
};

/**
 * PostCommentForm provides a form for typing a comment on a blog post and posting it
 * @component
 * @param props - props for PostCommentForm
 * @param props.commentContent - The comment content of the textarea
 * @param props.handleCommentChange - handler function for text area element onChange which updates state of Comment text
 * @param props.handlePostComment - function called to make api request posting comment
 * @returns
 */
const BlogPostCommentForm = ({
  commentContent,
  handleCommentChange,
  handlePostComment,
}: PostCommentFormProps) => {
  const handleCommentRequest = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    handlePostComment();
  };

  return (
    <form
      className="flex flex-grow items-center mx-2"
      onSubmit={handleCommentRequest}
    >
      <BasicTextArea
        name="user-comment"
        aria-label="Enter your comment"
        className="flex-grow border-2 rounded-lg text-black bg-white h-full px-4 py-1"
        placeholder="Make a comment here"
        value={commentContent}
        onChange={handleCommentChange}
      />

      <BasicButton
        className="text-black border-2 rounded-lg px-6 h-full bg-purple-500 hover:bg-purple-600"
        type="submit"
        name="post-comment-button"
        aria-label="Post comment"
        onClick={handleCommentRequest}
      >
        Post
      </BasicButton>
    </form>
  );
};

export default BlogPostCommentForm;
