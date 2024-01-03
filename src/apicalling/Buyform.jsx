import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import './Buyform.css'
import Payform from './Payform'
function Buyform() {
    const[Name,setName] = useState("")
  const[Email,setEmail]= useState("")
  const[Phone,setPhone]= useState("")
  const[Adress,setAdress]= useState("")
  const changedata=async()=>{

    try{
      const config={
        headers:{
          "content-type":"application/json"
        },
      }
      const data=await axios.post("http://localhost:3000/adduser",{Name,Email,Phone,Adress},config)
      console.log(data)
    //   Navigate("/main")
    }catch(error){
      console.log("could not sign up",error)
    

   }
    
} 
  return (
    <div >
        <div >
        <div className='sir'>
            <h2 style={{textAlign:"center"}}>Enter your Details</h2>
         <Form>
      <Form.Group className="bar" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
        
          We'll never share your email with anyone else.
        
      </Form.Group>

      <Form.Group className="bar" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" value={Phone} onChange={(e)=>setPhone(e.target.value)} placeholder="phone number" />
      </Form.Group>

      <Form.Group className="bar" controlId="formBasicPassword">
        <Form.Label>Email Adresss</Form.Label>
        <Form.Control type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" />
      </Form.Group>

      <Form.Group className="bar" controlId="formBasicPassword">
        <Form.Label>Delivery Adresss</Form.Label>
        <Form.Control type="text" value={Adress} onChange={(e)=>setAdress(e.target.value)} placeholder="enter adress" />
      </Form.Group>

      <Form.Group className="bar" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Text style={{marginLeft:"140px",fontSize:"20px",color:"brown"}}>Clicking on "continue" will not deduct any money</Form.Text>
      <br></br>
      
      <Button variant="warning"   href='/pay' style={{float:"right", marginRight:"20px",}} onClick={changedata} >
        Continue
      </Button>
      
      <Payform />
    </Form>
    </div>
    </div>
    </div>
  )
}

export default Buyform
