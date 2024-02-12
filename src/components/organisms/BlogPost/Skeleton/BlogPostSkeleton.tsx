const BlogPostSkeleton = () => {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto mb-8 animate-pulse">
      <div className="px-4 py-2">
        <div className="h-16  bg-gray-300 rounded mb-2"></div>
        <div className="h-12 bg-gray-300 rounded"></div>
      </div>
      <div className="px-4 py-2">
        <div className="h-32  bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
