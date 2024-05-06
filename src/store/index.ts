import { configureStore } from '@reduxjs/toolkit';

import { hackerNewsApi } from '@/services/hacker-news';
import appSlice from '@/app/appSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
      app: appSlice,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(hackerNewsApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
