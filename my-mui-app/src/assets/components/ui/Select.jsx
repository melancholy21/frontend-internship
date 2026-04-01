import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LabelConfig = {
  fontSize: '0.875rem',
  fontWeight: 700,
  color: 'text.primary',
  mb: 0.5,
};

export default function GymGoalSelect() {
  const [goal, setGoal] = React.useState('');

  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    // <div className="flex flex-col w-full mt-5">
    <Box component='section'sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: 2.5}}>
      <Typography sx={LabelConfig}>Fitness Goal</Typography>
      <FormControl fullWidth size="small">
        <Select
          displayEmpty
          value={goal}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            borderRadius: '4px',
            backgroundColor: 'background.paper',
            '& fieldset': {
              borderColor: 'grey.300',
            },
            '& .MuiSelect-select': {
              py: 1.25,
              fontSize: '0.9rem',
              color: goal === '' ? 'text.disabled' : 'text.secondary',
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
    </Box>
    // </div>
  );
}
