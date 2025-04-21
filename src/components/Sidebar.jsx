import { Drawer, List, ListItem, ListItemText } from '@mui/material'

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: 240, flexShrink: 0 }}>
      <List sx={{ mt: 8, cursor: 'pointer', backgroundColor: '#f0f0f0', height: '100vh' }}>
        {['Overview', 'Products', 'Users', 'Settings'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
