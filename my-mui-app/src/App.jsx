import GymRegistrationCard from './assets/components/ui/Card'
import Box from '@mui/material/Box';

function App() {
  return (
    <Box component='main' sx={{ minHeight: '100vh', backgroundColor: 'background.default', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', pt: 8, pb: 6, px: 4 }}>
      <Box sx={{ width: '100%', maxWidth: 512, mt: 0.25, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
        <GymRegistrationCard />
      </Box>
    </Box>
  )
}

export default App
