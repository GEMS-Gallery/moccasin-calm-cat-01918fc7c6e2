import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';
import { backend } from 'declarations/backend';

const StyledHero = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0, 6),
  textAlign: 'center',
}));

const StyledFeatures = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const StyledShowcase = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const App: React.FC = () => {
  const [info, setInfo] = useState('');
  const [features, setFeatures] = useState([]);
  const [showcaseItems, setShowcaseItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const infoResult = await backend.getInfo();
      setInfo(infoResult);

      const featuresResult = await backend.getFeatures();
      setFeatures(featuresResult);

      const showcaseResult = await backend.getShowcaseItems();
      setShowcaseItems(showcaseResult);
    };

    fetchData();
  }, []);

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GEMS
          </Typography>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#showcase">Showcase</Button>
          <Button variant="contained" color="primary">Get started</Button>
        </Toolbar>
      </AppBar>

      <StyledHero>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Build on the IC with AI
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary" paragraph>
            {info}
          </Typography>
          <Button variant="contained" color="primary" size="large">Start building</Button>
        </Container>
      </StyledHero>

      <StyledFeatures id="features">
        <Container>
          <Grid container spacing={4}>
            {features.map((feature: any, index: number) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledFeatures>

      <StyledShowcase id="showcase">
        <Container>
          {showcaseItems.map((item: any, index: number) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', mb: 8 }}>
              <Box sx={{ flex: 1, pr: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary">{item.ctaText}</Button>
              </Box>
              <Box sx={{ flex: 1 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imageUrl}
                  alt={item.title}
                />
              </Box>
            </Box>
          ))}
        </Container>
      </StyledShowcase>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2024 GEMS. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default App;
