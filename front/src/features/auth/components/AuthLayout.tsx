import { Grid } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img src="/png/amazonLogo.png" alt="amazon logo" height="40px" />
      <main>{children}</main>
    </Grid>
  )
}

export default AuthLayout
