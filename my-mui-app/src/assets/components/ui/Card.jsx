import Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GymTextFields from './Textfield';
import GymGoalSelect from './Select';
import WorkoutTimeRadio from './Radio';
import GymUpdatesSwitch from './Switch';
import TermsCheckbox from './Checkbox';
import GymSubmitButton from './Button';

export default function GymRegistrationCard() {
  return (
    <Card 
      elevation={2} 
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#ffffff'
      }}
      className="shadow-2xl bg-white w-full border border-gray-100"
    >
      <div className="pt-10 px-8 sm:px-10 pb-2">
        <Typography variant="h5" component="h2" sx={{ fontWeight: 800, color: '#111827', mb: 1, fontSize: '1.4rem' }}>
          Gym Registration Form!
        </Typography>
        <Typography variant="body1" sx={{ color: '#374151', fontSize: '0.9rem', fontWeight: 500 }}>
          Fill out the information below to sign up for our gym facilities.
        </Typography>
      </div>
      
      <CardContent sx={{ px: { xs: 4, sm: 5 }, pt: 3, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        
        <GymTextFields />
        <GymGoalSelect />
        <WorkoutTimeRadio />
        <GymUpdatesSwitch />
        <TermsCheckbox />
        
        <div className="w-full flex justify-center mt-1.5">
          <GymSubmitButton />
        </div>
        
      </CardContent>
    </Card>
  );
}
