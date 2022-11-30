import { Button, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormValues {
  email: string
  password: string
}

const SigninForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = form => {
    console.log(form)
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">
            Signin
          </Typography>

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <TextField
            {...register('email', { required: true })}
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
            {...register('password', { required: true })}
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 charaters required"
          />

          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: '16px',
              height: '31px',
              width: '100%',
              backgroundColor: '#f0c14b',
              color: 'black',
              borderColor: '#a88734 #9c7e31 #846a29',
              textTransform: 'none'
            }}
          >
            Signin
          </Button>
        </Grid>
      </form>
    </Box>
  )
}

export default SigninForm
