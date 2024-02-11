import { NextResponse, NextRequest } from "next/server";
import { getPostsByPublishDate } from "@/services/postsService/posts";
import { NotFoundError } from "@/lib/errors/not-found-error";
import { BadRequestError } from "@/lib/errors/bad-request-error";



export async function GET(req: NextRequest, res: NextResponse){
  const pageSize = req.nextUrl.searchParams.get('pageSize');
  const skip = req.nextUrl.searchParams.get('skip');
  const date = req.nextUrl.searchParams.get('date');

  if(!pageSize || !skip || !date){
    const err = new BadRequestError('Missing data to fetch posts');
    return NextResponse.json({ error: err.message }, { status: err.code })
  }

  let posts;
  try{
      posts = await getPostsByPublishDate(parseInt(pageSize), parseInt(skip), new Date(date));
  }
  catch(error){
    return NextResponse.json( { error: 'Something went wrong' }, { status: 500 });
  }

  if (!posts){
    const err = new NotFoundError('No blog posts found');
    return NextResponse.json({ error: err.message }, { status: err.code });
  }

  return NextResponse.json(posts);
}