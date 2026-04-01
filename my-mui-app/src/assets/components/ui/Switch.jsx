import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function GymUpdatesSwitch() {
  return (
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
          <Box component='section' sx={{ ml: 0.5 }}> 
            <Typography sx={{ fontSize: '16px', color: 'text.primary', fontWeight: 600 }}>
              Subscribe to Gym Updates
            </Typography>
            <Typography sx={{ fontSize: '12px', color: 'grey.500', mt: 0.25 }}>
              Receive weekly class schedules and exclusive member offers.
            </Typography>
          </Box>
        }
        sx={{ ml: -1.5, alignItems: 'flex-start', mt: 1 }}
      />
    </Box>
  );
}
