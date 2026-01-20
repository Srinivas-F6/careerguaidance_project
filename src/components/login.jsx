import { Box, Paper, TextField, Stack, Typography, Button } from '@mui/material';
import { useLoginMutation } from '../store/authSlice';
import { useState } from 'react';

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'whitesmoke',
      }}
    >
      {/* Wrapper */}
      <Box sx={{ position: 'relative', left: '20%', marginTop: '-7%', marginRight: '17%' }}>

        {/* Overlapping Image */}
        <Box
          component="img"
          src="./login.png"
          alt="Login"
          sx={{
            position: 'absolute',
            left: '-23.7%',
            height: 250,
            zIndex: 2,
          }}
        />

        {/* Paper */}
        <Paper
          elevation={10}
          sx={{
            width: 400,
            padding: 4,
            pt: 10,
            borderRadius: 3,
            zIndex: 1,
            marginRight: 4,
          }}
        >
          <Stack spacing={4}>

            {/* Title */}
            <Stack spacing={1}>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                sx={{ color: 'blue' }}
              >
                Welcome Back !
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                Please login to your account
              </Typography>
            </Stack>

            {/* Form */}
            <Stack spacing={3}>
              <TextField
                required
                label="Email"
                type="email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />

              <TextField
                required
                label="Password"
                type="password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />

              {error && (
                <Typography color="error" variant="body2">
                  Login failed
                </Typography>
              )}

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleLogin}
                sx={{
                  mt: 2,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #000000ff, #000000ff)',
                }}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </Stack>

          </Stack>
        </Paper>
      </Box>
      <div style={{ marginBottom: '100px', marginRight: -170 }}>
        <img src="./loginImage.png" height={'500px'} />
      </div>
    </Box>
  );
}
