import { createSlice } from "@reduxjs/toolkit";
import { appInitialState } from "./initialState";

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    toggleSidebar: (state, { payload }) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleMenuOption: (state, { payload }) => {
      state.isSidebarOpen = payload;
    },
    addVideos: (state, { payload }) => {
      state.videos = payload;
    },
    addComments: (state, { payload }) => {
      payload.map((comment) => {
        if (comment.replies) {
          comment.replies = comment.replies.map((reply) => {
            return {
              id: reply?.id,
              channelId: reply?.snippet?.channelId,
              videoId: reply?.snippet?.videoId,
              textOrignal:
              reply?.snippet?.textOriginal,
              authorDisplayName:
              reply?.snippet?.authorDisplayName,
              authorDisplayImageUrl:
              reply?.snippet?.authorProfileImageUrl,
            };
          });
          return comment;
        } else {
          return comment;
        }
      });
      state.comments = payload;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
