import { RootState } from "@/redux";
import { createSelector } from "@reduxjs/toolkit";

/**
 * Primary blog post selector
 */
const postSelector = (state: RootState) => state?.posts;

/**
 * Selects blog posts array from store
 */
export const selectBlogPosts = createSelector(
  postSelector,
  (state) => state.posts
);
