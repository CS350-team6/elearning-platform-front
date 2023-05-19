import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import counterReducer from "./features/counterSlice";
import registerIDReducer from "./features/registerIDSlice";
import registerPWReducer from "./features/registerPWSlice";

import { userApi } from "./services/userApi";
import { registerApi } from "./services/registerApi";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
};

const rootReducer = combineReducers({
    counterReducer,
    registerIDReducer,
    registerPWReducer,

    [userApi.reducerPath]: userApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([userApi.middleware, registerApi.middleware]),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
