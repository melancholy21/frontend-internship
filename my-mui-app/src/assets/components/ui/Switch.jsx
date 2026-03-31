import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

export default function GymUpdatesSwitch() {
  return (
    <div className="flex flex-col mt-6 w-full text-left">
      <FormControlLabel
        control={
          <Switch 
            defaultChecked 
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#007bff',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#007bff',
              },
            }}
          />
        }
        label={
          <div className="ml-1">
            <Typography sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 600 }}>
              Subscribe to Gym Updates
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', color: '#6b7280', mt: 0.25 }}>
              Receive weekly class schedules and exclusive member offers.
            </Typography>
          </div>
        }
        sx={{ ml: -1.5, alignItems: 'flex-start', mt: 1 }}
      />
    </div>
  );
}
