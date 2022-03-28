import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CssBaseline } from '@mui/material'

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
  document.getElementById('root')
)
