import { Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Registration = () => {
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
      <form>
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
        </Grid>
      </form>
    </Box>
  )
}

export default Registration
