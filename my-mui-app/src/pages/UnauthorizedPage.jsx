import { Box, Typography } from '@mui/material';

export default function UnauthorizedPage() {
  return (
    <Box>
      <Typography variant='h6'component='h1'>Unauthorized Page</Typography>
      <Typography variant='body1'>You do not have permission to access this page.</Typography>
    </Box>
  )
}
