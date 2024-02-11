type BlogPostTitleProps = {
  title: string;
  createdAt: Date;
};

/**
 * BlogPostTitle displays the title and publication date of a blog post.
 * @component
 * @param {object} props - The component props
 * @param {string} props.title - The title of the blog post
 * @param {Date} props.createdAt - The date and time when the blog post was created
 */
const BlogPostTitle = ({ title, createdAt }: BlogPostTitleProps) => {
  return (
    <div className="px-4 py-2">
      <h2 className="my-4 h-6 text-2xl font-bold text-gray-800">{title}</h2>
      <p className="my-4 h-4 text-gray-600 text-sm">
        published: {new Date(createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogPostTitle;
