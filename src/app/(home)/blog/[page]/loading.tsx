import PostModalSkeleton from "@/components/molecules/Modals/PostModal/Skeleton/PostModalSkeleton";

export default function Loading() {
  const tempPosts = Array(3).fill({});

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {tempPosts.map((post, index) => (
          <PostModalSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
