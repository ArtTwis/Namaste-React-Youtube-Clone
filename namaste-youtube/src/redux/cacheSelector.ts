import { createSelector } from "@reduxjs/toolkit";
import { cacheInitialState } from "./initialState";
import { RootState } from "./hooks";

export const selectDomain = (state: RootState) => state.cache || cacheInitialState;

export const selectCacheResult = createSelector(
  [selectDomain],
  (state) => state.cacheResult
);