import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

const LabelConfig = {
  fontSize: '0.875rem',
  fontWeight: 700,
  color: '#111827',
  mb: 0.5,
};

export default function GymGoalSelect() {
  const [goal, setGoal] = React.useState('');

  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    <div className="flex flex-col w-full mt-5">
      <Typography sx={LabelConfig}>Fitness Goal</Typography>
      <FormControl fullWidth size="small">
        <Select
          displayEmpty
          value={goal}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            borderRadius: '4px',
            backgroundColor: '#fff',
            '& fieldset': {
              borderColor: '#d1d5db',
            },
            '& .MuiSelect-select': {
              py: 1.25,
              fontSize: '0.9rem',
              color: goal === '' ? '#9ca3af' : '#374151',
            }
          }}
        >
          <MenuItem disabled value="">
            <em>Select your fitness goal</em>
          </MenuItem>
          <MenuItem value="weight_loss">Weight Loss</MenuItem>
          <MenuItem value="muscle_gain">Muscle Gain</MenuItem>
          <MenuItem value="endurance">Endurance</MenuItem>
          <MenuItem value="flexibility">Flexibility</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
