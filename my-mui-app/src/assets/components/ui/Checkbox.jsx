import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

export default function TermsCheckbox() {
  return (
    <div className="flex flex-col mt-6 mb-6 w-full text-left">
      <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.5, mb: 1, fontSize: '0.9rem' }}>
        Please read and accept the terms and conditions to proceed with the registration.
      </Typography>

      <FormControlLabel 
        control={
          <Checkbox 
            sx={{
              color: '#d1d5db',
              '&.Mui-checked': { color: '#007bff' },
              '& .MuiSvgIcon-root': { fontSize: 24 }
            }}
          />
        } 
        label="I accept the terms and conditions." 
        sx={{
          ml: -1,
          '& .MuiTypography-root': {
            fontSize: '0.875rem',
            color: '#111827',
            fontWeight: 600
          }
        }}
      />
    </div>
  );
}
