import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

const LabelConfig = {
  fontSize: '0.875rem',
  fontWeight: 700,
  color: '#111827',
  mb: 1.25,
  mt: 2
};

const controlStyle = {
  '& .MuiSvgIcon-root': {
    fontSize: 22,
    color: '#d1d5db',
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    color: '#007bff',
  }
};

const formLabelStyle = {
  '& .MuiTypography-root': {
    fontSize: '0.85rem',
    color: '#111827',
    fontWeight: 600
  }
};

export default function WorkoutTimeRadio() {
  return (
    <FormControl className="w-full mt-6">
      <Typography sx={LabelConfig}>Preferred Workout Time</Typography>
      <RadioGroup
        aria-labelledby="workout-time-label"
        defaultValue=""
        name="workout-time"
      >
        <div className="grid grid-cols-2 gap-y-2 gap-x-8 w-full">
          <FormControlLabel value="Morning" control={<Radio sx={controlStyle} />} label="Morning" sx={formLabelStyle} />
          <FormControlLabel value="Afternoon" control={<Radio sx={controlStyle} />} label="Afternoon" sx={formLabelStyle} />
          <FormControlLabel value="Evening" control={<Radio sx={controlStyle} />} label="Evening" sx={formLabelStyle} />
          <FormControlLabel value="Night" control={<Radio sx={controlStyle} />} label="Night" sx={formLabelStyle} />
        </div>
      </RadioGroup>
    </FormControl>
  );
}
