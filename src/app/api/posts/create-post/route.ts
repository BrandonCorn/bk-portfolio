import { BadRequestError } from "@/lib/errors/bad-request-error";
import { createPost } from "@/services/postsService/posts";
import { NextRequest, NextResponse } from "next/server";
import { serverSession } from "../../auth/[...nextauth]/options";
import { UnauthorizedRequestError } from "@/lib/errors/unauthorized-request-error";


export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await serverSession();
  if(!session || session.user.id !== process.env.ADMIN_ID){
    const err = new UnauthorizedRequestError('Must be admin to create blog post');
    return NextResponse.json( err.message, { status: err.code });
  }
  const { title, content, published, authorId } = await req.json();
  let post;
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