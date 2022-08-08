// import { configureStore } from '@reduxjs/toolkit'
// import { recipeApi } from '../services/Apis'
// import recipeReducer  from '../features/recipeSlice';

// export const store = configureStore({
//   reducer: {
//     [recipeApi.reducerPath]: recipeApi.reducer,
//      recipe: recipeReducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(recipeApi.middleware),
// })

import { configureStore, combineReducers } from "@reduxjs/toolkit";
 import { recipeApi } from '../services/Apis'
 import recipeReducer  from '../features/recipeSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers(
  { recipe: recipeReducer, 
    [recipeApi.reducerPath]: recipeApi.reducer});

const persistConfig = {
  key: "root",
  timeout: 1500,
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      recipeApi.middleware,
    ),
});

export const persistor = persistStore(store)