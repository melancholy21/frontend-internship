import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, logout } = useContext(UserContext);
  
  useEffect(() => {
    if (logout) logout();
  }, [logout]);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    const testEmail = email.toLowerCase().trim();
    let role = null;

    if (testEmail === 'admin@test.com') role = 'admin';
    else if (testEmail === 'coach@test.com') role = 'coach';
    else if (testEmail === 'member@test.com') role = 'member';
    else {
      setError('Invalid mock account. Try admin@test.com, coach@test.com, or member@test.com');
      return;
    }

    login(role);
  
    if (role === 'admin') navigate('/admin/users', { replace: true });
    else if (role === 'coach') navigate('/members', { replace: true });
    else navigate('/profile', { replace: true });
  };

  const handleGuest = () => {
    login('guest');
    navigate('/register', { replace: true });
  };

  return (
    <Box sx={{  
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      bgcolor: 'background.default',
      overflow: 'hidden',
      p: 2
    }}>
      <Card 
        elevation={2} 
        sx={{ 
          borderRadius: '16px',
          overflow: 'hidden',
          width: '100%',
          maxWidth: 420,
          background: 'background.paper',
          p: { xs: 2.5, sm: 4 }
        }}
      >
        <Box component="section" sx={{ pb: 3, pt: 1, textAlign: 'center' }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, fontSize: '24px' }}>
            Welcome Back
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '16px', fontWeight: 500 }}>
            Sign in to access your gym account.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
          {['Admin', 'Coach', 'Member'].map((role) => (
            <Chip 
              key={role}
              label={role} 
              size="small" 
              onClick={() => setEmail(`${role.toLowerCase()}@test.com`)} 
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Stack>
        
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {error && <Alert severity="error">{error}</Alert>}
            
            <TextField 
              label="Email Address" 
              variant="outlined" 
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@test.com"
              required
            />
            
            <TextField 
              label="Password" 
              type="password"
              variant="outlined" 
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Any password works for now"
              required
            />

            <Button 
              type="submit"
              variant="contained" 
              fullWidth
              sx={{ 
                py: 1.5, 
                fontSize: '16px', 
                fontWeight: 'bold', 
                textTransform: 'none', 
                borderRadius: '8px',
                bgcolor: 'primary.main',
                color: 'white',
                mt: 1,
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  boxShadow: 'none',
                }
              }}
            >
              Sign In
            </Button>
          </form>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Divider>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>OR</Typography>
            </Divider>
          </Box>

          <Button 
            variant="outlined" 
            fullWidth
            onClick={handleGuest}
            sx={{ 
              py: 1.5, 
              fontSize: '16px', 
              fontWeight: 'bold', 
              textTransform: 'none', 
              borderRadius: '8px',
              borderColor: 'grey.300',
              color: 'text.secondary',
              '&:hover': {
                borderColor: 'primary.main',
                bgcolor: 'transparent',
                color: 'primary.main',
              }
            }}
          >
            Continue as Guest
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
}
