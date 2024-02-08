import PostModalSkeleton from "@/components/molecules/Modals/PostModal/Skeleton/PostModalSkeleton";

export default function Loading() {
  const tempPosts = Array(3).fill({});

  return (
    <div>
      {tempPosts.map((post, index) => (
        <PostModalSkeleton key={index} />
      ))}
    </div>
  );
}
