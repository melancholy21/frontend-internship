import { Box, Card, CardContent, Typography } from '@mui/material';
import GymTextFields from './Textfield';
import GymGoalSelect from './Select';
import WorkoutTimeRadio from './Radio';
import GymUpdatesSwitch from './Switch';
import TermsCheckbox from './Checkbox';
import GymSubmitButton from './Button';
import { useNavigate } from 'react-router-dom';

export default function GymRegistrationCard() {
  const navigate = useNavigate();
  return (
    <Card 
      elevation={2} 
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'background.paper'
      }}
    >
      <Box component="section" sx={{ pt: 5, px: {xs: 4, sm:5}, pb: 1.5 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, fontSize: '20px' }}>
          Gym Registration Form
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '16px', fontWeight: 500 }}>
          Fill out the information below to sign up for our gym facilities.
        </Typography>
      </Box>
      
      <CardContent sx={{ px: { xs: 4, sm: 5 }, pt: 3, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        
        <GymTextFields />
        <GymGoalSelect />
        <WorkoutTimeRadio />
        <GymUpdatesSwitch />
        <TermsCheckbox />
        
        <Box component="section" sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 0.5 }} onClick={() => navigate('/login') }>
          <GymSubmitButton />
        </Box>
        
      </CardContent>
    </Card>
  );
}
