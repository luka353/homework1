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

export default function BMWMUI() {
  const [search, setSearch] = useState('');

  const cars = [
    {
      name: 'BMW M3 Competition',
      type: 'Sedan',
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/BMW_G80_M3_1X7A2730.jpg',
      popularity: 95
    },
    {
      name: 'BMW X5',
      type: 'SUV',
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/2019_BMW_X5_xDrive30d_M_Sport_Automatic_3.0.jpg',
      popularity: 88
    },
    {
      name: 'BMW i8',
      type: 'Hybrid Sports Car',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/2018_BMW_i8_Roadster_Front.jpg',
      popularity: 90
    },
    {
      name: 'BMW Z4',
      type: 'Convertible',
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/BMW_G29_IMG_0008.jpg',
      popularity: 84
    }
  ];

  const production = [
    { year: 2020, units: 2320000 },
    { year: 2021, units: 2360000 },
    { year: 2022, units: 2400000 },
    { year: 2023, units: 2450000 }
  ];

  const filteredCars = cars.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="sticky">
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BMW Official Showcase
          </Typography>
          <TextField
            size="small"
            placeholder="Search models..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
          />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {filteredCars.map(c => (
            <Grid item key={c.name} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia component="img" height="200" image={c.img} alt={c.name} />
                <CardContent>
                  <Typography variant="h6">{c.name}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>{c.type}</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption">Popularity</Typography>
                    <LinearProgress variant="determinate" value={c.popularity} />
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
                    <TableCell>Year</TableCell>
                    <TableCell>Production Units</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {production.map(row => (
                    <TableRow key={row.year}>
                      <TableCell>{row.year}</TableCell>
                      <TableCell>{row.units.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, flexDirection: 'column' }}>
              <Typography variant="subtitle1">Factory Capacity Usage</Typography>
              <CircularProgress variant="determinate" value={78} size={120} />
              <Typography variant="body2">78% Utilized</Typography>
              <Box sx={{ width: '100%' }}>
                <Typography variant="caption">Electric Vehicle Share</Typography>
                <LinearProgress variant="determinate" value={35} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}