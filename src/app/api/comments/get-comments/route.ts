import { NextResponse, NextRequest } from "next/server";
import { NotFoundError } from "@/lib/errors/not-found-error";
import { BadRequestError } from "@/lib/errors/bad-request-error";
import { getCommentByPostIds } from "@/services/commentsService/comments";



export async function POST(req: NextRequest, res: NextResponse){
  const postIds = await req.json();

  if(!postIds){
    const err = new BadRequestError('Missing postIds');
    return NextResponse.json({ error: err.message }, { status: err.code })
  }

  let comments;
  try{
      comments = await getCommentByPostIds(postIds);
  }
  catch(error){
    return NextResponse.json( { error: 'Something went wrong' }, { status: 500 });
  }

  if (!comments){
    const err = new NotFoundError('No comments found');
    return NextResponse.json({ error: err.message }, { status: err.code });
  }

  return NextResponse.json(comments);
}