import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const SigninForm = () => {
  const onSubmit = () => {}

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
        </Grid>
      </form>
    </Box>
  )
}

export default SigninForm
