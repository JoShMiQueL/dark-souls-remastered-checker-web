import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './reducers/languageReducer';

export default configureStore({
  reducer: {
    language: languageReducer,
  }
});
