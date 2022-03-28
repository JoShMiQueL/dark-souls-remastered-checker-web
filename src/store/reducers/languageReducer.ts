import { createSlice } from '@reduxjs/toolkit'

export const languageReducer = createSlice({
  name: 'language',
  initialState: {
    locale: 'en',
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload
    },
  }
})

export const { setLocale } = languageReducer.actions

export default languageReducer.reducer