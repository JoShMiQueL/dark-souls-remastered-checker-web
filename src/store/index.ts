import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './reducers/languageReducer';
import gameDataReducer from './reducers/gameDataReducer';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    gameData: gameDataReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;