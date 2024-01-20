import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice";

const rootReducers = combineReducers({
    app: appReducer,
  });

const store = configureStore({
    reducer: rootReducers
});

export default store;