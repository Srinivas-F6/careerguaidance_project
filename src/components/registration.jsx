import { Box, Paper, TextField, Stack, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { useState } from 'react';
import { useRegisterMutation } from '../store/authSlice';
export function Registration() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [register, { isLoading, error }] = useRegisterMutation();

  const handleRegister = async () => {
    if (password !== confirmPassword) return;

    try {
      await register({ username, email, password }).unwrap();
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
        backgroundColor: 'whitesmoke'

      }}
    >
      {/* Left Image */}
      <div style={{ marginBottom: '60px' }}>
        <img
          src="./registration.png"
          alt="Register"
          height={500}
        />
      </div>


      {/* Register Card */}
      <Paper
        elevation={10}
        sx={{
          marginTop: -10,
          width: 420,
          padding: 4,
          borderRadius: 3,
          backgroundColor: 'ffffff',
          fontWeight: 'bold',
          color: 'black'
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            {/* Title */}
            <Typography variant="h4" fontWeight="bold" textAlign="center" color='blue'>
              Create Account
            </Typography>

            <Typography variant="body2" color="text.secondary" textAlign="center">
              Sign up to get started
            </Typography>
          </Stack>

          <TextField
            required
            label="Full Name"
            type="text"
            variant="standard"
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          // sx={{blackBigTextField}}
          />


          {/* Email */}
          <TextField
            required
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            fullWidth
          />

          {/* Password */}
          <TextField
            required
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            fullWidth
          />

          {/* Confirm Password */}
          <TextField
            required
            label="Confirm Password"
            type="password"
            variant="standard"
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            sx={{
              input: {
                color: 'black'
              }

            }}
          />

          {error && (
            <Typography color="error" variant="body2">
              Registration failed
            </Typography>
          )}

          {/* Register Button */}
          <Button
            variant="contained"
            size="large"
            onClick={handleRegister}
            sx={{
              mt: 2,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #000000ff, #000000ff)',
            }}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </Button>

          {/* Footer Text */}
          <Typography variant="body2" textAlign="center" color='black'>
            Already have an account?{" "}
            <Link
              component={RouterLink}
              to="/login"
              color="black"
              underline="none"
              fontWeight={1000}
            >
              Login
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
