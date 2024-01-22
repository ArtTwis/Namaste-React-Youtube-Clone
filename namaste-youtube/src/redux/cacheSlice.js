import { createSlice } from "@reduxjs/toolkit";
import { cacheInitialState } from "./initialState";

const cacheSlice = createSlice({
  name: "cache",
  initialState: cacheInitialState,
  reducers: {
    cacheResult: (state, { payload }) => {
      state.cacheResult = Object.assign(state.cacheResult, payload);
    },
  },
});

export const { reducer: cacheReducer, actions: cacheActions } = cacheSlice;
