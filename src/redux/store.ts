import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
<<<<<<< HEAD
<<<<<<< HEAD

import counterReducer from "./features/counterSlice";

import { userApi } from "./services/userApi";

=======
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi";
>>>>>>> main
=======
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi";
>>>>>>> main
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
};

const rootReducer = combineReducers({
    counterReducer,
<<<<<<< HEAD
<<<<<<< HEAD


    [userApi.reducerPath]: userApi.reducer,

=======
    [userApi.reducerPath]: userApi.reducer,
>>>>>>> main
=======
    [userApi.reducerPath]: userApi.reducer,
>>>>>>> main
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
<<<<<<< HEAD
<<<<<<< HEAD
        getDefaultMiddleware({serializableCheck: false}).concat([userApi.middleware]),
=======
        getDefaultMiddleware({}).concat([userApi.middleware]),
>>>>>>> main
=======
        getDefaultMiddleware({ serializableCheck: false }).concat([userApi.middleware]),
>>>>>>> main
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
