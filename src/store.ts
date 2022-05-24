import { configureStore } from '@reduxjs/toolkit';
import pokemonApi from './store/reducers/pokemon';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
