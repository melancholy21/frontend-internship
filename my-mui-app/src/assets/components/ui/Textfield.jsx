import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const LabelConfig = {
  fontSize: '0.875rem',
  fontWeight: 700,
  color: '#111827',
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
            backgroundColor: '#fff',
            '& fieldset': {
              borderColor: '#d1d5db',
            }
          },
          '& .MuiOutlinedInput-input': {
            py: 1.25,
            fontSize: '0.9rem',
            color: '#374151'
          }
        }}
      />
    </div>
  );
}

export default function GymTextFields() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <LabeledInput label="First Name" placeholder="Enter your first name" />
        <LabeledInput label="Last Name" placeholder="Enter your last name" />
      </div>
      <LabeledInput label="Email Address" placeholder="Enter your email" type="email" />
      <LabeledInput label="Phone Number" placeholder="Enter your phone number" type="tel" />
      <LabeledInput label="Date of Birth" placeholder="DD/MM/YYYY" />
    </div>
  );
}
