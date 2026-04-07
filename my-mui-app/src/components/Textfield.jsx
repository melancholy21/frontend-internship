import { Stack, TextField, Typography, Box } from '@mui/material';

const LabelConfig = {
  fontSize: '16px',
  fontWeight: 700,
  color: 'text.primary',
  mb: 0.5,
};

function LabeledInput({ label, placeholder, type = "text" }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={LabelConfig}>{label}</Typography>
      <TextField 
        placeholder={placeholder} 
        variant="outlined" 
        size="small" 
        fullWidth 
        type={type}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
            backgroundColor: 'background.paper',
            '& fieldset': {
              borderColor: 'grey.300',
            }
          },
          '& .MuiOutlinedInput-input': {
            py: 1.25,
            fontSize: '16px',
            color: 'text.secondary'
          }
        }}
      />
    </Box>
  );
}

export default function GymTextFields() {
  return (
    <Stack spacing={2.5} sx={{ width: '100%' }}>
      <Stack direction={{ xs: 'column', sm: 'row'}} spacing={2} sx={{ width: '100%' }}>
        <LabeledInput label="First Name" placeholder="Enter your first name" />
        <LabeledInput label="Last Name" placeholder="Enter your last name" />
      </Stack>
      <LabeledInput label="Email Address" placeholder="Enter your email" type="email" />
      <LabeledInput label="Phone Number" placeholder="Enter your phone number" type="tel" />
      <LabeledInput label="Date of Birth" placeholder="DD/MM/YYYY" />
    </Stack>
  );
}
