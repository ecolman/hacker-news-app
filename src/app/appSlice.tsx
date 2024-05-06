import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/store/index';

const favoritesKey = 'favoriteIds';

// Define a type for the slice state
interface AppState {
  newsItemsPageSize: number;
  favoriteIds: number[];
}

// Define the initial state using that type
const initialState: AppState = {
  newsItemsPageSize: 12,
  favoriteIds: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(favoritesKey) ?? '[]') : [],
};

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavorite: (state, actions: PayloadAction<number>) => {
      state.favoriteIds.push(actions.payload);
      localStorage.setItem(favoritesKey, JSON.stringify(state.favoriteIds));
    },
    removeFavorite: (state, actions: PayloadAction<number>) => {
      state.favoriteIds = state.favoriteIds.filter(f => f !== actions.payload);
      localStorage.setItem(favoritesKey, JSON.stringify(state.favoriteIds));
    },
  },
});

export const { addFavorite, removeFavorite } = appSlice.actions;

// selectors
export const selectIsFavorite = (state: RootState, id: number) => state.app.favoriteIds.indexOf(id) > -1;

export default appSlice.reducer;
