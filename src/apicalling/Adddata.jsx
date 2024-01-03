import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Adddata.css'
function Adddata() {
  const[Brandname,setBname] = useState()
  const[Modalname,setMname] = useState()
  const[Manufactureyear,setYear] = useState()
  const[Spareparts,setSpare] = useState()
  const[Spareprice,setPrice] = useState()
  const[Sparepartsimage,setSimage] = useState()
  const[Brandimage,setBimage] = useState()
  const[Modalimage,setMimage] = useState()
  const[Aftermarketspare,setAfter] = useState()
     const navigate= useNavigate()
     const changedata= async()=>{
      try{
        const config={
          headers:{
            "content-type":"application/json"
          },
        }
        const bata=await axios.post("http://localhost:3000/set",{Brandname,Modalname,Manufactureyear,Spareparts,Spareprice,Sparepartsimage,Brandimage,Modalimage,Aftermarketspare},config)
        console.log(bata)
        navigate('/table')
      }catch(error){
        console.log(" not ",error)
      }
    }
  
  return (
    <div className='mat'>
         <Form  className='far'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brandname</Form.Label>
        <Form.Control type="text" placeholder="Enter Brandname" onChange={(e)=>setBname( e.target.value)} />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Modalname</Form.Label>
        <Form.Control type="text" placeholder="Enter modalname" onChange={(e)=>setMname( e.target.value)}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Manufactureyear</Form.Label>
        <Form.Control type="text" placeholder="Enter year" onChange={(e)=>setYear( e.target.value)}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Spareparts</Form.Label>
        <Form.Control type="text" placeholder="Enter spareparts" onChange={(e)=>setSpare( e.target.value)}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Spareprice</Form.Label>
        <Form.Control type="text" placeholder="Enter price" onChange={(e)=>setPrice( e.target.value)}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sparepartsimage</Form.Label>
        <Form.Control type="text" placeholder="image"   onChange={(e)=>setSimage( e.target.value)} />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brandimage</Form.Label>
        <Form.Control type="text" placeholder="image" onChange={(e)=>setBimage( e.target.value)}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Modalimage</Form.Label>
        <Form.Control type="text" placeholder="image" onChange={(e)=>setMimage( e.target.value)}  />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Aftermarket spare</Form.Label>
        <Form.Control type="text" placeholder="Enter Aftermarket spare" onChange={(e)=>setAfter( e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={changedata} >
        Add +
      </Button>
    </Form>
    </div>
  )
  }

export default Adddata