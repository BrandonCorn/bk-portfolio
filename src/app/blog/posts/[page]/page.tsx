// first things first, we need to fetch all the blogs, let's do that whenever a user navigates to the blog page for performance
// we need to store the blog posts in redux so that the posts page has access to it
//
// next, we need to be able

export default function Page({ params }: { params: { page: string } }) {
  const { page } = params;

  return <div>we are on page {page}</div>;
}
