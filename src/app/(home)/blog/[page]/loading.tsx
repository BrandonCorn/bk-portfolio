import BlogPostSkeleton from "@/components/organisms/BlogPost/Skeleton/BlogPostSkeleton";

export default function Loading() {
  const tempPosts = Array(3).fill({});

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {tempPosts.map((post, index) => (
          <BlogPostSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
