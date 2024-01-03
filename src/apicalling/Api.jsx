import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Api.css'


import { Link } from 'react-router-dom'
import Karosal from './Karosal'
import Aftermarket from './Aftermarket'
import Brand from './Brand'
import Bottom from './Bottom'
import Tailend from './Tailend'
function Api() {

    
         const[net,setnet]= useState([])
    useEffect(()=>{
   
        axios.get('http://localhost:3000/now')
        .then((Responses)=>{
            console.log(Responses)
           setnet(Responses.data)

        })

    },[])
    console.log(net);
  return (
    <div className='img' >
      <div className='dav'>
        <h2 style={{marginLeft:"20px",paddingTop:"10px"}}><span>Popular</span> <span style={{color:"blueviolet"}}>Brands</span></h2>
      </div>
      <div className='vag'>
        {net.map((val)=>
        
        <div className='row'>
     
    <Link to={`/start/${val.brandname}`} >
       <Card>
        
      <Card.Img style={{height:"200px",borderRadius:"25px",width:"200px"}} variant="top" src={val.brandimage} />
      
      </Card>
     </Link>   
          
        
    
     


            </div>
        
        
        )}
     
     </div>
     <Karosal />
     <Aftermarket />
     <Brand />
     <Bottom />
     <Tailend />
    </div>
    
  )
}


export default Api