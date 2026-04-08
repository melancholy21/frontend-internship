import { Typography, Box, Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function TermsCheckbox() {
  return (
    <Box component='section' sx={{ display: 'flex', flexDirection: 'column', my: 3, width: '100%', textAlign: 'left' }}>
      <Typography variant="body2" sx={{ color: 'grey.600', lineHeight: 1.5, mb: 1, fontSize: '12px' }}>
        Please read and accept the terms and conditions to proceed with the registration.
      </Typography>

      <FormControlLabel 
        control={
          <Checkbox 
            sx={{
              color: 'grey.300',
              '&.Mui-checked': { color: 'primary.main' },
              '& .MuiSvgIcon-root': { fontSize: '24px' }
            }}
          />
        } 
        label="I accept the terms and conditions." 
        sx={{
          ml: -1,
          '& .MuiTypography-root': {
            fontSize: '16px',
            color: 'text.primary',
            fontWeight: 600
          }
        }}
      />
    </Box>
  );
}
