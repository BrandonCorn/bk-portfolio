import { createSelector } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "@/redux";

const commentSelector = (state: RootState) => state?.comments;

/**
 * Selector for request getBlogPostComments 
 * @returns loading, success, and failure states of getBlogPostComments request
 */
export const getBlogPostCommentsRequestStates = createSelector(commentSelector, (state) => {
  const { getInitialCommentsRequestFailure, getInitialCommentsRequestLoading, getInitialCommentsRequestSuccess} = state;
  return { getInitialCommentsRequestFailure, getInitialCommentsRequestLoading, getInitialCommentsRequestSuccess };
})

/**
 * Selector for all blog post comments
 * @returns all blog post comments
 */
export const selectBlogPostComments = createSelector(commentSelector, (state) => state.comments);


/**
 * Selector for all blog post comments based on postId
 * @param postId The ID of the post to filter comments for
 * @returns Comments for the specified post
 */
export const selectCommentsByPostId = (postId: number) => createSelector(commentSelector, (state) => state.comments[postId]);