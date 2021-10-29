import React from 'react';
import {   Button,  Container, Nav, Navbar  } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


 
 
 
import './Header.css';

/* Header component */
const Header = () => {
  
  const {user, logOut } = useAuth();
    
    return (
       
              <>
  <Navbar bg="white" sticky="top" collapseOnSelect expand="lg"  variant="dark">
    <Container>
    
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="home  "  as={Link}  to="/home">Home</Nav.Link>
     
    {
        user.email ? <Button   onClick={logOut} className="log-out"  >Log out</Button>
        :
        <Nav.Link className="home  "  as={Link}  to="/login">Log in</Nav.Link>}
       
      <Navbar.Text  className="text-dark  ">
       
          {user.displayName}  
        
      </Navbar.Text>
    </Navbar.Collapse>
     
    </Container>
  </Navbar>
  

  
</>  
                 
        
     
        
    );
};

export default Header;