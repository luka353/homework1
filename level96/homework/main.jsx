import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  CircularProgress,
  Box,
  TextField
} from '@mui/material';

export default function SpongeBobMUI() {
  const [q, setQ] = useState('');
  const characters = [
    {
      name: 'SpongeBob SquarePants',
      role: 'Fry Cook',
      img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg',
      energy: 92
    },
    {
      name: 'Patrick Star',
      role: 'Best Friend',
      img: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Patrick_Star.svg',
      energy: 74
    },
    {
      name: 'Squidward Tentacles',
      role: 'Cashier',
      img: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Squidward_Tentacles.svg',
      energy: 46
    },
    {
      name: 'Sandy Cheeks',
      role: 'Scientist',
      img: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Sandy_Cheeks.svg',
      energy: 81
    }
  ];

  const episodes = [
    { ep: 1, title: 'Help Wanted', rating: 88 },
    { ep: 2, title: 'Pizza Delivery', rating: 95 },
    { ep: 3, title: 'Band Geeks', rating: 97 },
    { ep: 4, title: 'Chocolate with Nuts', rating: 93 },
    { ep: 5, title: 'Rock Bottom', rating: 90 }
  ];

  const filtered = characters.filter(
    c =>
      c.name.toLowerCase().includes(q.toLowerCase()) ||
      c.role.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="sticky">
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SpongeBob Fan Hub
          </Typography>
          <TextField
            size="small"
            placeholder="ძებნა..."
            value={q}
            onChange={e => setQ(e.target.value)}
            sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
          />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {filtered.map(c => (
            <Grid item key={c.name} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia component="img" height="220" image={c.img} alt={c.name} />
                <CardContent>
                  <Typography variant="h6">{c.name}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>{c.role}</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption">Energy</Typography>
                    <LinearProgress variant="determinate" value={c.energy} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} md={8}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Episode</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Rating</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {episodes.map(row => (
                    <TableRow key={row.ep}>
                      <TableCell>{row.ep}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={row.rating} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, flexDirection: 'column' }}>
              <Typography variant="subtitle1">Krusty Krab Order Queue</Typography>
              <CircularProgress variant="determinate" value={65} size={120} />
              <Typography variant="body2">65% Complete</Typography>
              <Box sx={{ width: '100%' }}>
                <Typography variant="caption">Kitchen Load</Typography>
                <LinearProgress variant="determinate" value={72} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}