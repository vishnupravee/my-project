import React, { useState } from 'react'
import{ Button, Form }from 'react-bootstrap';
import './Log.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Log() {
  const [Email,setEmail]= useState("")
  const[password,setpasswords]= useState("")
  const navigate = useNavigate()
  
  const changedata=async()=>{
    try{
      const config={
        headers:{
          "content-type":"application/json"
        },
      }
      const bata=await axios.post("http://localhost:3000/what",{Email,password},config)
      if(bata.data=="log in success"){

        console.log(bata)
       return navigate("/main")
      }
      alert("Invalid email or password")
    }catch(error){
      console.log("Invalid email or password")
      console.log("could not  login",error)
    }
  }

  


  return (
    <div className='rat'>
    <div className='nat'>

         <Form>
      <Form.Group  class="sat" controlId="formBasicEmail">
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
      <Button   onClick={changedata} variant="primary" >
        Submit
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default Log