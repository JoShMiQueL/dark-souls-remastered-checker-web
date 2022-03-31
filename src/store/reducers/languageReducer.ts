import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface LanguageState {
  locale: string
}

export const languageReducer = createSlice({
  name: 'language',
  initialState: {
    locale: 'en',
  } as LanguageState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload
    },
  }
})

export const { setLocale } = languageReducer.actions

export const selectLanguage = (state: RootState) => state.language.locale

export default languageReducer.reducer