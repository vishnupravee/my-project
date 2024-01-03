import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import './Logadmin.css'
function Logadmin() {
    const [Email,setEmail]= useState("")
  const[password,setpasswords]= useState("")
  const changedata=async()=>{
    try{
      const config={
        headers:{
          "content-type":"application/json"
        },
      }
      const bata=await axios.post("http://localhost:3000/what",{Email,password},config)
      console.log(bata)
    }catch(error){
      console.log("could not  login",error)
    }
  }


  return (
    <div className='back'>
    <div className='nat'>
        <Form>
      <Form.Group  className="sat" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="sat" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setpasswords(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="sat" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button href='/table'   variant="primary" >
        Submit
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default Logadmin