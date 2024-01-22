import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice";
import { cacheReducer } from "./cacheSlice";

const rootReducers = combineReducers({
    app: appReducer,
    cache: cacheReducer
  });

const store = configureStore({
    reducer: rootReducers
});

export default store;