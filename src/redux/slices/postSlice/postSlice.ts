import { Post } from "@prisma/client"
import { createSlice, createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import api from '@/lib/apiClient';
import { LoadingState } from '@/types/common/type';
import { CustomResponse } from "@/types/common/type";
import { ErrorResponse } from "@/types/errors/type";
import { CreatePostRequest } from "@/types/posts/type";

// page size is actually 3 posts, but we want 9 pages, so 3 * 9
const PAGE_SIZE = 27;

export type PostType = Pick<Post, 'id' | 'title' | 'content' | 'published' | 'createdAt'>

export type PostState = {
  posts: PostType[],
  getInitialPostsRequesLoading: LoadingState | null,
  getInitialPostsRequestSuccess: any,
  getInitialPostRequestsFailure: any,
}

const initialState: PostState = {
  posts: [],
  getInitialPostsRequesLoading: null,
  getInitialPostsRequestSuccess: null,
  getInitialPostRequestsFailure: null,
}

export const getInitialPosts = createAsyncThunk<Post[], void, {rejectValue: ErrorResponse}>('posts/getInitialPosts', 
  async (_, thunkApi) => {
    // no skip, start from first post
    const skip = 0;

    // make init request for blog posts
    const res: CustomResponse<Post[]> = await api.posts.getPostsByPublishDate({ pageSize: PAGE_SIZE, skip, date: new Date()});
    if(res.success){
      const { data } = res;
        thunkApi.dispatch(setPosts(data));
        return data;
    }
    else{
      return thunkApi.rejectWithValue(res.error);
    }
  }
)

const getInitialPostsBuilders = (builder: ActionReducerMapBuilder<PostState>) => {
  builder.addCase(getInitialPosts.pending, (state, action) => {
    state.getInitialPostsRequesLoading = 'loading';
    state.getInitialPostRequestsFailure = null;
    state.getInitialPostsRequestSuccess = null;
  });
  builder.addCase(getInitialPosts.fulfilled, (state, action) => {
    state.getInitialPostsRequesLoading = 'success';
    state.getInitialPostsRequestSuccess = action.payload;
  });
  builder.addCase(getInitialPosts.rejected, (state, action) => {
    state.getInitialPostsRequesLoading = 'error';
    state.getInitialPostRequestsFailure = action.payload;
  });
}

export const saveNewPost = createAsyncThunk<Post, CreatePostRequest, {rejectValue: ErrorResponse}>('post/saveNewPost',
  async (post, thunkApi) => {
    const res = await api.posts.createPost(post);
    if(res.success){
      const { data } = res;
      thunkApi.dispatch(addNewPost(data));
      return data;
    }
    else{
      return thunkApi.rejectWithValue(res.error);
    }
  })

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // sets posts on initial fetch
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    // adds new post to existing list of posts
    addNewPost: (state, action: PayloadAction<Post>) => {
      const post = action.payload;
      if(!state.posts.length){
        state.posts = [post];
      }
      else {
        state.posts = [post, ...state.posts];
      }
    }
  },
  extraReducers: (builder) => {
    getInitialPostsBuilders(builder);
  }
});


export const { setPosts , addNewPost} = postsSlice.actions;

export default postsSlice.reducer;