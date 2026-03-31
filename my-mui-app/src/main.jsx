import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#a855f7',
      dark: '#7e22ce',
    },
    secondary: {
      main: '#d946ef',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
