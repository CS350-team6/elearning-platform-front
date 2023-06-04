import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

import searchReducer from "./features/videoSearchSlice";
import { userApi } from "./services/userApi";
import { searchApi } from "./services/searchApi";
import { uploadApi } from "./services/uploadApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    counterReducer,
    searchReducer,
    [userApi.reducerPath]: userApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({serializableCheck: false}).concat([userApi.middleware, searchApi.middleware,  uploadApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
