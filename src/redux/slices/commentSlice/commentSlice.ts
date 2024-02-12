import { LoadingState } from "@/types/common/type";
import { Comment } from "@prisma/client";
import { createSlice, createAsyncThunk, ActionReducerMapBuilder, Action, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/apiClient";
import { CustomResponse  } from "@/types/common/type";
import { ErrorResponse } from "@/types/errors/type";

/**
 * This object uses postId from comments as the key so that comments are pushed to the array which is the value
 */
type CommentByPost = {
  [key: number]: Comment[];
}

export type CommentState = {
  comments: CommentByPost;
  getInitialCommentsRequestLoading: LoadingState | null;
  getInitialCommentsRequestSuccess: any;
  getInitialCommentsRequestFailure: any;
}

const INITIAL_STATE: CommentState = {
  comments: [],
  getInitialCommentsRequestLoading: null,
  getInitialCommentsRequestSuccess: null,
  getInitialCommentsRequestFailure: null,
}

export const getInitialComments = createAsyncThunk<Comment[], number[], {rejectValue: ErrorResponse}>('comments/getInitialComments', 
async (postIds: number[], thunkApi) => {
  const res: CustomResponse<Comment[]> = await api.comments.getCommentsByPostIds(postIds);
  if(res.success){
    const { data } = res;
    thunkApi.dispatch(setComments(data));
    return data;
  }
  else{
    return thunkApi.rejectWithValue(res.error);
  }
});

const getInitialCommentsBuilders = (builder: ActionReducerMapBuilder<CommentState>) => {
  builder.addCase(getInitialComments.pending, (state, action) => {
    state.getInitialCommentsRequestLoading = 'loading';
    state.getInitialCommentsRequestSuccess = null;
    state.getInitialCommentsRequestFailure = null;
  });
  builder.addCase(getInitialComments.fulfilled, (state, action) => {
    state.getInitialCommentsRequestLoading = 'success';
    state.getInitialCommentsRequestSuccess = action.payload;
  });
  builder.addCase(getInitialComments.rejected, (state, action) => {
    state.getInitialCommentsRequestLoading = 'error';
    state.getInitialCommentsRequestFailure = action.payload;
  });
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState: INITIAL_STATE, 
  reducers: {
    // comments are set to corresponding posts on initial fetch
    setComments: (state, action) => {
      const comments: Comment[] = action.payload;
      comments.forEach(comment => {
        const key = comment.postId;
        if(state.comments[key]){
          state.comments[key].push(comment);
        }
        else {
          state.comments[key] = [comment];
        }
      })
    },
    // new comments go to the front of the array as they're the newest
    addNewComment: (state, action: PayloadAction<Comment>) => {
      const comment: Comment = action.payload;
      const key = comment.postId;
      if(state.comments[key]){
        state.comments[key].unshift(comment);
      }
      else {
        state.comments[key] = [comment];
      }
    },
    // use updateComments when comments are fetched to update the existing comments
    updateComments: (state, action: PayloadAction<Comment[]>) => {
      const comments = action.payload;
      comments.forEach(comment => {
        const key = comment.postId;
        if(state.comments[key]){
          state.comments[key].unshift(comment);
        }
        else{
          state.comments[key] = [comment];
        }
      })
    }
  },
  extraReducers: (builder) => {
    getInitialCommentsBuilders(builder);
  }
});


export const { setComments, addNewComment, updateComments } = commentsSlice.actions;

export default commentsSlice.reducer;
