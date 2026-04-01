import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function GymUpdatesSwitch() {
  return (
    // <div className="flex flex-col mt-6 w-full text-left">
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', mt: 1.5, width: '100%', textAlign: 'left' }}>
      <FormControlLabel
        control={
          <Switch 
            defaultChecked 
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: 'primary.main',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: 'primary.main',
              },
            }}
          />
        }
        label={
          // <div className="ml-1">
          <Box component='section' sx={{ ml: 0.5 }}> 
            <Typography sx={{ fontSize: '0.875rem', color: 'text.primary', fontWeight: 600 }}>
              Subscribe to Gym Updates
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', color: 'grey.500', mt: 0.25 }}>
              Receive weekly class schedules and exclusive member offers.
            </Typography>
          </Box>
        }
        sx={{ ml: -1.5, alignItems: 'flex-start', mt: 1 }}
      />
    </Box>
    // </div>
  );
}
