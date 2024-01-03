import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Signup.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
function Signup() {
 
  const[Name,setName] = useState("")
  const[Email,SetEmail]= useState("")
  const[password,setPassword]= useState("")
  const changetext=async()=>{

    try{
      const config={
        headers:{
          "content-type":"application/json"
        },
      }
      const data=await axios.post("http://localhost:3000/chat",{Name,Email,password},config)
      console.log(data)
      Navigate("/main")
    }catch(error){
      console.log("could not sign up",error)
    

   }
    
  
    
    
  }
  return (
    <div className='war'>
      <div className='star'>
        <Form>
        <Form.Group className="mar" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"  
              
            />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mar" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Enter email" 
              />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mar" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  
              />
      </Form.Group>
      <Form.Group className="mar" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mar'  onClick={changetext} variant="primary" >
        Submit
      </Button>
    </Form> 
    </div>
    </div>
  )
  }

export default Signup