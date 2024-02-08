import { Post } from "@prisma/client"
import { createSlice, createAsyncThunk, ActionReducerMapBuilder, AnyAction } from '@reduxjs/toolkit'
import api from '@/lib/apiClient';
import { LoadingState } from '@/types/common/type';

export type PostType = Pick<Post, 'title' | 'content' | 'published' | 'createdAt'>

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

export const getInitialPosts = createAsyncThunk('posts/getInitialPosts', 
  async (_, thunkApi) => {
    // take number of page size from db
    const pageSize = 27;
    // no skip, start from first post
    const skip = 0;

    // make init request for blog posts
    const res = await api.posts.getPostsByPublishDate({ pageSize, skip, date: new Date()});
    if(res.success){
      const { data } = res;
      if(data){
        thunkApi.dispatch(setPosts(data));
        return data;
      }
    }
    else{
      return thunkApi.rejectWithValue(res);
    }
  }
)

const getInitialPostsBuilders = (builder: ActionReducerMapBuilder<PostState>) => {
  builder.addCase(getInitialPosts.pending, (state, action) => {
    state.getInitialPostsRequesLoading = 'loading';
    state.getInitialPostRequestsFailure = null;
    state.getInitialPostsRequestSuccess = null;
  })
  builder.addCase(getInitialPosts.fulfilled, (state, action) => {
    state.getInitialPostsRequesLoading = 'success';
    state.getInitialPostsRequestSuccess = action.payload;
  })
  builder.addCase(getInitialPosts.rejected, (state, action) => {
    state.getInitialPostsRequesLoading = 'error';
    state.getInitialPostRequestsFailure = action.payload;
  })
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  },
  extraReducers: (builder) => {
    getInitialPostsBuilders(builder);
  }
});


export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;