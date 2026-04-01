import GymRegistrationCard from './assets/components/ui/Card'
import Box from '@mui/material/Box';

function App() {
  return (
    // <div className="min-h-screen bg-gray-50 flex flex-col justify-start items-center pt-16 pb-12 px-4 shadow-inner">
    <Box component='main' sx={{ minHeight: '100vh', backgroundColor: 'background.default', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', pt: 8, pb: 6, px: 4, boxShadow: 'inset 0 2px  4px 0 rgba(0, 0, 0, 0.6)' }}>
      {/* <div className="w-full max-w-lg antialiased text-gray-800 mt-2"> */}
      <Box sx={{ width: '100%', maxWidth: 512, mt: 0.25, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
        <GymRegistrationCard />
      </Box>
      {/* </div> */}
    </Box>
    // </div>
  )
}

export default App
