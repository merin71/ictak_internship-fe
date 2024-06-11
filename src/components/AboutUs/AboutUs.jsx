import React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import LandingNav from '../LandingNav/LandingNav';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <LandingNav/>
        <Container component="main" maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box textAlign="left" sx={{ pt: 8 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                ICTAK
              </Typography>
              <Typography variant="h6" component="p" gutterBottom>
                <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry. The Company is supported by Govt. of India, partnered by Govt. of Kerala and the IT industry.</p>
              </Typography>
              
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="image-container">
              <img src="PHOTO_ICTAK-Reception.jpg" alt="ICTAK" className="side-image" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  )
}

export default AboutUs