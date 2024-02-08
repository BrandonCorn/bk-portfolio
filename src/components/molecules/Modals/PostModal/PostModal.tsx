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
  const formattedPost =
    content.length > 500 ? `${content.slice(0, 500)}...` : content;
  return (
    <div className="bg-white shadow-lg rounded-lg w-full mx-auto mb-8 pt-4 pb-8">
      <div className="px-4 py-2">
        <h2 className="my-4 h-6 text-2xl font-bold text-gray-800">{title}</h2>
        <p className="my-4 h-4 text-gray-600 text-sm">
          published: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <article className="px-4 py-2 text-wrap">
        <p className=" text-gray-700 text-md">{formattedPost}</p>
      </article>
    </div>
  );
};

export default PostModal;
