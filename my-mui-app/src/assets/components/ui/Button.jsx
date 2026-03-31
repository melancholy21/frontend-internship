import Button from '@mui/material/Button';

export default function GymSubmitButton() {
  return (
    <Button 
      variant="contained" 
      sx={{ 
        py: 1.25, 
        px: { xs:5, sm: 6 },
        fontSize: '1rem', 
        fontWeight: 'bold', 
        textTransform: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff', 
        color: '#fff',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#0069d9',
          boxShadow: 'none',
        }
      }}
    >
      Submit Registration
    </Button>
  );
}
