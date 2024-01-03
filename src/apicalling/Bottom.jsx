import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import{ BsInstagram, BsWhatsapp, }from 'react-icons/bs'
import{ AiOutlineMail }from 'react-icons/ai'
function Bottom() {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark" style={{marginTop:"30px"}}>
        <Container>
          <Navbar.Brand href="#home" style={{color:"white"}} ><h1>Signup<br></br> Our App<br></br></h1><p>And get the full boodmo experience on the go</p><span style={{marginLeft:"1000px",paddingLeft:"30px"}} ><BsInstagram /> <BsWhatsapp />  <AiOutlineMail /></span></Navbar.Brand>
          
        </Container>
        
      </Navbar>
    </div>
  )
}

export default Bottom