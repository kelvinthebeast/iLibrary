import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor:'#fff', color: '#000000', boxShadow: '1' }}>
      <Toolbar>
        <Typography variant="h6">Admin Dashboard</Typography>
      </Toolbar>
    </AppBar>
  )
}
