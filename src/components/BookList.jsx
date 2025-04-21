import { Box, Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

export default function BookList({ books }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Paper sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Promote books
        </Typography>

        {books.length === 0 ? (
          <Typography variant="body2">No books available</Typography>
        ) : (
          <List>
            {books.map((book, index) => (
              <ListItem key={index} sx={{ paddingBottom: '8px', paddingTop: '8px' }}>
                <ListItemText primary={book.title} secondary={book.author} />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>

      {/* Buttons section */}
      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button variant="contained" color="primary">Add Book</Button>
      </Box> */}
    </Box>
  );
}
