import { createSlice } from "@reduxjs/toolkit";
import { appInitialState } from "./initialState";

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    addVideos: (state, {payload}) => {
      state.videos = payload;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
