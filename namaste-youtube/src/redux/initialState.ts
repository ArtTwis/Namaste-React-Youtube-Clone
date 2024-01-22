export type appInitialStateType = {
    isSidebarOpen: boolean,
    videos: [],
    comments: []
};

export const appInitialState : appInitialStateType = {
    isSidebarOpen: true,
    videos: [],
    comments: []
}

export type cacheInitialStateType = {
    cacheResult: {}
};

export const cacheInitialState : cacheInitialStateType = {
    cacheResult: {}
}