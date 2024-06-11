import React from 'react'
import LandingNav from '../LandingNav/LandingNav'
import './LandingPage.css'
import Footer from '../Footer/Footer'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import AboutUs from '../AboutUs/AboutUs'


const LandingPage = () => {
  return (
    <div>
        <LandingNav/>
        <Container component="main" maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box textAlign="left" sx={{ pt: 8 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                Build your Career with ICTAK
              </Typography>
              <Typography variant="h6" component="p" gutterBottom>
                <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.</p>
              </Typography>
              {/* <Button variant="contained" color="primary" component={Link} to="/about-us" sx={{ mt: 2 }} >
                Know more 
              </Button> */}
              <div className='navigation-buttons'>
                <Button color="inherit">
                  <Link style={{ textDecoration: 'none', color: 'black' }} to={'/participant'}>
                    Participant
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link style={{ textDecoration: 'none', color: 'black' }} to={'/trainer'}>
                    Trainer
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link style={{ textDecoration: 'none', color: 'black' }} to={'/iqa'}>
                    IQA
                  </Link>
                </Button>
              </div>
              
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="image-container">
              <img src="homeimage.png" alt="ICTAK" className="side-image" />
            </Box>
          </Grid>
        </Grid>
      </Container>
        {/* <div className="home-page">
       
        <h1>Welcome to ICTAK Training Programs Feedback System</h1>
        <p>
        ICTAK conducts training programs at Retail level, Corporate Level, Government level, and Academic level.
        Your feedback helps us improve our training programs and provide the best learning experience.
        </p>
        <div className="home-page-links">
          <a href="#FeedBackForm">
          <Link to="/feedback" className="btn">Provide Feedback</Link>
          </a>
           <br />
          <Link to='/login' className="btn">Login</Link>
        </div>
       </div> */}
        {/* <AboutUs /> 
        <Services />
        <Customer /> */}
        <Footer />
    </div>
  )
}

export default LandingPage