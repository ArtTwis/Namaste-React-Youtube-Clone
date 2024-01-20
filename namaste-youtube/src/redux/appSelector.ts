import { createSelector } from "@reduxjs/toolkit";
import { appInitialState } from "./initialState";
import { RootState } from "./hooks";

export const selectDomain = (state: RootState) => state.app || appInitialState;

export const selectIsSidebarOpen = createSelector(
  [selectDomain],
  (state) => state.isSidebarOpen
);

export const selectVideos = createSelector(
  [selectDomain],
  (state) => state.videos
);