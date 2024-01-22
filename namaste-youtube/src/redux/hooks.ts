import { appInitialStateType, cacheInitialStateType } from "./initialState";

export type RootState = {
    app: appInitialStateType;
    cache: cacheInitialStateType
};