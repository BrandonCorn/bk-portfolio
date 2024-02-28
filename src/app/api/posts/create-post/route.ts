import { BadRequestError } from "@/lib/errors/bad-request-error";
import { createPost } from "@/services/postsService/posts";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest, res: NextResponse) => {
  const { title, content, published, authorId } = await req.json();
  let post;
  console.log('authorId ', authorId);
  try{
    post = await createPost({title, content, published, authorId});
  }
  catch(error){
    return NextResponse.json( 'Server Error', { status: 500 })
  }
  
  if(!post){
    const err = new BadRequestError('There was an issue saving your blog')
    return NextResponse.json( err.message, { status: err.code })
  }

  return NextResponse.json(post);
}