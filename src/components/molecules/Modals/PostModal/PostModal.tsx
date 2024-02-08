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
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto mb-8">
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default PostModal;
