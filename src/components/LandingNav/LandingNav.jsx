import React from 'react';
import './LandingNav.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {Container, Nav, NavLink, Navbar } from 'react-bootstrap';

const LandingNav = () => {
  return (
    // <Navbar className='login-navbar' collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
    //     <Container>
    //         <Navbar.Brand href="#home">
    //             <img src="LOGO_ICTAK-ENG-ALT-White-Text.png" alt="Logo" style={{height: 45}}/>ICTAK
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <Navbar.Collapse id="responsive-navbar-nav">
    //             <Nav className="me-auto">
    //             </Nav>
    //             <Nav className='nav-links ml-auto'>
    //                 <Nav.Link as={NavLink} activeClassName="active" href="#about-us">About Us</Nav.Link>
    //                 <Nav.Link as={NavLink} activeClassName="active" href="#services">Services</Nav.Link>
    //                 <Nav.Link as={NavLink} activeClassName="active" href="#customer-care">Customer Care</Nav.Link>
    //                 <a className="nav-link" href="/login">
    //                     <button className='btn btn-primary exp-btn-primary'>Sign In</button>
    //                 </a>
    //                 <a className="nav-link" href="/signup">
    //                     <button className='btn btn-primary exp-btn-primary'>Sign Up</button>
    //                 </a>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Container>
    // </Navbar>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white'}} >
        <Toolbar  className="logo-container">
          <Box  variant="h6" component="div" sx={{ flexGrow: 1, color :'black', alignItems:"flex-start"}} className="logo-container">
           <img src="ict_logo.png" alt="" style={{height:100, position: 'relative'}}/>
          </Box>

          < Button color="inherit"><Link style={{textDecoration:'none',color:'black'}} to={'/about-us'}>About</Link></Button>
          < Button color="inherit"><Link style={{textDecoration:'none',color:'black'}} to={'/login'}>Sign In</Link></Button>
          < Button color="inherit"><Link style={{textDecoration:'none',color:'black'}} to={'/signup'}>Sign Up</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default LandingNav