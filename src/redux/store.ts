import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import counterReducer from "./features/counterSlice";

import { userApi } from "./services/userApi";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
};

const rootReducer = combineReducers({
    counterReducer,


    [userApi.reducerPath]: userApi.reducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([userApi.middleware]),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
