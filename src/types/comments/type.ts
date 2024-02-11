import { Comment } from "@prisma/client"

export type CreateCommentRequestData = Pick<Comment, 'content' | 'authorEmail' | 'authorName' | 'postId'>;

