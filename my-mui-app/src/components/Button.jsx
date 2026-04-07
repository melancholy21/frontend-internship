import Button from '@mui/material/Button';

export default function GymSubmitButton() {
  return (
    <Button 
      variant="contained" 
      sx={{ 
        py: 1.25, 
        px: { xs: 5, sm: 6 },
        fontSize: '16px', 
        fontWeight: 'bold', 
        textTransform: 'none',
        borderRadius: '4px',
        backgroundColor: 'primary.main', 
        color: 'common.white',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: 'primary.dark',
          boxShadow: 'none',
        }
      }}
    >
      Submit Registration
    </Button>
  );
}
