import {
  Button,
  Divider,
  Grid,
  InputLabel,
  Link,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { FormEvent } from 'react'

const Registration = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hello')
  }

  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: '#ccc',
        width: '350px',
        marginTop: 2
      }}
    >
      <form onSubmit={onSubmit}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">
            Create account
          </Typography>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}
            htmlFor="name"
          >
            Your name
          </InputLabel>
          <TextField
            type="text"
            name="name"
            id="name"
            variant="outlined"
            size="small"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <TextField
            type="email"
            name="email"
            id="email"
            variant="outlined"
            size="small"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <TextField
            type="text"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 charaters required"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}
            htmlFor="confirmPassword"
          >
            Re-enter password
          </InputLabel>
          <TextField
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 charaters required"
          />
          <Button
            variant="contained"
            style={{
              marginTop: '16px',
              height: '31px',
              backgroundColor: '#f0c14b',
              color: 'black',
              borderColor: '#a88734 #9c7e31 #846a29',
              textTransform: 'none'
            }}
          >
            Register
          </Button>
        </Grid>
      </form>

      <div style={{ marginTop: '30px' }}>
        <small>
          <span>By creating an acount, you agree to Amazon's</span>
        </small>
      </div>

      <div>
        <small>
          <a href="#">Conditions of use</a> and <a href="#">Privacy policy</a>
        </small>
      </div>

      <Divider sx={{ marginTop: '36px', marginBottom: '36px' }} />

      <div>
        <small>
          Already have an acount? <Link top="/signin">Sign-in</Link>
        </small>
      </div>
    </Box>
  )
}

export default Registration
