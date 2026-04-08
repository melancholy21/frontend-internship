import * as React from 'react';
import { MenuItem, FormControl, Select, Typography, Box } from '@mui/material';

const LabelConfig = {
  fontSize: '16px',
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
              fontSize: '16px',
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
  );
}
