import BasicButton from "@/components/atoms/Buttons/BasicButton/BasicButton";
import BasicTextArea from "@/components/atoms/Inputs/BasicTextArea/BasicTextArea";

type PostCommentFormProps = {
  commentContent: string;
  handleCommentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

/**
 * PostCommentForm provides a form for typing a comment on a blog post and posting it
 * @param props - props for PostCommentForm
 * @param {string} props.commentContent - The comment content of the textarea
 * @param {} props.handleCommentChange - handler function for text area element onChange which updates state of Comment text
 * @returns
 */
const BlogPostCommentForm = ({
  commentContent,
  handleCommentChange,
}: PostCommentFormProps) => {
  return (
    <form className="flex flex-grow items-center mx-2">
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
      >
        Post
      </BasicButton>
    </form>
  );
};

export default BlogPostCommentForm;