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
    addComments: (state, {payload}) => {
      state.comments = payload;
    }
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
