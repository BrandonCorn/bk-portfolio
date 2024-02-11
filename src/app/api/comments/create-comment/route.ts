import { BadRequestError } from "@/lib/errors/bad-request-error";
import { createComment } from "@/services/commentsService/comments";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest, res: NextResponse) => {
  const { content, authorEmail, authorName, postId } = await req.json();

  if(!content || !authorEmail || !postId || !authorName) {
    const err = new BadRequestError('Missing data to create comment');
    return NextResponse.json({error: err.message}, { status: err.code })
  }
  let comment;
  try{
    comment = await createComment({content, authorEmail, authorName, postId});
  }
  catch(error){
    return NextResponse.json( { error: 'Something went wrong' }, { status: 500 })
  }
  
  if(!comment){
    const err = new BadRequestError('There was an issue saving your comment')
    return NextResponse.json( {error : err.message }, { status: err.code })
  }

  return NextResponse.json(comment);
}