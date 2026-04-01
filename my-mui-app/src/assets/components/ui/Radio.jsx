import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'

const LabelConfig = {
  fontSize: '14px',
  fontWeight: 700,
  color: 'text.primary',
  mb: 1.25,
  mt: 2
};

const controlStyle = {
  '& .MuiSvgIcon-root': {
    fontSize: 22,
    color: 'grey.300',
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'primary.main',
  }
};

const formLabelStyle = {
  '& .MuiTypography-root': {
    fontSize: '13.6px',
    color: 'text.primary',
    fontWeight: 600
  }
};

export default function WorkoutTimeRadio() {
  return (
    <FormControl sx={{ width: 'full', mt: 2 }}>
      <Typography sx={LabelConfig}>Preferred Workout Time</Typography>
      <RadioGroup
        aria-labelledby="workout-time-label"
        defaultValue=""
        name="workout-time"
      >
        <Grid container spacing={1} columnSpacing={10} sx={{ width: '100%' }}>
          <Grid size={6}>
            <Stack direction='column'>
              <FormControlLabel value="Morning" control={<Radio sx={controlStyle} />} label="Morning" sx={formLabelStyle} />
              <FormControlLabel value="Afternoon" control={<Radio sx={controlStyle} />} label="Afternoon" sx={formLabelStyle} />
            </Stack>
          </Grid>
          <Grid size={6}>
            <Stack direction='column'>
              <FormControlLabel value="Evening" control={<Radio sx={controlStyle} />} label="Evening" sx={formLabelStyle} />
              <FormControlLabel value="Night" control={<Radio sx={controlStyle} />} label="Night" sx={formLabelStyle} />
            </Stack>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
