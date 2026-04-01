import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function TermsCheckbox() {
  return (
    // <div className="flex flex-col mt-6 mb-6 w-full text-left">
    <Box component='section' sx={{ display: 'flex', flexDirection: 'column', my: 3, width: '100%', textAlign: 'left' }}>
      <Typography variant="body2" sx={{ color: 'grey.600', lineHeight: 1.5, mb: 1, fontSize: '0.9rem' }}>
        Please read and accept the terms and conditions to proceed with the registration.
      </Typography>

      <FormControlLabel 
        control={
          <Checkbox 
            sx={{
              color: 'grey.300',
              '&.Mui-checked': { color: 'primary.main' },
              '& .MuiSvgIcon-root': { fontSize: 24 }
            }}
          />
        } 
        label="I accept the terms and conditions." 
        sx={{
          ml: -1,
          '& .MuiTypography-root': {
            fontSize: '0.875rem',
            color: 'text.primary',
            fontWeight: 600
          }
        }}
      />
    </Box>
    // </div>
  );
}
