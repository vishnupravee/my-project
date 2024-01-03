import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import './Navabar.css'
import Log from '../final project/Log';
function Navabar() {
  return (
    <div>
      <div className='bar'>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  href="#home"><img  src='https://boodmo.com/assets/images/logo.png'/></Navbar.Brand>
          <Nav className="me-auto,ms-auto">
          
            <NavDropdown style={{backgroundColor:"beige",height:'36px',marginTop:"10px",borderRadius:"5px"}}  title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item className='bg-secondary'  href="/admin">view spare details</NavDropdown.Item>
              <NavDropdown.Item href="/add"> Add spares </NavDropdown.Item>
            
                
              <NavDropdown.Item className='bg-secondary' href="/table">remove stockout spares</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/user"> Registered users </NavDropdown.Item>
              <NavDropdown.Item className='bg-secondary' href="/core"> costomer details </NavDropdown.Item>
              
            
            </NavDropdown>
          
            <Nav.Link href="/sign"><button type="button" class="btn btn-success">Sign up</button></Nav.Link>
            <Nav.Link style={{color:'white'}} href="/view" title='kart'><BsFillCartFill /></Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
     
    </div>
   
</div>
    
  )
}




  

export default Navabar