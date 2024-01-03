import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Api1.css'

function Api1() {
    const {brandname}= useParams()
    // console.log(brandname);
    const[mat,setmat]= useState([])
    useEffect(()=>{
   
        axios.get(`http://localhost:3000/cow/${brandname}`)
        .then((Responses)=>{
          setmat(Responses.data);

        })

    },[])
    // const{Modalimage}=useParams()
    // const currentdata=mat[Modalimage]
    console.log(mat);
  return (
    <div className='photo'>
      <div >
        <h2 style={{marginLeft:"20px",paddingTop:""}}><span>Popular</span> <span style={{color:"blueviolet"}}>Brands</span></h2>
      </div>
        {mat.map((val)=>
        
        <div className='row'>
     
     <Link to={`/kart/${val.Modalname}`}>
     <Card style={{ width: '18rem', marginBottom:"30px",marginLeft:"30px" }}>
      <Card.Body>
      <Card.Img title='click here' style={{height:"200px",borderRadius:"25px",marginLeft:"20px"}} variant="top" src={val.Modalimage} />
      
        <Card.Title>{val.Modalname}</Card.Title>
        
        </Card.Body>
        </Card>
      </Link>
        
          
        
    
     


            </div>
        
        
        )}
      

    </div>
    
  )
}
  


export default Api1