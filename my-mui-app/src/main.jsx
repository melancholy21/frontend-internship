import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
      dark: '#0069d9',
    },
    background: {
      default: '#f9fafb', 
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#374151',
      disabled: '#9ca3af',
    },
    grey: {
      50: '#f9fafb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      900: '#111827',
    }
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
