import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const LabelConfig = {
  fontSize: '0.875rem',
  fontWeight: 700,
  color: 'text.primary',
  mb: 0.5,
};

function LabeledInput({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col w-full">
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
            fontSize: '0.9rem',
            color: 'text.secondary'
          }
        }}
      />
    </div>
  );
}

export default function GymTextFields() {
  return (
    // <div className="flex flex-col gap-5 w-full">
    <Stack spacing={2.5} sx={{ width: '100%' }}>
      {/* <div className="flex flex-col sm:flex-row gap-4 w-full"> */}
      <Stack direction={{ xs: 'column', sm: 'row'}} spacing={2} sx={{ width: '100%' }}>
        <LabeledInput label="First Name" placeholder="Enter your first name" />
        <LabeledInput label="Last Name" placeholder="Enter your last name" />
      </Stack>
      {/* </div> */}
      <LabeledInput label="Email Address" placeholder="Enter your email" type="email" />
      <LabeledInput label="Phone Number" placeholder="Enter your phone number" type="tel" />
      <LabeledInput label="Date of Birth" placeholder="DD/MM/YYYY" />
    </Stack>
    // </div>
  );
}
